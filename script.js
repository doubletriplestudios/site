// JavaScript to toggle the dropdown menu
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');

// Toggle the dropdown menu when clicking the menu button
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close the menu when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open'); // Close the menu when any link is clicked
  });
});
