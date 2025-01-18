// Open and Close Contact Popup
document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contacts");
    const popup = document.getElementById("contact-popup");
    const closeButton = document.getElementById("close-popup");

    // Open popup
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
    });

    // Close popup
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close popup when clicking outside content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});