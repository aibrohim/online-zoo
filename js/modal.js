const modalsign=document.querySelector(".modal__sign");
const modallogin=document.querySelector(".modal__login");
const signopen=document.querySelector("#login");

modalsign.addEventListener("click", function(evt) {
    if (evt.target.matches(".modal__sign")){
        modalsign.classList.remove("modal__sign--opened");
    }
    
})
modallogin.addEventListener("click", function(evb){
    if (evb.target.matches(".modal__login")) {
         modallogin.classList.remove("modal__login--opened");
    }
   
})


signopen.addEventListener("click", )