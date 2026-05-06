import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://gstatic.com";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3xagumF15AhnfFmchwUNmpKUEnPBphvA",
  authDomain: "event-ticket-booking-app-418a7.firebaseapp.com",
  projectId: "event-ticket-booking-app-418a7",
  storageBucket: "event-ticket-booking-app-418a7.firebasestorage.app",
  messagingSenderId: "387585336893",
  appId: "1:387585336893:web:211da762ab6ebe8f2f6c54",
  measurementId: "G-8DBVNZBXCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 1. Get the data back from memory
const savedData = JSON.parse(localStorage.getItem("userTicket"));

if (savedData) {
  // 2. Map the data to your HTML elements
  document.querySelectorAll(".data-item").forEach((item) => {
    const labelElement = item.querySelector("label");
    if (!labelElement) return; // Skip if no label found

    const label = labelElement.innerText.toLowerCase();
    const p = item.querySelector("p");

    // Match labels more accurately
    if (label.includes("name")) {
      p.innerText = savedData.name || "N/A";
    } else if (label.includes("email")) {
      p.innerText = savedData.email || "N/A";
    } 
    // This specifically targets your "About the project" or "Description" field
    else if (label.includes("project") || label.includes("about") || label.includes("description")) {
      p.innerText = savedData.description || "No description provided.";
    }
  });
}

