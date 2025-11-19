// ===============================
//  Stolen Bikes Data (ARRAY)
// ===============================
const stolenBikes = [
  {
    image: "images/stolen.jpg",
    name: "Trek Aluminium",
    date: "12 August 2025",
    location: "Johannesburg",
    info: "Please contact us if you have any information.",
    phone: "0712433127",
    police: "Report crime at Edenvale police station",
    type: "Stolen from vehicle"
  }
];

// ===============================
//  FUNCTION TO DISPLAY BIKES
// ===============================
function displayStolenBikes() {
  const container = document.getElementById("bikeContainer");

  stolenBikes.forEach(bike => {
    const card = document.createElement("div");
    card.classList.add("bike-card");

    card.innerHTML = `
      <img src="${bike.image}" alt="${bike.name}">
      <h2>${bike.name}</h2>
      <p><b>Date Stolen:</b> ${bike.date}</p>
      <p><b>Location:</b> ${bike.location}</p>
      <p>${bike.info}</p>
      <p>${bike.phone}</p>
      <p>${bike.police}</p>
      <p>Crime Type: ${bike.type}</p>
    `;

    container.appendChild(card);
  });
}

// ===============================
//  INITIALIZE PAGE
// ===============================
document.addEventListener("DOMContentLoaded", displayStolenBikes);
