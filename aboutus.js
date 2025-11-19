/* ABOUT US page JS - only for aboutus.html */

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.8s ease-in-out";
  setTimeout(() => { document.body.style.opacity = 1; }, 150);

  // 1) Accordion: add Read More to About section
  const aboutSection = document.querySelector("main section:nth-of-type(2)");
  if (aboutSection) {
    const extraText = document.createElement("div");
    extraText.innerHTML = `
      <p><strong>Our Mission:</strong> To build a safe, exciting community where riders explore, learn, and enjoy the freedom of cycling.</p>
      <p><strong>Our Vision:</strong> To inspire people of all ages to get outdoors and live healthier lives.</p>
    `;
    extraText.style.display = "none";
    extraText.style.marginTop = "10px";

    const button = document.createElement("button");
    button.textContent = "Read More";
    button.className = "about-readmore";

    aboutSection.appendChild(button);
    aboutSection.appendChild(extraText);

    button.addEventListener("click", () => {
      const showing = extraText.style.display === "block";
      extraText.style.display = showing ? "none" : "block";
      button.textContent = showing ? "Read More" : "Hide";
    });
  }

  // 2) Lightbox for watermark image
  const watermarkImg = document.querySelector(".watermark img");
  if (watermarkImg) {
    watermarkImg.style.cursor = "pointer";
    watermarkImg.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML = `<img src="${watermarkImg.src}" alt="${watermarkImg.alt || 'CycleHub Image'}">`;
      lightbox.addEventListener("click", () => lightbox.remove());
      document.body.appendChild(lightbox);
    });
  }

  // 3) Modal for Featured Bikes list items
  const bikeList = document.querySelector("main section:nth-of-type(3) ul");
  if (bikeList) {
    bikeList.querySelectorAll("li").forEach(item => {
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.className = "modal-overlay";
        modal.innerHTML = `
          <div class="modal-box">
            <h3>Bike Details</h3>
            <p>${item.textContent}</p>
            <button id="closeModal">Close</button>
          </div>`;
        document.body.appendChild(modal);
        modal.querySelector("#closeModal").addEventListener("click", () => modal.remove());
      });
    });
  }

  // 4) Scroll-to-top button
  const topBtn = document.createElement("button");
  topBtn.textContent = "↑";
  topBtn.className = "scroll-btn";
  document.body.appendChild(topBtn);
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // 5) Highlight active nav item
  const current = window.location.pathname.split("/").pop() || "aboutus.html";
  document.querySelectorAll(".navbar a").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active-nav");
  });
});
