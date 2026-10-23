let helloWorldButton = document.querySelector("#helloWorldButton")
let helloWorld = document.querySelector("#helloWorld")
helloWorldButton.addEventListener("click", () => {
  helloWorld.textContent += "Hello world! "
})
