// Get the current page URL
const currentPageURL = window.location.href;

// Get all the footer links
const footerLinks = document.querySelectorAll('footer ul li a');

// Loop through the footer links
footerLinks.forEach(link => {
  // Check if the link href matches the current page URL
  console.log(link.href, currentPageURL)
  if (link.href === currentPageURL) {
    // Add a class to the active link
    link.classList.add('active');
  }
});

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