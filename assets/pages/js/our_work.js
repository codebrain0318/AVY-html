window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  var customNavToggle = document.getElementById("customNavToggle");

  customNavToggle.addEventListener("click", function () {
      // Toggle between ☰ and ✕ when the element is clicked
      customNavToggle.textContent = customNavToggle.textContent === "CLOSE  X" ? "☰" : "CLOSE  X";
  });
});

function toggleAccordionOnHover(element) {
  // Get the next element (accordion content) of the hovered section
  const content = element.nextElementSibling;

  // Toggle the 'active' class for the hovered section's content
  content.classList.toggle('active');

  // Loop through all accordion sections to hide content for others
  const allSections = document.querySelectorAll('.accordion-section .accordion-content');
  allSections.forEach(section => {
    if (section !== content && section.classList.contains('active')) {
      // Remove 'active' class for sections other than the hovered one
      section.classList.remove('active');

      // Hide the header for collapsed sections
      const header = section.previousElementSibling;
      header.classList.remove('hide-header');
    }
  });

  // Hide the header for the hovered section if it is collapsed
  element.classList.toggle('hide-header', content.classList.contains('active'));
}


function openNav() {
  document.getElementById("mySidenav").style.width = "75vw";
  document.getElementById("mySidenav-mobile").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav-mobile").style.width = "0";
}

function openNavourwork() {
  document.getElementById("mySidenav-ourwork").style.width = "100vw";
}

function closeNavourwork() {
  document.getElementById("mySidenav-ourwork").style.width = "0";
  document.getElementById("mySidenav-ourwork-mobile").style.width = "0";
}