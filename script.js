// ================= REGISTER =================
function validateRegister() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Save user data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    // Redirect to login
    window.location.href = "login.html";
    return false;
}


// ================= LOGIN =================
function validateLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return false;
    }

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "profile.html";
        return false;
    } else {
        alert("Invalid email or password");
        return false;
    }
}


// ================= ADD TO CART =================
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}


// ================= GET CART (for cart page) =================
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}
// DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// APPLY SAVED THEME
window.onload = function () {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
};