const navBar=document.querySelector("#navBar");
const navLinks= document.querySelectorAll('#navBar .nav-link');
const sections=document.querySelectorAll('section');
let prevScrollpos = window.pageYOffset;
////// nav Scroll fixed start //////
function scroll(){
  let currentScrollPos = window.pageYOffset;
  if(currentScrollPos==0)
  {
    navBar.style.top = "0";
    navBar.style.boxShadow = "";
  }
   else if  (prevScrollpos <= currentScrollPos) {
    navBar.style.top = "-65px";
    // navBar.style.boxShadow = "10px 20px 30px #ffd279";
  } else{
    navBar.style.top = "0";
    // navBar.style.boxShadow = "10px 20px 30px #ffd279";
  }
  prevScrollpos = currentScrollPos;
}
////// nav Scroll befixed end //////
////// nav Scroll active section start //////
  function activeSection(){
    const navLis=document.querySelectorAll('#navBar .container ul li');
    let current ='';
    sections.forEach(section =>{
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop-sectionHeight / 4 )){
        current = section.getAttribute('id')
      }
    })
    navLis.forEach(li =>{
      li.classList.remove('active');
      if (li.classList.contains(current)){
        li.classList.add('active');
      }
    })
  }
  addEventListener('scroll',()=>{
    scroll();
    activeSection();
  })
for(let i=0; i<navLinks.length;i++)
{
  navLinks[i].addEventListener('mouseout',(e)=>{
      let navLink=e.target;
      navLink.classList.remove('navHover')

    })
    navLinks[i].addEventListener('mouseover',(e)=>{
    let navLink=e.target;
    navLink.classList.add('navHover')
  })
}
export
{
    navBar,
    navLinks,
    sections,
    prevScrollpos,
    scroll,
    activeSection,
}