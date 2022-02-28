const Modal = document.querySelector(".contact__modal");
Modal.addEventListener("click", function(evt){
    if(evt.target.matches(".contact__modal")){
        Modal.classList.toggle("contact__modal--opened");
    }
})