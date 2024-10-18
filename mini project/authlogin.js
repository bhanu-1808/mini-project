// Import the Firebase functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNOh-laI4pX5wYzxMxIWmxjVLKO-l_V3c",
    authDomain: "atmmodel-f7dc7.firebaseapp.com",
    projectId: "atmmodel-f7dc7",
    storageBucket: "atmmodel-f7dc7.appspot.com",
    messagingSenderId: "764717926554",
    appId: "1:764717926554:web:5d65d54053f9729e953723",
    measurementId: "G-CGZDMWRS4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app); // Optional: Initialize Firebase Analytics

// Handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    const email = document.getElementById('email').value; // Get email input
    const password = document.getElementById('password').value; // Get password input

    // Firebase login using email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = "menu.html"; // Redirect to main menu
        })
        .catch((error) => {
            // Handle errors here
            alert("Error: " + error.message); // Display error message
            console.error("Error:", error.code, error.message); // Log error details
        });
});
