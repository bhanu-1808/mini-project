// Import the Firebase functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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
const auth = getAuth();

// Handle form submission
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve the input values inside the event listener
    const email = document.getElementById('floatingEmail').value;
    const password = document.getElementById('floatingPassword').value;

    // Create a new user with email and password using Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            alert("Account created successfully!");

            // Clear the input fields after successful registration
            document.getElementById('floatingEmail').value = '';
            document.getElementById('floatingPassword').value = '';
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
