window.onscroll = function() {
  var logo = document.querySelector('.logo');

  var scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > 200) {
    logo.classList.add('shrink');
  } else {

    logo.classList.remove('shrink');
  }
};


const mobileBar = document.getElementById('icon');
const menu = document.querySelector('.large-menu');

mobileBar.addEventListener('click', function(){
  const isMenuVisible = menu.classList.contains('show-menu');

  if (isMenuVisible) {
    menu.classList.remove('show-menu');
    mobileBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    menu.classList.add('show-menu');
    mobileBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
});

const menuItems = document.querySelectorAll('.large-menu .menu-items');

menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.remove('show-menu');
    mobileBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

function startTicker() {
  const ticker = document.getElementById('newsTicker');
  const tickerItems = ticker.getElementsByClassName('ticker-item');

  let currentPosition = 0;

  setInterval(function() {
      ticker.style.transform = `translateX(-${currentPosition}px)`;
      currentPosition++;

      if (currentPosition >= tickerItems[0].offsetWidth) {
          currentPosition = 0;
          ticker.appendChild(tickerItems[0]);
      }
  }, 10); // Adjust speed as needed
}

startTicker();


// Get references to the select menu and div elements
const selectMenu = document.getElementById('selectMenu');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

// Function to handle changing the display of div elements based on select menu value
function toggleDiv() {
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';

  const selectedDivId = selectMenu.value;
  const selectedDiv = document.getElementById(selectedDivId);
  selectedDiv.style.display = 'flex';
}

// Event listener for the select menu change
selectMenu.addEventListener('change', toggleDiv);

// Initially call the function to set the initial display based on the default selected option
toggleDiv();

