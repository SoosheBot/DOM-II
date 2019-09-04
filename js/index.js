// Your code goes here

    // * [ x] `mouseover`
    // * [x ] `dblclick`
	// * [ X] `keydown`
    // * [ x] `wheel`
    // * [ x] `load`
    // * [ x] `resize`
    // * [x] `tweenmax` -- stretch
	// * [ ] `drag / drop` no
	// * [ x] `focus` 
	// * [ ] `scroll` no
	// * [ ] `select` no

   

 //MOUSEOVER   
const logoScale = document.querySelector('.logo-heading');
    logoScale.addEventListener('mouseover', event => {
        logoScale.style.transform = 'scale(2.1)';
        logoScale.style.transition = ' transform 0.5s'
    });
console.log(logoScale);


//WHEEL
const zoomFooter = document.querySelector('.footer');
zoomFooter.addEventListener('wheel', event => {
    zoomFooter.style.backgroundColor = 'purple';
    zoomFooter.style.transition = 'color 0.1s';
   event.stopPropagation();
});
console.log(zoomFooter);


//RESIZE
window.addEventListener('resize', event => {
    const changeTitle = document.querySelector('.intro h2');
    changeTitle.textContent = 'WELCOME TO THE FUNNEST BUS!'
});


//KEYDOWN
window.addEventListener('keydown', event => {
    const changePara = document.querySelector('.intro p');
    changePara.textContent='OH SNAP! THIS IS THE FUNNEST BUS ON THE PLANET!'
  });


//DBLCLICK
const gaudyH2 = document.querySelector('.content-section h2');
gaudyH2.addEventListener('dblclick', event => {
  console.log(`clicked`);
  gaudyH2.style.color ='purple';
  gaudyH2.style.transition = 'color 0.5s';
   event.stopPropagation();

gaudyH2.addEventListener('dblclick', event => {
     console.log(`clicked`);
     gaudyH2.style.color ='teal';
     gaudyH2.style.transition = 'color 0.5s';
      event.stopPropagation();
   });
});



//LOAD
window.addEventListener('load', event => {
    const changeMoreText = document.querySelector('.inverse-content h2');
    changeMoreText.style.color ='orange';
    changeMoreText.style.transition = 'color 3.0s';
  });


//SELECT



//TWEENMAX
 TweenMax.to(".destination h4", 0.5, {
  rotationY: 180,
  ease: Power1.easeInOut,
}); 


//FOCUS
const gaudyNav = document.querySelector(".nav a");
gaudyNav.addEventListener("focus", event =>{
    gaudyNav.style.color = "red";
});