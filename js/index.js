// Your code goes here

    // * [ x] `mouseover`
	// * [ X] `keydown`
	// * [ x] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ x] `resize`
	// * [ ] `scroll`
	// * [ ] `select`
    // * [x ] `dblclick`

 //MOUSEOVER   
const logoScale = document.querySelector('.logo-heading');
    logoScale.addEventListener('mouseover', event => {
        logoScale.style.transform = 'scale(2.1)';
        logoScale.style.transition = ' transform 0.5s'
    });
console.log(logoScale);



//WHEEL
const zoomNav = document.querySelector('.nav');
zoomNav.addEventListener('wheel', event => {
    zoomNav.style.backgroundColor = 'purple';
});
console.log(zoomNav);

//RESIZE
window.addEventListener('resize', event => {
    const changeTitle = document.querySelector('.intro h2');
    changeTitle.textContent='WELCOME TO THE FUNNEST BUS!'
  });

//KEYDOWN
  window.addEventListener('keydown', event => {
    const changePara = document.querySelector('.intro p');
    changePara.textContent='OH SNAP! THIS IS THE FUNNEST BUS ON THE PLANET!'
  });

//DBLCLICK
const gaudyH2  = document.querySelector('.content-section h2');
gaudyH2.addEventListener('dblclick', function(event) {
  console.log(`clicked`);
  gaudyH2.style.color ='purple';
  gaudyH2.style.transition = 'color 0.5s';
   event.stopPropagation();
});

