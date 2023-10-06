// // Get the button and the dropdown content
// const button = document.querySelector('.dropdown-btn');
// const dropdownContent = document.querySelector('.dropdown-content');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     // Toggle the 'active' class on the dropdown content
//     dropdownContent.classList.toggle('active');
//     button.toggle('active');
// });

// Get all dropdown buttons and content
const dropdowns = document.querySelectorAll(".dropdown");

// Add click event listener to each dropdown
dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", () => {
        // Toggle the "show" class to display or hide the content
        content.classList.toggle("show");
    });
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const content = dropdown.querySelector(".dropdown-content");

        if (event.target !== button && event.target !== content) {
            content.classList.remove("show");
        }
    });
});
