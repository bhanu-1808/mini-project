// Import Firebase and Firestore functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let balance = 500; // Example balance

// Handle the form submission
document.getElementById('withdrawForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission refresh
    const amount = parseFloat(document.getElementById('withdrawAmount').value);

    // Check if the amount is greater than the balance
    if (amount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= amount; // Deduct the amount from balance

        // Store the withdrawal in Firestore
        try {
            const docRef = await addDoc(collection(db, "withdrawals"), {
                amount: amount,
                remainingBalance: balance,
                timestamp: new Date().toISOString()
            });
            alert(`Withdrawal successful. Data saved with ID: ${docRef.id}. Redirecting to QR code...`);
            window.location.href = "qr.html"; // Redirect to QR code page
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error saving withdrawal information.");
        }
    }
});
