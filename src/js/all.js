document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mobile-nav").addEventListener("click", () => {
    document.querySelector("header nav").classList.toggle("show");
  });
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}
// Function to open the modal
function openModal() {
  modal.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.getElementById("dropbtn");
  const dropdownContent = document.getElementById("dropdown-content");

  dropbtn.addEventListener("click", function () {
    dropdownContent.style.display = "block";
  });

  dropdownContent.addEventListener("click", function (event) {
    dropbtn.textContent = event.target.getAttribute("data-value");
    dropdownContent.style.display = "none";
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches("#dropbtn")) {
      if (dropdownContent.style.display == "block") {
        dropdownContent.style.display = "none";
      }
    }
  });
});
