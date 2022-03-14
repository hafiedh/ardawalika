const info = document.querySelectorAll(".customer-order__info")
const orderDetailsDescriptionInfo = document.querySelectorAll(".customer-order__order-details-description-info")
const customerDetailsdescription = document.querySelectorAll(".customer-order__customer-details-description")
const orderDetailsdescription = document.querySelectorAll(".customer-order__order-details-description")
const descriptionInDescription = document.querySelectorAll(".customer-order__order-details-description-item")

info.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling
    panel.classList.toggle("active")
    btn.classList.toggle("active")
  })
})

orderDetailsDescriptionInfo.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling
    panel.classList.toggle("active")
    btn.classList.toggle("active")
  })
})