import * as mainJs from './main.js';
import * as familyModule from './familyRegisterModule.js';
export function validateMerchantRegister() 
{
  let validateFamilyProductiveRegisterReturn = familyModule.validateFamilyProductiveRegister();
  let merchantTaxNumberTest= familyModule.idAndTaxNumberRegex.test(mainJs.userTaxRecord.value);
  if(!merchantTaxNumberTest)
  {
    mainJs.userTaxRecord.classList.add('is-invalid');
    mainJs.userTaxRecord.nextElementSibling.innerHTML="Please enter at least 10 numbers";
    $("#taxRecord").next().show(10);
    // return false;
  }else{
    mainJs.userTaxRecord.classList.remove('is-invalid');
    $("#taxRecord").next().hide(10);
  }
  if
  (!merchantTaxNumberTest ||!validateFamilyProductiveRegisterReturn)
  {
    return false;
  }
  else
  {
    return true;
  }
}////////////end/////////
export async function merchantRegister()
{
  let merchantUser=new  mainJs.User
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
    mainJs.userTaxRecord.value,
  )
  await fetch("http://yogahez.fatoorah.sa/api/seller-register",
  {
    method:"POST",
    headers:{
      // 'Accept': 'application/json',
      "content-Type": "application/json",
    },
  body:JSON.stringify(merchantUser),
  })
  .then(response => response.json())
  .then(merchantUser=>{
    if(merchantUser.success)
    {
        mainJs.alertSuccess(merchantUser.message);
        mainJs.resetRegisterInputsForm();
    }
        mainJs.alertError(merchantUser.message)
   
  })
  .catch(()=>{ 
    mainJs.alertError("Error!!!")
  }); 
}