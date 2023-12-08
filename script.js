let slideIndex = 0;
const slideshowContainer = document.getElementById('slideshow-container');

document.getElementById('slideshow-trigger').addEventListener('click', function() {
  if (slideshowContainer.style.display === 'none') {
    slideshowContainer.style.display = 'block';
    showSlides();
  } else {
    slideshowContainer.style.display = 'none';
  }
});

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); 
}

// Adăugăm un eveniment de click pentru textul "Monitorizare resurse"
document.getElementById('slideshow-trigger').addEventListener('click', function() {
  slideshowContainer.style.display = 'block';
  showSlides();
});

// Pornirea slideshow-ului la încărcarea paginii
document.addEventListener('DOMContentLoaded', function() {
  // Nu porni slideshow-ul automat la început
});
