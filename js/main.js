"use strict";
import *  as navBarModule from './navBarModule.js';   //navBar
export const nameRgex = /^[a-zA-Zأء-ي][a-zA-Zأء-ي \-_.0-9]{2,30}$/; // will be used in users register & send message
export const emailRgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  // will be used in users register & send message
/////////////// activ register type statrt //////////////////////
  const registerTypes = document.querySelector('#joinus .registerTypes')
  const registerType = document.querySelectorAll('#joinus .registerType i')
  let activeRegisterType; // is an i of registerType
  let currentRegisterType;// is an id of registerType ! important for register type
function removeActiv()
{
  // let classList ='classList' in registerTypes;
  for(let i = 0 ;i<registerTypes.children.length;i++){
    let child=registerTypes.children[i]; 
    if(child.tagName=='div'){
        child.classList.remove('activeType')
      }else{
        // child.className+='activeType'
        child.classList.remove('activeType')
      }
    } 
}
let showFormRetun; //will be using in register addevent
function showForm()
{
  const registerForm = document.querySelector("#joinus #register");
  const merchantTaxInput=document.querySelector("#joinus #register #taxRecordDiv");
  const representativeInput=document.querySelector("#joinus #register #registerAttachment");
  registerForm.style.display='flex';
  currentRegisterType= activeRegisterType.getAttribute('id');
  if(currentRegisterType=='merchant') {
    representativeInput.classList.add('d-none');
    merchantTaxInput.classList.remove('d-none');
    return "merchant";
  }else if(currentRegisterType=='representative'){
    merchantTaxInput.classList.add('d-none');
    representativeInput.classList.remove('d-none');
    return "representative";
  }else{
    merchantTaxInput.classList.add('d-none');
    representativeInput.classList.add('d-none');
    return "family";
  }
}
    registerType.forEach((registerActive)=>{
    registerActive.addEventListener('click',()=>{
      removeActiv();
      registerActive.parentElement.classList.add('activeType');
      activeRegisterType=registerActive.parentElement;
      showFormRetun=showForm()
    })
  })
/////////////// activ register type end //////////////////////
export function alertSuccess(inputSuccess)
{
  let showSuccessMess=document.querySelector("#showSuccess span");
  showSuccessMess.innerHTML=inputSuccess;
  $("#showSuccess").show('1000')
  setTimeout(function () {
    $("#showSuccess").hide('1000')
  }, 5000);
}

export function alertError(inputError)
{
  let showErrorMess=document.querySelector("#showError span");
  showErrorMess.innerHTML=inputError;
  $("#showError").show('1000');
  setTimeout(function () {
    $("#showError").hide('1000');
    }, 5000);
}
import * as contactUsMessage from './messageModule.js'; //////////message
/////////// html DOM start///////////////////
export let userName = document.getElementById("name");
export let userEmail = document.getElementById("email");
export let userPassword = document.getElementById("password"); 
export let userPhone = document.getElementById("phoneNumber");
export let userNationality = document.getElementById("nationality");
export let useridNumber = document.getElementById("idNumber"); 
export let userAddress = document.getElementById("address");
export let userTaxRecord = document.getElementById("taxRecord");
export let registeringForm = document.getElementById("registeringForm");
  let registerInputs = document.querySelectorAll("#register .row input");
  // let userRegisterBtn = document.getElementById("registerBtn"); 
  const togglePassword = document.querySelector("#togglePassword");

///////////////////// html DOM end /////////////////
export class User
{
  constructor(name,email,password,phone,nationality,identity_number,address,lat,lng,tax_record)
  {
    this.name=name;
    this.email=email;
    this.password=password,
    this.phone=phone;
    this.nationality=nationality,
    this.identity_number=identity_number,
    this.address=address,
    this.lat=lat,
    this.lng=lng,
    this.tax_record=tax_record
  }
}
import{validateFamilyProductiveRegister,familyProductiveRegister,idAndTaxNumberRegex}from './familyRegisterModule.js';
import {validateMerchantRegister, merchantRegister} from './merchantRegisterModule.js';
import{validateRepresentativeRegister,representativeRegister}from './representativeModule.js';
export function resetRegisterInputsForm() //////////start//////////
{
    for(let i=0;i<registerInputs.length;i++)
    registerInputs[i].value='';
}/////////////end resetRegisterInputsForm//////////
function keyTypingRegistervalid(validateUserType){
  for(let i =0; i<registerInputs.length;i++){
    registerInputs[i].addEventListener('keyup',()=>{
      validateUserType();
    })
  };
}; ////end keyTypingRegistervalid

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = userPassword.getAttribute("type") === "password" ? "text" : "password";
  userPassword.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});

registeringForm.addEventListener('submit',(e)=>{   //start regiser
  e.preventDefault();
if(showFormRetun =="merchant") //start merchant 
{
  let validateMerchantRegisterReturn= validateMerchantRegister();
    if(validateMerchantRegisterReturn)
    {
      merchantRegister();
    }else{
      keyTypingRegistervalid(validateMerchantRegister);
    }
}//end merchant
else if(showFormRetun =="representative") //start representative
{
  let validateRepresentativeRegisterReturn= validateRepresentativeRegister();
  if(validateRepresentativeRegisterReturn)
  {
    representativeRegister();
  }else{
    const inputFills= document.querySelectorAll("#registerAttachment .fills");
   for (let i = 0; i < inputFills.length; i++) {
    inputFills[i].addEventListener("change",()=>{
      validateRepresentativeRegister();
    })
   }
   keyTypingRegistervalid(validateRepresentativeRegister);
  }
}//end representative
else //start family
{
  let validateUserRegisterReturn= validateFamilyProductiveRegister();
  if(validateUserRegisterReturn)
  {
    familyProductiveRegister();
  }else{
    keyTypingRegistervalid(validateFamilyProductiveRegister);
  }
}//end family
}); //end regiser
import * as categoriesSliderModule from './categoriesSliderModule.js'; ////categoriesSlider
import * as informationsModule from './informationsModule.js'; ////informations
$(document).ready(function(){
  $("#loading").fadeOut(1000, function(){
    $("body").css("overflow", "visible");
    categoriesSliderModule.categoryIdDisplay();
  })
});