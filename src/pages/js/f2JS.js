//elements dom
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBTN = document.querySelector(".prev")
const nextBTN = document.querySelector(".next")

//varrss
let index = 0

//settt interval

//let interval = setInterval(moveCarousel,1000)

//function startInterval() {
  //index++

//}

function moveCarousel() {
  console.log("MOVE")
  images.style.transform = "translateX(-800px)"
}
