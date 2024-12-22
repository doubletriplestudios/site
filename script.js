// JavaScript to toggle dropdown menus on click
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close all dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== item.parentNode) {
        dropdown.classList.remove('active');
      }
    });

    // Toggle the clicked dropdown
    item.parentNode.classList.toggle('active');
  });
});
