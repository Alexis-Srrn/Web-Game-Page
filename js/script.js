let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.header__navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


/*Usado con la página
https://scrollrevealjs.org/
*/

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.march__text',{delay:200, origin:'top'});
sr.reveal('.march__img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
