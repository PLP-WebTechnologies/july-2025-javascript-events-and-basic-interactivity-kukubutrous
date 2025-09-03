// ========== Part 1: Event Handling ==========
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
    message.classList.toggle("hidden");
    toggleBtn.textContent = message.classList.contains("hidden")
        ? "Show Message"
        : "Hide Message";
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});

// ========== Part 2: Interactive Elements ==========
// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

// FAQ collapse
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("hidden");
    });
});

// Dropdown Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");

dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownList.classList.add("hidden");
    }
});

// Tabbed Interface
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // remove active class
        tabButtons.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.add("hidden"));

        // add active to clicked button
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        document.getElementById(target).classList.remove("hidden");
    });
});

// ========== Part 3: Form Validation ==========
const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent submission

    // Get inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const formSuccess = document.getElementById("formSuccess");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formSuccess.textContent = "";

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Success
    if (valid) {
        formSuccess.textContent = "Form submitted successfully! 🎉";
        form.reset();
    }
});
