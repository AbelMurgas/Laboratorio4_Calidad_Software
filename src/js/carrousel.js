// Element selectors
const prevBTN = document.querySelector(".prev");
const nextBTN = document.querySelector(".next");
const images = document.querySelector(".images");
const imagesCollection = images.querySelectorAll("img");

indexImage = 1

// constant

const amountMovePerItem = 800;

// Set interval for carousel movement
const intervalControlCarrousel = setInterval(moveCarouselNext, 5000);

prevBTN.addEventListener("click", () => {
  moveCarouselPrevious()
});

nextBTN.addEventListener("click", () => {
  moveCarouselNext()
});

function moveCarouselNext() {
  if (indexImage === (imagesCollection.length)){
    indexImage = 0
  }
  let tansformValue = -800*(indexImage);
  indexImage ++
  images.style.transform = `translateX(${tansformValue}px)`;
}

function moveCarouselPrevious() {
  if (indexImage === 0){
    indexImage = imagesCollection.length
  }
  let tansformValue = -800*(indexImage-1);
  indexImage --
  images.style.transform = `translateX(${tansformValue}px)`;
}