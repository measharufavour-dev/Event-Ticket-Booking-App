const detailsForm = document.getElementById("detailsForm");

if (detailsForm) {
  detailsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("getTicketBtn");
    submitBtn.innerText = "Generating Ticket...";

    // 1. Grab the values from your inputs
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("userEmail").value;
    const project = document.getElementById("projectDetails").value;

    // 2. Save them to the browser's memory
    const ticketData = {
      name: fullName,
      email: email,
      description: project,
    };

    localStorage.setItem("userTicket", JSON.stringify(ticketData));

    // 3. Go to Page 3 after a tiny delay for "effect"
    setTimeout(() => {
      window.location.href = "out.html";
    }, 800);
  });
}
// Add this to your Page 2 script
const cancelBtn = document.querySelector('.cancel');

if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        localStorage.removeItem('userTicket'); // Clear memory
        window.location.href = "index.html";   // Go back to start
    });
}
