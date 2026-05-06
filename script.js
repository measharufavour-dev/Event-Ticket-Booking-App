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
