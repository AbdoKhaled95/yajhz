async function getInformation()
{
   let response =await fetch(`http://yogahez.fatoorah.sa/api/information`);
   let informations = await response.json();
    /////////// mobile stores links start ///////
   let mobileStoreLinks=  
   ` <a class="m-2" href="${informations.data.google_play}" target="_blank">
   <img src="images/google_play.png" alt="google play" height="55px" width="170px  ">
   </a>
   <a class="m-2" href="${informations.data.app_store}" target="_blank">
   <img  src="images/app_store.png" alt="app store" height="55px" width="170px">
   </a>
   `;
    document.querySelector('.sotorsLinks').innerHTML=mobileStoreLinks;
        /////////// mobile stores links end ///////
      /////////// contact us start ///////
      let contactUsInfo=
      `
            <i class="bi bi-telephone py-2"> <span class="px-3">${informations.data.phone}</span></i>
            <i class="bi bi-envelope py-2"> <span class="px-3">${informations.data.email}</span></i>
            <i class="bi bi-geo-alt py-2"> <span class="px-3">${informations.data.address}</span></i>
      `;
      document.querySelector('.contactIcon').innerHTML=contactUsInfo;
      /////////// contact us end ///////
      /////////// social media start ///////
      let socialMediaLinks=
      `
          <a href="${informations.data.instagram}" target="_blank"><i class="bi bi-instagram p-md-2"></i></a>
          <a href="${informations.data.twitter}" target="_blank"><i class="bi bi-twitter p-md-2"></i></a>
          <a href="${informations.data.linkedin}" target="_blank"><i class="bi bi-linkedin p-md-2"></i></a>
      `;
      document.querySelector('#socialMediaLinks').innerHTML=socialMediaLinks;
      /////////// social media end ///////

}

getInformation();
///////////// Get data API end/////////////////////////

export
{
    getInformation,
}