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