document.addEventListener("DOMContentLoaded",function(){
   function atload() {dom_rdy()}window.onload=atload;
    

 function dom_rdy(){

    setTimeout(function() {
       document.querySelector(".animated").style.transform="scale(2)"
    }, (1600));
    setTimeout(function() {
        document.querySelector(".intro").style.left="0px"
     }, (200));
     setTimeout(function() {
        document.querySelector(".shadow-intro").style.left="-20vw"
        
     }, (1200));
     setTimeout(function() {
      document.querySelector(".animated").style.opacity="1"
      
   }, (2000));
     setTimeout(function() {
        document.querySelector(".shadow-intro").style.display="none"

     }, (2600));
     setTimeout(function() {
        document.querySelectorAll(".line-anim-item")[0].style.width="50px"
        document.querySelectorAll(".line-anim-item")[1].style.width="50px"
        const mediaQuery = window.matchMedia('(max-width: 576px)')
        if (mediaQuery.matches) {
          document.querySelectorAll(".line-anim-item")[0].style.width="30px"
          document.querySelectorAll(".line-anim-item")[1].style.width="30px"
        }
     }, (2500));


}
let oldScrollTopPos=0
let header=document.querySelector(".header")
window.onscroll = function ()
{
var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);


if(oldScrollTopPos > scrollTop &  scrollTop>=500 ){
   
   header.style.position="fixed"

   header.style.boxShadow="0px 3px 16px 0px rgba(255 , 255 , 255 , 0.10)"
   header.style.backgroundColor="#3d484b"
   setTimeout(function() {
      header.style.top="0px"
   }, (200));
   console.log("Отработала 1")
}
else if(scrollTop<=500 & oldScrollTopPos > scrollTop)
{
   setTimeout(function() {
   header.style.top="-100px"
   }, (600));
   
   
   setTimeout(function() {
      header.style.top="0px"
      header.style.position="absolute"
   header.style.backgroundColor="rgba(12, 12, 12, 0)"
   header.style.boxShadow="0px 3px 16px 0px rgba(255 , 255 , 255 , 0)"
   }, (1200));
   console.log("Отработала 2")
   
}
if(scrollTop>=500 & oldScrollTopPos < scrollTop)
{
   setTimeout(function() {
      header.style.top="-100px"
   }, (200));
   
   
 
   console.log("Отработала 3")
}
oldScrollTopPos=scrollTop
console.log(scrollTop)
}

        let humburgerBackClose=document.querySelector(".close-menu")
     let humburgerIcon=document.querySelector(".hamburger-icon")
     let humburgerMenu=document.querySelector(".header-menu-mobile")
     function HamburgerMenu()
     {
     
        if(humburgerMenu.style.opacity=="0")
        {
            humburgerMenu.style.opacity="1"
            humburgerBackClose.style.display="block"
            
                humburgerMenu.style.height="auto"
            
        }
        else{
         
            humburgerMenu.style.opacity="0"
            humburgerBackClose.style.display="none"
            
                humburgerMenu.style.height="0px"
             
            
        }
      
     }
     humburgerIcon.addEventListener("click", HamburgerMenu)
     humburgerBackClose.addEventListener("click", HamburgerMenu)
});

