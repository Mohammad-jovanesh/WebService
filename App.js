const Links=document.querySelectorAll("nav .nav-link");
const Navbar=document.querySelector("nav")
var NavbarHight=Navbar.getBoundingClientRect().height
Links.forEach(link=>{
    link.addEventListener("click",(e)=>{
       
       let MyId=e.target.getAttribute("data-target")
       let theElement=document.querySelector(`#${MyId}`)
       window.scrollTo(0,theElement.offsetTop-NavbarHight-10);
        
    })
    
})

const TopBtn =document.querySelector(".TopBtn")
TopBtn.addEventListener("click",()=>{
    window.scrollTo(0,0);
})