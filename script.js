const navbar= ()=>{
    const nav=document.querySelector(".nav-links");
    const shape=document.querySelector(".shape_one");
    const navLinks=document.querySelectorAll('.nav-links li');
   shape.addEventListener('click', ()=>{
       //toggle nav
     nav.classList.toggle('nav-active');
     //toogle shape
     shape.classList.toggle('shape-click')
     //toggle links
     navLinks.forEach((link,index) => {
         if(link.style.animation){
            link.style.animation='';
         }else{
         link.style.animation= `slide 0.8s ease-in-out forwards ${index / 4 +0.25}s`;
         }
     });
    });
};
 navbar();