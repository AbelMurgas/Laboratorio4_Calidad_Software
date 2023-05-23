var isFirstClick = true;

function togglePortfolioOptions() {
  var portfolioOptions = document.getElementById("portfolioOptions");
  if (isFirstClick) {
    portfolioOptions.classList.add("show");
    isFirstClick = false;
  }else{
    if (portfolioOptions.classList.contains("show")) {
      portfolioOptions.classList.remove("show");
      
    } else {
      portfolioOptions.classList.add("show");
    }
  } 
}