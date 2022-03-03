// this code for sign up moddal opening
const register = document.querySelector(".register-button");
const registerModal = document.querySelector(".register-modal");
const body = document.querySelector(".body");
const registerActiveButton = document.querySelector(".auth-modal__btn--login");
const registerActiveHeight = document.querySelector(".register__content");
const registerActive = document.querySelector(".login-form");
const registerReturn = document.querySelector(".register--active");

register.addEventListener("click", function () {
    registerModal.classList.add("register-modal--opened");
    registerActive.classList.remove("login-form--opened");
    registerActive.classList.remove("auth-modal__btn--login--active");
    registerActiveHeight.classList.remove("register__content--height");

    registerReturn.classList.remove("register--active--closed");
})

// this code for close button
const registerCloser = document.querySelector(".modal__closer");
const registerModal2 = document.querySelector(".register-modal");

registerCloser.addEventListener("click", function () {
    registerModal2.classList.remove("register-modal--opened");
})

// this code for transition register to login form in register modal and change active button
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

// this code for return login to register form in register modal
const loginChanger = document.querySelector(".auth-modal__btn--active");
const loginShowed = document.querySelector(".login-form");
const registerFormreturn = document.querySelector(".register--active");
const loginHeightnonactive = document.querySelector(".register__content");
const registerActiveReturn = document.querySelector(".auth-modal__btn--active");

const changeNonActive = document.querySelector(".auth-modal__btn--login");

loginChanger.addEventListener("click", function () {
    loginShowed.classList.remove("login-form--opened");
    registerFormreturn.classList.remove("register--active--closed");
    loginHeightnonactive.classList.remove("register__content--height");
    registerActiveReturn.classList.add("auth-modal__btn--active");
    changeNonActive.classList.remove("auth-modal__btn--login--active");
})


// login button start


const login = document.querySelector(".login__button");
const loginModal = document.querySelector(".login-modal");
const loginHeight = document.querySelector(".login__content");

login.addEventListener("click", function () {
    loginModal.classList.add("login-modal--opened");

    loginHeight.classList.add("login__content--opened");
})

// this code for modal closer button in login modal
const loginCloser = document.querySelector(".login-modal__closer");
const loginModalCloser = document.querySelector(".login-modal");

loginCloser.addEventListener("click", function () {
    loginModalCloser.classList.remove("login-modal--opened");
})

// // this code  for transition login to register in login modal
// const loginInChanger = document.querySelector(".auth-modal__btn--register");
// const registerShower = document.querySelector(".register-form");
// const loginActiveHidden = document.querySelector(".register--active");
// const changeRegisterHeight = document.querySelector(".login__content");
// const loginContentActive = document.querySelector(".auth-modal__btn-login--active");

// const registerChangeActive = document.querySelector(".auth-modal__btn--register");

// loginInChanger.addEventListener("click", function () {
//     registerShower.classList.add("register-form--opened");
//     loginActiveHidden.classList.add("login--active--closed");
//     changeRegisterHeight.classList.add("login__content--height");
//     loginContentActive.classList.remove("auth-modal__btn-login--active");
//     registerChangeActive.classList.add("auth-modal__btn--register--active");
// })