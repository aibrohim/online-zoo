const contact = document.querySelector(".nav__button-link");
const contactmodal = document.querySelector(".contact__modal");

 contact.addEventListener("click" , function(){
     contact.classList.toggle("nav__button-link--close");
     contactmodal.classList.toggle("contact__modal--opened");
 })