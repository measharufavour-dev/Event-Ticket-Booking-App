 
  // Import the functions you need from the SDKs you need
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
    measurementId: "G-8DBVNZBXCJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 

  // Add this new import line for Firestore

// Initialize Firestore
const db = getFirestore(app);

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".primary-btn");

  if (submitBtn) {
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      // 1. Collect form data
      const name = document.querySelector("#fullName").value.trim();
      const email = document.querySelector("#email").value.trim();
      const request = document.querySelector("#specialRequest").value.trim();
      
      // 2. Pull ticket type from Page 1 selection (stored in localStorage)
      const ticketType = localStorage.getItem("selectedTicketType") || "Free";

      if (!name || !email) {
        alert("Please provide your name and email.");
        return;
      }

      try {
        submitBtn.innerText = "Generating Ticket...";
        submitBtn.disabled = true;

        // 3. Save to Firebase "tickets" collection
        const docRef = await addDoc(collection(db, "tickets"), {
          fullName: name,
          email: email,
          specialRequest: request || "None",
          ticketType: ticketType,
          createdAt: new Date()
        });

        // 4. Redirect to the output page with the new Ticket ID
        window.location.href = `out.html?id=${docRef.id}`;
      } catch (error) {
        console.error("Error booking ticket: ", error);
        alert("Failed to book ticket. Try again.");
        submitBtn.innerText = "Get My Free Ticket";
        submitBtn.disabled = false;
      }
    });
  }
});
