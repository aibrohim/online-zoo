const feedback = document.querySelector(".testimonials__btn");
const feedbackModal = document.querySelector(".feedback-modal");
const body = document.querySelector("body");

feedback.addEventListener("click", function() {
  feedbackModal.classList.add("feedback-modal--opened");
  body.classList.add("freez");
})
feedbackModal.addEventListener("click", function(evt) {
  if (evt.target.matches(".feedback-modal")) {
    feedbackModal.classList.remove("feedback-modal--opened")
    body.classList.remove("freez");
  }
})