const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const thumbs = document.querySelectorAll('.lightbox-thumb');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox on thumbnail click
thumbs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

// Show image in lightbox
function showLightbox() {
  const img = thumbs[currentIndex];
  lightbox.style.display = 'block';
  lightboxImg.src = img.src;
  caption.textContent = img.alt;
}

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Navigate slideshow
prevBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  showLightbox();
});

nextBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % thumbs.length;
  showLightbox();
});

// Optional: Automatic slideshow (change image every 5 seconds)
let autoSlide = true;
if (autoSlide) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbs.length;
    if (lightbox.style.display === 'block') showLightbox();
  }, 5000);
}
