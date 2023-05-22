import * as mainJs from './main.js';
export const idAndTaxNumberRegex = /^[0-9]{10,20}$/;
export function validateFamilyProductiveRegister() ////start & will be used in other types of register////
{
  const paswordRgex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,32}$/;
  const phoneNumberRegex = /^[0-9]{11}$/;
  const addressAndNationalityRgex = /^[a-zA-Zأء-ي /\-_,()١-٩@.0-9]{3,50}$/;
  let familyUserNameTest = mainJs.nameRgex.test(mainJs.userName.value);
  let familyUserEmailTest = mainJs.emailRgex.test(mainJs.userEmail.value);
  let familyUserPasswordTest= paswordRgex.test(mainJs.userPassword.value);
  let familyUserPhoneNumberTest= phoneNumberRegex.test(mainJs.userPhone.value);
  let familyUseridNumberTest= idAndTaxNumberRegex.test(mainJs.useridNumber.value);
  let familyUserNationalityTest = addressAndNationalityRgex.test(mainJs.userNationality.value);
  let familyUserAddressTest = addressAndNationalityRgex.test(mainJs.userAddress.value);
  if(!familyUserNameTest)
  {
    mainJs.userName.classList.add('is-invalid');
    mainJs.userName.nextElementSibling.innerHTML="Please enter at least 3 characters";
    $("#name").next().show(10);
    // return false;
  }else{
    mainJs.userName.classList.remove('is-invalid');
    $("#name").next().hide(10)
  }
  if(!familyUserEmailTest)
  {
    mainJs.userEmail.classList.add('is-invalid');
    mainJs.userEmail.nextElementSibling.innerHTML="Please enter a valid email";
    $("#email").next().show(10);
    // return false;
  }else{
    mainJs.userEmail.classList.remove('is-invalid');
    $("#email").next().hide(10);
  }
  if(!familyUserPasswordTest)
  {
    $("#password").siblings("small").text("Please enter at least 6 characters including numbers, special letters and capital letters");
    $("#password").siblings("small").show(10);
    // return false;
  }else{
    $("#password").siblings("small").hide(10);
  }
  if(!familyUserPhoneNumberTest)
  {
    mainJs.userPhone.classList.add('is-invalid');
    mainJs.userPhone.nextElementSibling.innerHTML="Please enter 11 numbers";
    $("#phoneNumber").next().show(10);
    // return false;
  }else{
    mainJs.userPhone.classList.remove('is-invalid');
    $("#phoneNumber").next().hide(10);
  }
  if(!familyUseridNumberTest)
  {
    mainJs.useridNumber.classList.add('is-invalid');
    mainJs.useridNumber.nextElementSibling.innerHTML="Please enter at least 10 numbers";
    $("#idNumber").next().show(10);
    // return false;
  }else{
    mainJs.useridNumber.classList.remove('is-invalid');
    $("#idNumber").next().hide(10)
  }
  if(!familyUserNationalityTest)
  {
    mainJs.userNationality.classList.add('is-invalid');
    mainJs.userNationality.nextElementSibling.innerHTML="Please enter at least 3 characters";
    $("#nationality").next().show(10);
    // return false;
  }else{
    mainJs.userNationality.classList.remove('is-invalid');
    $("#nationality").next().hide(10);
  }
  if(!familyUserAddressTest)
  {
    mainJs.userAddress.classList.add('is-invalid');
    mainJs.userAddress.nextElementSibling.innerHTML="Please enter at least 3 characters";
    $("#address").next().show(10);
    // return false;
  }else{
    mainJs.userAddress.classList.remove('is-invalid');
    $("#address").next().hide(10)
  }
  if
  (!familyUserNameTest||!familyUserEmailTest||!familyUserPasswordTest
    ||!familyUserPhoneNumberTest||!familyUseridNumberTest||!familyUserNationalityTest
    ||!familyUserAddressTest)
  {
    return false;
  }
  else
  {
    return true;
  }
}////////////end/////////
export async function familyProductiveRegister()
{
  let familyUser=new mainJs.User
  (
    mainJs.userName.value,
    mainJs.userEmail.value,
    mainJs.userPassword.value,
    mainJs.userPhone.value,
    mainJs.userNationality.value,
    mainJs.useridNumber.value,
    mainJs.userAddress.value,
    24.750607,
    46.715485,
  )
  await fetch("http://yogahez.fatoorah.sa/api/productive-family-register",
  {
    method:"POST",
    headers:{
      // 'Accept': 'application/json',
      "content-Type": "application/json",
    },
  body:JSON.stringify(familyUser),
  })
  .then(response => response.json())
  .then(familyUser=>{
    if(familyUser.success)
    {
        mainJs.alertSuccess(familyUser.message);
        mainJs.resetRegisterInputsForm();
    }
        mainJs.alertError(familyUser.message)
  })
  .catch(()=>{ 
    mainJs.alertError("Error!!!")
  }); 

}