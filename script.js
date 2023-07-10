// This function opens the navigation menu by setting the width of the side navigation bar to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// This function closes the navigation menu by setting the width of the side navigation bar to 0px
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

// This code attaches an event listener to the window object that listens for the 'scroll' event
window.onscroll = function() {
  // When the 'scroll' event is fired, this function is called
  myFunction()
};


// Select the toggle switch element and the text element that will display the current mode
const toggleMode = document.getElementById('toggle-mode');
const toggleText = document.querySelector('.toggle-text');

// Add an event listener to the toggle switch element
toggleMode.addEventListener('change', () => {
  if (toggleMode.checked) {
    // If the switch is checked (i.e., toggled on), switch to dark mode
    toggleText.textContent = 'DARK MODE'; // Change the text to indicate the new mode
    document.body.classList.add('dark-mode'); // Add a class to the body element to switch to dark mode
    document.cookie = 'mode=dark'; // Set a cookie to remember the user's preference
  } else {
    // If the switch is unchecked (i.e., toggled off), switch to light mode
    toggleText.textContent = 'LIGHT MODE'; // Change the text to indicate the new mode
    document.body.classList.remove('dark-mode'); // Remove the class from the body element to switch to light mode
    document.cookie = 'mode=light'; // Set a cookie to remember the user's preference
  }
});

// On page load, check the cookie and set the initial mode
const modeCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mode\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (modeCookie === 'dark') {
  toggleMode.checked = true;
  toggleText.textContent = 'DARK MODE';
  document.body.classList.add('dark-mode');
} else {
  toggleMode.checked = false;
  toggleText.textContent = 'LIGHT MODE';
  document.body.classList.remove('dark-mode');
}


// This function opens the cart menu by setting the width of the side navigation bar to 250px
function opencart() {
  document.getElementById("sidecart").style.width = "500px";
}

// This function closes the navigation menu by setting the width of the side navigation bar to 0px
function closecart() {
  document.getElementById("sidecart").style.width = "0px";
}

// This code attaches an event listener to the window object that listens for the 'scroll' event
window.onscroll = function() {
  // When the 'scroll' event is fired, this function is called
  myFunctions()
};

  //banner scroll feature
  // Select the banner list element from the DOM
  const bannerList = document.querySelector('.banner-list');

  // Set the initial position of the top of the banner list to 0
  let topPos = 0;

  // Set the height of each slide based on the window size
  let slideHeight = window.innerWidth > 767 ? 768 : window.innerHeight * 0.8;

  // Set the duration between each slide change to 7 seconds
  const duration = 7000;

  // Set a counter to keep track of the number of times the banner has been scrolled
  let scrollCount = 0;

  // Set an interval to change the banner slide every 7 seconds
  const interval = setInterval(() => {
    // Subtract the height of each slide from the current top position
    topPos -= slideHeight;

    // Set the new top position of the banner list element
    bannerList.style.top = `${topPos}px`;

    // Increment the scroll count
    scrollCount++;

    // Check if the banner has reached the end or the desired number of scrolls
    if (topPos < -1 * (bannerList.offsetHeight - slideHeight) || scrollCount === 3) {
      // Clear the interval
      clearInterval(interval);
    }

    // Reset the top position to 0 and start from the beginning after the third scroll
    if (scrollCount === 3) {
      topPos = 0;
      bannerList.style.top = `${topPos}px`;
    }
  }, duration);




// drop down search bar
// const searchIcon = document.getElementById('search-icon');
// const searchBox = document.getElementById('search-box');

// searchIcon.addEventListener('click', () => {
// 	searchBox.style.display = 'flex';
// });

//Change Product Colour
// This code defines two image URLs
const image1 = "./images/Cooling/Corsair2-black-AIO360.png";
const image2 = "./images/Cooling/Corsair2-white-AIO360.png";

// This code selects two elements from the HTML file
const switchImageButton = document.getElementById("switch-image-button");
const productImage = document.getElementById("product-image");

// This variable tracks which image is currently being displayed
let isImage1 = true;

// This event listener is triggered when the switch image button is clicked
switchImageButton.addEventListener("click", () => {
// If isImage1 is true, switch to image2 and set isImage1 to false
if (isImage1) {
productImage.src = image2;
isImage1 = false;
}
// Otherwise, switch to image1 and set isImage1 to true
else {
productImage.src = image1;
isImage1 = true;
}
});

//Changes the year of the copyright 
let currentYear = new Date().getFullYear();
let yearElement = document.getElementById("current-year");
yearElement.textContent = currentYear;

// cart
$(document).ready(function(){

  // decrease quantity in input[number]
  $(".minus").click(function(){
    var $minus = $(this).next();
    var val = $minus.val();
    val--;

    $minus.val(val);
  });	

  // increase quantity in input[number]
  $(".add").click(function(){
    var $add = $(this).prev();
    var val = $add.val();
    val++;

    $add.val(val);
  });	
});