window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navCard = document.querySelector('.container-nav');

    navToggle.addEventListener('click', function () {
        navCard.style.display = navCard.style.display === 'flex' ? 'none' : 'flex';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.getElementById("navToggle");

    navToggle.addEventListener("click", function () {
      // Toggle between ☰ and ✕ when the button is clicked
      navToggle.textContent = navToggle.textContent === "☰" ? "CLOSE X" : "☰";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var lastScrollPosition = 0;
    var navSection = document.getElementById("desktopNav");
    var scrollThreshold = 7500; // Adjust this threshold according to your preference
  
    window.addEventListener("scroll", function () {
      var currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
  
      // Check the scroll direction
      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        if (currentScrollPosition > scrollThreshold) {
          navSection.classList.add("hidden-nav");
        }
      } else {
        // Scrolling up
        navSection.classList.remove("hidden-nav");
      }
  
      lastScrollPosition = currentScrollPosition;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var customNavToggle = document.getElementById("customNavToggle");

    customNavToggle.addEventListener("click", function () {
        // Toggle between ☰ and ✕ when the element is clicked
        customNavToggle.textContent = customNavToggle.textContent === "CLOSE  X" ? "☰" : "CLOSE  X";
    });
});

// function isElementInViewport(el) {
//   function checkVisibility() {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= window.innerHeight &&
//       rect.right <= window.innerWidth
//     );
//   }

//   let isElementVisible = checkVisibility();

//   function updateVisibility() {
//     isElementVisible = checkVisibility();
//   }

//   function animate() {
//     updateVisibility();
//     requestAnimationFrame(animate);
//   }

//   animate();

//   window.addEventListener('scroll', updateVisibility);
//   window.addEventListener('resize', updateVisibility);

//   return isElementVisible;
// }

// function scrollHorizontally(e) {
//   e = window.event || e;

//   var scrollableRow = document.querySelector('.scrollable-row');

//   if (isElementInViewport(scrollableRow)) {
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     var scrollSpeed = 20;
//     scrollableRow.scrollLeft -= delta * scrollSpeed;
//     e.preventDefault();

//     $(document).ready(function() {
//       var scrollableRow = $('#scrollable-row');
//       var prevScrollPos = 0;
    
//       scrollableRow.scroll(function() {
//         var scrollLeft = scrollableRow.scrollLeft();
//         var scrollWidth = scrollableRow.get(0).scrollWidth;
//         var containerWidth = scrollableRow.width();
    
//         // Check the scroll direction
//         var isScrollingDown = scrollLeft > prevScrollPos;
    
//         // Update previous scroll position
//         prevScrollPos = scrollLeft;
    
//         // Check if scrolling down and not at the end
//         if (isScrollingDown && scrollLeft < scrollWidth - containerWidth) {
//         // Disable pointer events and hide overflow for body and html
//         document.body.style.overflowY = "hidden"
//         } else {
//           document.body.style.cssText = 'pointer-events: auto; overflow: visible;';
//           document.documentElement.style.cssText = 'pointer-events: auto; overflow: visible;';
//               }
//       });
//     });
//   }
// }

// if (window.addEventListener) {
//   // IE9, Chrome, Safari, Opera
//   window.addEventListener("mousewheel", scrollHorizontally, false);
//   // Firefox
//   window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
// } else {
//   // IE 6/7/8
//   window.attachEvent("onmousewheel", scrollHorizontally);
// }



// $(document).ready(function() {
//   var scrollableRow = $('#scrollable-row');
//   var prevScrollPos = 0;

//   scrollableRow.scroll(function() {
//     var scrollLeft = scrollableRow.scrollLeft();
//     var scrollWidth = scrollableRow.get(0).scrollWidth;
//     var containerWidth = scrollableRow.width();

//     // Check the scroll direction
//     var isScrollingUp = scrollLeft < prevScrollPos;

//     // Update previous scroll position
//     prevScrollPos = scrollLeft;

//     // Check if scrolling up and not at the beginning
//     if (isScrollingUp && scrollLeft > 0) {
//       document.body.style.cssText = 'overflow: hidden;';
//     } else {
//       document.body.style.cssText = 'pointer-events: auto; overflow: visible;';
//       document.documentElement.style.cssText = 'pointer-events: auto; overflow: visible;';
//         }
//   });
// });
