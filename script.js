const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrInput = wrapper.querySelector(".form input"),
    qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if (!qrValue) return;
    console.log(qrValue)
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrValue}`
    qrtext.innerHTML = "Qr for " + qrValue;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active")
    })
    // wrapper.classList.add("active")
})

generateBtn2.addEventListener("click", () => {
    qrtext.innerHTML = ""
    wrapper.classList.remove("active")
    qrInput.value = ""
})