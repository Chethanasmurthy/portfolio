document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("greetingForm");
    const nameInput = document.getElementById("nameInput");
    const greetingMessage = document.getElementById("greetingMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const userName = nameInput.value;
        if (userName) {
            greetingMessage.textContent = `Hello, ${userName}! Welcome to our website.`;
        } else {
            greetingMessage.textContent = "Please enter your name before submitting.";
        }
    });
});
