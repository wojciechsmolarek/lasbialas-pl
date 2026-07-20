// Lightbox gallery functionality
var images = [
  '/foto/lasbialas1.webp',
  '/foto/lasbialas2.webp',
  '/foto/lasbialas3.webp',
  '/foto/lasbialas4.webp',
  '/foto/lasbialas5.webp',
  '/foto/lasbialas6.webp',
  '/foto/lasbialas7.webp',
  '/foto/lasbialas8.webp',
  '/foto/lasbialas-jacuzzi1.webp',
  '/foto/sauna1.webp',
  '/foto/lasbialas1.webp',
  '/foto/sauna4.webp',
  '/foto/sauna5.webp',
  '/foto/lasbialas-jacuzzi2.webp',
  '/foto/sauna7.webp',
  '/foto/lasbialas-jacuzzi3.webp'
];

var currentImageIndex = 0;

function openImage(index) {
  currentImageIndex = index;
  var overlay = document.getElementById('lightbox-overlay');
  var overlayImage = document.getElementById('lightbox-image');

  if (overlay && overlayImage) {
    overlayImage.src = images[currentImageIndex];
    overlay.classList.add('active');
  }
}

function closeImage() {
  var overlay = document.getElementById('lightbox-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  var overlayImage = document.getElementById('lightbox-image');
  if (overlayImage) {
    overlayImage.src = images[currentImageIndex];
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var overlayImage = document.getElementById('lightbox-image');
  if (overlayImage) {
    overlayImage.src = images[currentImageIndex];
  }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  var overlay = document.getElementById('lightbox-overlay');
  if (overlay && overlay.classList.contains('active')) {
    if (e.key === 'Escape') closeImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  }
});

// Make functions globally available
window.openImage = openImage;
window.closeImage = closeImage;
window.prevImage = prevImage;
window.nextImage = nextImage;
