// js for search
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('search-input');
    const placeholders = [
      'Search For Schools In Vellore...',
      'Search For Hospitals In Vellore...',
      'Search For Banks In Vellore...',
      'Search For Colleges In Vellore...',
      'Search For Theatres In Vellore...',
      'Search For Malls In Vellore...',
    ];
    
    let currentPlaceholderIndex = 0;
    
    function changePlaceholder() {
      currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
      input.placeholder = placeholders[currentPlaceholderIndex];
    }
    
    setInterval(changePlaceholder, 2000); // Change every 2 seconds
  });
// Owl carousel script
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,           // Number of items visible at once
        loop: true,         // Loop the items
        autoplay: true,    // Enable auto-scrolling
        autoplayTimeout: 1500, // Time between each slide (in milliseconds)
        autoplayHoverPause: true,
        nav: false,         // Disable navigation arrows
        dots: false,        // Disable pagination dots
        smartSpeed: 1000,   // Speed of transition
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});