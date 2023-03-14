document.addEventListener("DOMContentLoaded",function(){
   function atload() {dom_rdy()}window.onload=atload;
    

 function dom_rdy(){

    setTimeout(function() {
       document.querySelector(".animated").style.transform="scale(2)"
    }, (1600));
    setTimeout(function() {
        document.querySelector(".intro").style.left="0px"
        document.body.style.overflow="auto"
     }, (200));

     setTimeout(function() {
      document.querySelector(".animated").style.opacity="1"
      
   }, (2000));
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
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
   let smoother = ScrollSmoother.create({
		wrapper: '.scroll',
		content: '.scroll__content',
		smooth: 1.5,
		effects: true
	})
   
	gsap.fromTo('.backgraund-intro', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.backgraund-intro',
			start: 'center',
			end: '820',
			scrub: true
		}
	})
   let itemsL = gsap.utils.toArray('.push-right')

itemsL.forEach(item => {
   gsap.fromTo(item, { opacity: 0, x: -200 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
         trigger: item,
         start: '-650',
         end: '-100',
       
      }
   })
})
let itemsR = gsap.utils.toArray('.push-left')
itemsR.forEach(item => {
   gsap.fromTo(item, { opacity: 0, x: 300 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
         trigger: item,
         start: '-650',
         end: '-100',
        
      }
   })
})
let AnimHeader = gsap.utils.toArray('.header-anim')
AnimHeader.forEach(item => {
   gsap.fromTo(item, { opacity: 0}, {
      opacity: 1,
      scrollTrigger: {
         trigger: item,
         start: '-650',
         end: '-100',
        
      }
   })
})

gsap.utils.toArray(".header-menu a").forEach(function (button, i) {
   button.addEventListener("click", (e) => {
     var id = e.target.getAttribute("href");
     console.log(id);
     smoother.scrollTo(id, true, "top top");
     e.preventDefault();
   });
 });
}




