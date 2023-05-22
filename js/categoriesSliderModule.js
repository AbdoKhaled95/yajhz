let categoriesLinks=document.querySelector("#home .categoriesView .categoriesLinks");
let categoriesDisplay =document.querySelector("#home .categoriesView .categoriesDisplay");

async function baseCategories()
{
   let response =await fetch(`http://yogahez.fatoorah.sa/api/base-categories`);
   let baseCategoriesss = await response.json();
   let baseCategoriesLinks=``;

    for(let i = 0;i  < baseCategoriesss.data.length ;i++)
   {
    baseCategoriesLinks+= 
     `<p class="categoriesLink">${baseCategoriesss.data[i].name}
     <span class="d-none">${baseCategoriesss.data[i].id}</span></p>`;
   }
   categoriesLinks.innerHTML=baseCategoriesLinks;
   categoriesLinks.lastChild.classList.add("activeCategory");
}
 baseCategories(1);
//////////////////////////////////////////////////////////////
async function subCategories(CategoryId)
{
   let response =await fetch(`http://yogahez.fatoorah.sa/api/categories?category_id=${CategoryId}`);
   let allCategories = await response.json();
   let getSubCategories=``;
   for(let i = 0; i < allCategories.data.length ;i++)
   {
     getSubCategories+= 
    `<div class="categoryView col-sm-6 col-lg-4  py-2">
    <img class="categoryImg w-100 h-100" src=" ${allCategories.data[i].image}" alt="${allCategories.data[i].name}">
    <h4 class="categoryTitle">${allCategories.data[i].name}</h4>
    </div>`;
   }
   categoriesDisplay.innerHTML=getSubCategories;
  //  displySlider();
}
// function displySlider()
// {
//   $('.owl-carousel').owlCarousel({  
//     margin:10,
//     loop:true,
//     dotsEach:true,
//     autoplay:true,
//     autoplayTimeout:4000,
//     responsive : 
//     {
//       0 : {
//         items:1,
//       },
//       576 : {
//         items:2,
//       },
//       992 : {
//         items:3,
//       }
//     }
//   });
// }
subCategories(1);

function categoryIdDisplay() // called in ready function
{
  let categoryIdLink=document.querySelectorAll("#home .categoriesView .categoriesLinks .categoriesLink ");
  for (let i = 0; i < categoryIdLink.length; i++)
  {
    categoryIdLink[i].addEventListener("click",(e)=>{
    // $('.owl-carousel').trigger('destroy.owl.carousel');  
    subCategories(e.target.children[0].innerHTML);
    for (let i = 0; i < categoriesLinks.children.length; i++) {
      categoriesLinks.children[i].classList.remove("activeCategory");
    }
    categoryIdLink[i].classList.add("activeCategory");
    //subCategories(e.target.children[0].innerHTML);
    })
  };
};
export
{
    baseCategories,
    subCategories,
    // displySlider,
    categoryIdDisplay,
}