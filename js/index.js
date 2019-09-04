// Your code goes here

    // * [ x] `mouseover`
	// * [ ] `keydown` no
	// * [ x] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ ] `resize`
	// * [ ] `scroll`
	// * [ ] `select`
    // * [ ] `dblclick`

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
    zoomNav.transform = 'scale(2.1)';
    zoomNav.transition = ' transform 0.5s'
});
console.log(zoomNav);

//KEYDOWN -- not working
// const bigH2 = document.querySelector('.intro');
//     bigH2.addEventListener('keydown', event => {
//             bigH2.backgroundColor = 'purple';
//           })
//         })
// console.log(bigH2);

//RESIZE
