function changeImage(element) {
    element.children[0].style.display = 'none';
    element.children[1].style.display = 'block';
}

function resetImage(element) {
    element.children[0].style.display = 'block';
    element.children[1].style.display = 'none';
}

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
