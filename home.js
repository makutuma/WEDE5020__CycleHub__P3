// ==========================================
// PAGE FADE-IN ANIMATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "1.2s ease";
        document.body.style.opacity = "1";
    }, 150);

    seoEnhancer();
});

// ==========================================
// SEO AUTO-ENHANCER (Title + Description + Keywords)
// ==========================================
function seoEnhancer() {
    document.title += " | CycleHub";

    if (!document.querySelector("meta[name='description']")) {
        const desc = document.createElement("meta");
        desc.name = "description";
        desc.content = "CycleHub Stolen Bike Database • Recovery info, images and reporting system.";
        document.head.appendChild(desc);
    }

    if (!document.querySelector("meta[name='keywords']")) {
        const keys = document.createElement("meta");
        keys.name = "keywords";
        keys.content = "stolen bikes, bike recovery, cycling club, CycleHub South Africa";
        document.head.appendChild(keys);
    }
}
// Animate bike cards on page load
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".bike-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150); // stagger effect
    });
});

// Animate images inside modal on hover
document.querySelectorAll(".modal img").forEach(img => {
    img.style.transition = "transform 0.3s ease";

    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.15)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// ==========================================
// GLOBAL TOAST POPUP SYSTEM
// ==========================================
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("fade"), 2500);
    setTimeout(() => toast.remove(), 3300);
}

// ==========================================
// LIGHTBOX IMAGE VIEWER
// ==========================================
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("lightbox-img")) {
        openLightbox(e.target.src, e.target.alt);
    }
});

function openLightbox(src, alt) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    overlay.innerHTML = `
        <div class="lightbox-box">
            <img src="${src}" alt="${alt}">
            <p>${alt}</p>
            <button class="close-lightbox">Close</button>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close-lightbox").addEventListener("click", () => {
        overlay.remove();
    });
}

// ==========================================
// LIVE SEARCH (DYNAMIC FILTER)
// ==========================================
const searchInput = document.querySelector("#bikeSearch");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const word = searchInput.value.toLowerCase();
        const bikes = document.querySelectorAll(".bike-card");

        bikes.forEach((card) => {
            const content = card.textContent.toLowerCase();
            card.style.display = content.includes(word) ? "block" : "none";
        });
    });
}

// OPEN MODAL
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // prevent scrolling
    }
}

// CLOSE MODAL
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // enable scrolling again
    }
}


// ==========================================
// AUTO-ALT TEXT GENERATOR
// ==========================================
document.querySelectorAll("img").forEach((img, index) => {
    if (!img.alt || img.alt.trim() === "") {
        img.alt = `CycleHub Image ${index + 1}`;
    }
});

// ==========================================
// FORM VALIDATION (CONTACT PAGE SUPPORT)
// ==========================================
const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const msg = form.querySelector("#message").value.trim();

        if (!name || !email || !msg) {
            showToast("Please complete all fields.", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            showToast("Invalid email format.", "error");
            return;
        }

        showToast("Your message has been sent!", "success");

        // EmailJS Ready (Optional)
        // emailjs.send(serviceID, templateID, { name, email, msg });

        form.reset();
    });
}

// ==========================================
// DYNAMIC BIKE LOADER
// ==========================================
const stolenSection = document.querySelector(".stolen-bikes");

if (stolenSection) {
    const bikes = [
        {
            name: "Trek Aluminium",
            date: "12 August 2025",
            location: "Johannesburg",
            crime: "Stolen from vehicle",
            contact: "0712433127",
            img: "images/t2.jpeg",
        }
    ];

    stolenSection.innerHTML = "";

    bikes.forEach((b) => {
        stolenSection.innerHTML += `
        <div class="bike-card">
            <img src="${b.img}" class="lightbox-img" alt="${b.name}">
            <h2>${b.name}</h2>
            <p><b>Date Stolen:</b> ${b.date}</p>
            <p><b>Location:</b> ${b.location}</p>
            <p><b>Crime Type:</b> ${b.crime}</p>
            <p><b>Contact:</b> ${b.contact}</p>
        </div>
        `;
    });
}
