let helloWorldButton = document.querySelector("#helloWorldButton")
let helloWorld = document.querySelector("#helloWorld")
if (helloWorldButton) {
    helloWorldButton.addEventListener("click", () => {
        helloWorld.textContent += "Hello world! "
        helloWorld.scrollIntoView({
            block: "end"
        })
    })
}
let formGlihName = document.querySelector("#formGlihName")
let nameInput = document.querySelector("#nameInput")
let userName = ""
formGlihName.addEventListener("submit", (event) => {
    event.preventDefault()
    userName = nameInput.value
    const userNameMessage = document.querySelector("#userNameMessage")
    userNameMessage.textContent = `oi ${userName}!!!!!!!!!!!!!!!!!!!`
    nameInput.value = ""
})
let glihButton = document.querySelector("#glihButton")
let glihMessage = document.querySelector("#glihMessage")
let glihBalanceMessage = document.querySelector("#glihBalanceMessage")
let glihBalance = 0
let glihNumber = 0
let tip = document.querySelector("#tip")
let glihIncrease = 1
glihBalanceMessage.hidden = true
glihButton.addEventListener("keydown", (event)=> {
    if (event.key === "Enter") {
        event.preventDefault()
    }
})
glihButton.addEventListener("click", () => {
    tip.hidden = true
    glihBalanceMessage.hidden = false
    glihNumber = glihNumber + glihIncrease
    glihBalance = glihBalance + glihIncrease
    glihBalanceMessage.textContent = `glihs: ${glihBalance}`
    if (glihNumber > 1) {
        glihMessage.textContent = `${userName} ganhou ${glihNumber} glihs!`
    }
    else {
        glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
    }
})
let buyGlih = document.querySelector("#buyGlih")
let buyGlihPrice = 67
buyGlih.textContent = `comprar glih upgrade $${buyGlihPrice} glihs`
buyGlih.addEventListener("click",()=>{
    if (glihBalance >= buyGlihPrice) {
        glihBalance = glihBalance - buyGlihPrice
        glihBalanceMessage.textContent = `glihs: ${glihBalance}`
        buyGlihPrice = buyGlihPrice * 2
        buyGlih.textContent = `comprar glih upgrade $${buyGlihPrice} glihs`
        glihIncrease++
    }
})
