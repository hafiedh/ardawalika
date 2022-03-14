const faqQuestion = document.querySelectorAll(".faq__question")
const faqAnswer = document.querySelectorAll(".faq__answer")

faqQuestion.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling
    
    panel.classList.toggle("active")
    btn.classList.toggle("active")
  })
})