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
