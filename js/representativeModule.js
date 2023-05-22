import * as mainJs from './main.js';
import * as familyModule from './familyRegisterModule.js';
 const userVehiclePictures = document.getElementById("vehiclePictures"); 
 const userVehicleCertificate = document.getElementById("vehicleCertificate"); 
 const userDrivingCertificate = document.getElementById("drivingCertificate"); 
 const userVehiclePlacte = document.getElementById("vehiclePlacte"); 
export function validateRepresentativeRegister()
{
  let validateFamilyProductiveRegisterReturn = familyModule.validateFamilyProductiveRegister();
  let idxDotVehiclePictures = userVehiclePictures.value.lastIndexOf(".") + 1;
  let extFileVehiclePictures = userVehiclePictures.value.substr(idxDotVehiclePictures,userVehiclePictures.value.length).toLowerCase();
  if (!["jpg", "jpeg", "png"].includes(extFileVehiclePictures)){
    $("#vehiclePictures").siblings("small").text("Only jpg/jpeg and png files are allowed!");
    $("#vehiclePictures").siblings("small").show(10);
    // mainJs.userVehiclePictures.value = "";
  }else{
    $("#vehiclePictures").siblings("small").hide(10);
  }
  let idxDotVehicleCertificate = userVehicleCertificate.value.lastIndexOf(".") + 1;
  let extFileVehicleCertificate = userVehicleCertificate.value.substr(idxDotVehicleCertificate,userVehicleCertificate.value.length).toLowerCase();
  if (!["jpg", "jpeg", "png"].includes(extFileVehicleCertificate)){
    $("#vehicleCertificate").siblings("small").text("Only jpg/jpeg and png files are allowed!");
    $("#vehicleCertificate").siblings("small").show(10);
    // mainJs.userVehicleCertificate.value = "";
  }else{
    $("#vehicleCertificate").siblings("small").hide(10);
  }
  let idxDotDrivingCertificate = userDrivingCertificate.value.lastIndexOf(".") + 1;
  let extFileDrivingCertificate = userDrivingCertificate.value.substr(idxDotDrivingCertificate,userDrivingCertificate.value.length).toLowerCase();
  if (!["jpg", "jpeg", "png"].includes(extFileDrivingCertificate)){
    $("#drivingCertificate").siblings("small").text("Only jpg/jpeg and png files are allowed!");
    $("#drivingCertificate").siblings("small").show(10);
    // mainJs.userDrivingCertificate.value = "";
  }else{
    $("#drivingCertificate").siblings("small").hide(10);
  }
  let idxDotVehiclePlacte = userVehiclePlacte.value.lastIndexOf(".") + 1;
  let extFileVehiclePlacte = userVehiclePlacte.value.substr(idxDotVehiclePlacte,userVehiclePlacte.value.length).toLowerCase();
  if (!["jpg", "jpeg", "png"].includes(extFileVehiclePlacte)){
    $("#vehiclePlacte").siblings("small").text("Only jpg/jpeg and png files are allowed!");
    $("#vehiclePlacte").siblings("small").show(10);
    // mainJs.userVehiclePlacte.value = "";
  }else{
    $("#vehiclePlacte").siblings("small").hide(10);
  }
  if
  (userVehiclePictures.value == ""||userVehicleCertificate.value == ""
  || userDrivingCertificate.value == ""||userVehiclePlacte.value == ""||!validateFamilyProductiveRegisterReturn)
  {
    return false;
  }
  else
  {
    return true;
  }
} 
const url= "http://yogahez.fatoorah.sa/api/agent-register";

////////////end/////////
export async function representativeRegister()
{
  let headers = new Headers();
    headers.append('Accept', 'application/json');
   let formData = new FormData();
    formData.append("name",mainJs.userName.value);
    formData.append("email", mainJs.userEmail.value);
    formData.append("password", mainJs.userPassword.value);
    formData.append("phone", mainJs.userPhone.value);
    formData.append("nationality",mainJs.userNationality.value);
    formData.append("identity_number",mainJs.useridNumber.value);
    formData.append("address", mainJs.userAddress.value);
    formData.append("lat",24.750607);
    formData.append("lng",46.715485);
    formData.append("driving_image",userDrivingCertificate.files[0]);
    for (const file of userVehiclePictures.files){
      formData.append("vehicle_images[]",file);
    };
    formData.append("vehicle_registration", userVehicleCertificate.files[0]);
    formData.append("vehicle_tablet_image",userVehiclePlacte.files[0]);
  let request = new Request(url,{
    method:"POST",
    headers:headers,
    // mode:'cors',
    body:formData,
  });
  await fetch(request)
  .then(response => response.json())
  .then(formData=>{
    if(formData.success)
    {
        mainJs.alertSuccess(formData.message);
        mainJs.resetRegisterInputsForm();
    }
    mainJs.alertError(formData.message)
  })
  .catch(()=>{ 
    mainJs.alertError("Error!!!");
  }); 
  // .then((response)=>{
  //   console.log(response);
    
  //   if(response.success)
  //   {
  //       mainJs.alertSuccess(formData.message);
  //       mainJs.resetRegisterInputsForm();
  //       console.log(response);
  //   }
  //   mainJs.alertError(formData.message)
  // })
  // .catch((error)=>{ 
  //   console.log("error",error);
  //   mainJs.alertError("Error!!!")
  // }); 
}
