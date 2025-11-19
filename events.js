// ===============================
// CYCLEHUB • EVENTS PAGE SCRIPT
// ===============================

// Page Fade-In
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = 1;
  }, 100);

  // Random race fact popup after 3s
  setTimeout(() => showRaceFact(), 3000);
});

// ===============================
// RANDOM RACE FACT POPUPS
// ===============================
const raceFacts = [
  "🚴‍♂️ Did you know? The Cape Epic is one of the toughest mountain bike stage races in the world!",
  "🔥 Sani2c has been running for over 20 years in South Africa!",
  "☀️ Race2TheSUN covers challenging terrain in Mpumalanga with stunning scenery!",
  "🏙️ Ride Joburg is a fun urban cycling race around Johannesburg's streets!"
];

function showRaceFact() {
  const fact = raceFacts[Math.floor(Math.random() * raceFacts.length)];
  createPopup("CycleHub Fun Fact", fact);
}

// ===============================
// EVENT CARD CLICK MODAL
// ===============================
const events = document.querySelectorAll(".event-card");

events.forEach((card) => {
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    const title = card.querySelector("h2").textContent;
    const date = card.querySelector("p:nth-of-type(1)").textContent;
    const location = card.querySelector("p:nth-of-type(2)").textContent;

    createPopup(
      `${title}`,
      `<b>${date}</b><br>${location}<br><br>Want to join? Click “OK” to register!`
    );
  });
});

// ===============================
// SCROLL-TO-TOP BUTTON
// ===============================
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.className = "scroll-btn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// ===============================
// POPUP CREATION FUNCTION
// ===============================
function createPopup(title, message) {
  const popup = document.createElement("div");
  popup.className = "cycle-popup";

  popup.innerHTML = `
    <div class="popup-content">
      <h3>${title}</h3>
      <p>${message}</p>
      <button class="popup-btn">OK</button>
    </div>
  `;

  document.body.appendChild(popup);

  const btn = popup.querySelector(".popup-btn");
  btn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "scale(0.8)";
    setTimeout(() => popup.remove(), 300);
  });
}
