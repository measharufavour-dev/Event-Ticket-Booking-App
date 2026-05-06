// 1. Get the data back from memory
const savedData = JSON.parse(localStorage.getItem("userTicket"));

if (savedData) {
  // 2. Map the data to your HTML elements
  // We use the labels to find the right spots
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
    else if (
      label.includes("project") ||
      label.includes("about") ||
      label.includes("description")
    ) {
      p.innerText = savedData.description || "No description provided.";
    }
  });
}
// --------------------------------
// Add this to your Page 3 script
const bookAnotherBtn = document.querySelector(".secondary-btn"); // Or whichever class you used

if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener('click', () => {
        localStorage.removeItem('userTicket'); 
        window.location.href = "index.html"; 
    });
}
// -------------------------------
// Add this to your "Download" or "Secondary" button
const downloadBtn = document.querySelector(".primary-btn");

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        window.print(); // Opens the "Save as PDF" or Print dialog
    });
}



