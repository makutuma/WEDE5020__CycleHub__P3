// ===============================
// CYCLEHUB • CONTACT PAGE SCRIPT
// ===============================

// Smooth fade-in for the whole page
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = 1;
    }, 100);

    // Small greeting popup after 2 seconds
    setTimeout(() => {
        createPopup("Welcome to CycleHub! 👋", "Have a question? Send us a message anytime.");
    }, 2000);
});


// ===============================
// FORM VALIDATION
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop default email client opening

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    if (name.value.trim() === "" || email.value.trim() === "") {
        createPopup("⚠ Missing Info", "Please fill in your name and email.");
        return;
    }

    // Show confirmation popup
    createPopup(
        "Message Sent! 🚴‍♂️💨",
        `Thank you ${name.value}! We will reply to you soon.`
    );

    // Clear form
    name.value = "";
    email.value = "";
    message.value = "";
});


// ===============================
// INTERACTIVE FEATURED BIKES
// ===============================
const bikes = document.querySelectorAll(".bike img");

bikes.forEach((bike) => {
    bike.addEventListener("mouseenter", () => {
        bike.style.transform = "scale(1.15)";
        bike.style.transition = "0.3s ease";
    });

    bike.addEventListener("mouseleave", () => {
        bike.style.transform = "scale(1)";
    });

    bike.addEventListener("click", () => {
        createPopup(
            "🔥 Featured Bike!",
            `You clicked on the <b>${bike.alt}</b>.  
            Want one? Ride with us! 😎`
        );
    });
});


// ===============================
// POPUP SYSTEM (Custom & Stylish)
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


// ===============================
// POPUP CSS (Added via JS)
// ===============================

const style = document.createElement("style");
style.textContent = `
.cycle-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background: #fff7ed;
    padding: 20px 25px;
    border-radius: 16px;
    box-shadow: 0 6px 25px rgba(0,0,0,0.25);
    z-index: 9999;
    min-width: 260px;
    opacity: 1;
    transition: all 0.3s ease;
}

.cycle-popup h3 {
    margin: 0;
    color: #4b3621;
    text-align: center;
    font-size: 22px;
}

.cycle-popup p {
    text-align: center;
    color: #6b4f34;
    margin: 10px 0 15px;
}

.popup-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background: #4b3621;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease;
}

.popup-btn:hover {
    background: #8b5e3c;
    transform: scale(1.05);
}
`;
document.head.appendChild(style);
