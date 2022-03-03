const register = document.querySelector(".register-button");
const registerModal = document.querySelector(".register-modal");
const body = document.querySelector(".body");
const registerActiveHeight = document.querySelector(".register__content");
const registerActive = document.querySelector(".login-form");
const registerRepeat = document.querySelector(".register--active");

register.addEventListener("click", function () {
    registerModal.classList.add("register-modal--opened");
    registerActive.classList.remove("login-form--opened");
    registerActiveHeight.classList.remove("register__content--height");

    registerRepeat.classList.remove("register--active--closed");
})

const registerCloser = document.querySelector(".modal__closer");
const registerModal2 = document.querySelector(".register-modal");

registerCloser.addEventListener("click", function () {
    registerModal2.classList.remove("register-modal--opened");
})

const registerChanger = document.querySelector(".auth-modal__btn--login");
const loginShower = document.querySelector(".login-form");
const registerActiveHidden = document.querySelector(".register--active");
const registerHeight = document.querySelector(".register__content");
const registerContentActive = document.querySelector(".auth-modal__btn--active");

const changeActive = document.querySelector(".auth-modal__btn--login");

registerChanger.addEventListener("click", function () {
    loginShower.classList.add("login-form--opened");
    registerActiveHidden.classList.add("register--active--closed");
    registerHeight.classList.add("register__content--height");
    registerContentActive.classList.remove("auth-modal__btn--active");
    changeActive.classList.add("auth-modal__btn--login--active");
})

const loginChanger = document.querySelector(".auth-modal__btn--active");
const loginShowed = document.querySelector(".login-form");
const registerFormRepeat = document.querySelector(".register--active");
const loginHeightnonactive = document.querySelector(".register__content");
const registerActiveReturn = document.querySelector(".auth-modal__btn--active");

const changeNonActive = document.querySelector(".auth-modal__btn--login");

loginChanger.addEventListener("click", function () {
    loginShowed.classList.remove("login-form--opened");
    registerFormRepeat.classList.remove("register--active--closed");
    loginHeightnonactive.classList.remove("register__content--height");
    registerActiveReturn.classList.add("auth-modal__btn--active");
    changeNonActive.classList.remove("auth-modal__btn--login--active");
})

