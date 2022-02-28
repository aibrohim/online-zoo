const feedback = document.querySelector(".testimonials__btn");
const feedbackOpened = document.querySelector(".feedback-modal");

feedback.addEventListener("click", function() {
  feedbackOpened.classList.toggle("feedback-modal--opened")
})