const tickets = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");

tickets.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    // 1. Remove 'selected' from all tickets
    tickets.forEach((t) => t.classList.remove("selected"));

    // 2. Add 'selected' to the clicked one
    ticket.classList.add("selected");

   
  });
});
function goToNextPage() {
  // Navigates to the next page
  window.location.assign("in.html");
}

function refreshPage() {
  // Reloads the current page
  window.location.reload();
}
cancelBtn.addEventListener('click', () => {
    // browser pops up a 'Cancel' or 'OK' box
    const userConfirmed = confirm("Are you sure you want to refresh? You might lose unsaved changes.");
    
    if (userConfirmed) {
        window.location.reload();
    }
});
// ----------------------------------
cancelBtn.addEventListener("click", () => {
  // browser pops up a 'Cancel' or 'OK' box
  const userConfirmed = confirm(
    "Are you sure you want to refresh? You might lose unsaved changes.",
  );

  if (userConfirmed) {
    window.location.reload();
  }
});
// ----------------------------
nextBtn.addEventListener("click", () => {
  // Change button text and disable it to prevent multiple clicks
  nextBtn.innerText = "Loading...";
  nextBtn.disabled = true;

  // Optional: add a small delay to "show off" the loading state
  setTimeout(() => {
    window.location.href = "in.html";
  }, 500);
});
// --------------------------------------------------