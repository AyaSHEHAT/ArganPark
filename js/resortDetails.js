document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.Sliderimgs');
    const images = document.querySelectorAll('.Sliderimgs img');
    
    let currentIndex = 0;
    const totalImages = images.length;
  
    function slideImages() {
      currentIndex++;
  
      // If it reaches the end, reset to the first image
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
  
      // Move all images to the left based on currentIndex
      slider.style.transform = `translateX(-${currentIndex * 250}px)`;
  
      // Animate sliding every second
      setTimeout(slideImages, 1000);
    }
  
    // Start the sliding function
    slideImages();
  });
  