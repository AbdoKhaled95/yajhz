import * as mainJs from './main.js';
let senderName = document.getElementById("senderName");
let senderEmail = document.getElementById("senderEmail");
let senderMessage = document.getElementById("senderMessage"); 
let messageinputs=document.querySelectorAll('#contactUS .theMessage .form-control');
let inputsAlert =document.querySelectorAll('.theMessage .messageInputs small')
let labelsInputValue = document.querySelectorAll('.theMessage .messageInputs label');
  

////////// send message start////////// 
function validateMessageInputs() ////////////start////////
{
  let messageRgex = /^[a-zA-Zأء-ي /\-_,()@.0-9]{4,100}$/;
  let messageNameTest = mainJs.nameRgex.test(senderName.value);
  let messageEmailTest = mainJs.emailRgex.test(senderEmail.value);
  let messageTest =messageRgex.test(senderMessage.value);  
  if(!messageNameTest)
  {
    senderName.classList.add('is-invalid');
    senderName.nextElementSibling.classList.remove("d-none");
    senderName.nextElementSibling.innerHTML=`Please enter at least 3 characters `;
    // return false;
  }else{
    senderName.classList.remove('is-invalid');
    senderName.nextElementSibling.classList.add("d-none");
  }
  if(!messageEmailTest)
  {
    senderEmail.classList.add('is-invalid');
    senderEmail.nextElementSibling.classList.remove("d-none");
    senderEmail.nextElementSibling.innerHTML=`Please enter a valid email `;
    // return false;
  }else{
    senderEmail.classList.remove('is-invalid');
    senderEmail.nextElementSibling.classList.add("d-none");
  }
  if(!messageTest)
  {
    senderMessage.classList.add('is-invalid');
    senderMessage.nextElementSibling.classList.remove("d-none");
    senderMessage.nextElementSibling.innerHTML=`Please enter your message`;
    // return false;
  }else{
    senderMessage.classList.remove('is-invalid');
    senderMessage.nextElementSibling.classList.add("d-none");

  }
  if(!messageNameTest||!messageEmailTest||!messageTest){
    return false;
  }else{
    return true;
  }
}////////////end/////////
async function sendMessageInput() /////////start////////
{
  let message =
  {
    name:senderName.value,
    email:senderEmail.value,
    message:senderMessage.value
  }
  
  await fetch("http://yogahez.fatoorah.sa/api/contact-us",
  {
    method:"POST",
    headers:{
      // 'Accept': 'application/json',
      "content-Type": "application/json",
    },
  body:JSON.stringify(message),
  })
  .then(response => response.json())
  .then(message=>{
    console.log('success' ,message);
    if(message.success)
    {
        mainJs.alertSuccess(message.message);
        resetMessageForm();
    }else{
        mainJs.alertError('Please enter valid information');
    }
   
  })
  .catch((error)=>{ 
    console.log("error",error);
    mainJs.alertError("Error!!!")
  }); 
}////////end///////////////
function resetMessageForm() //////////start//////////
{
    for(let i=0;i<messageinputs.length;i++)
    messageinputs[i].value='';
}/////////////end//////////
function keyTypingMessagevalid(){
  for(let i =0; i<messageinputs.length;i++){
    messageinputs[i].addEventListener('keyup',()=>{
     validateMessageInputs();
    })
  };
};

let sendMessageBtn=document.getElementById("sendMessage");
  sendMessageBtn.addEventListener('click',()=>{
      let validateReturn =validateMessageInputs();
      if(validateReturn)
      {
        sendMessageInput();
      }
      else
      {
        keyTypingMessagevalid()
      }
});


export
{
 senderName,
 senderEmail,
 senderMessage, 
 messageinputs,
 validateMessageInputs,
 sendMessageInput,
 resetMessageForm
}
////////// send message end////////// 