const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

dots.forEach((dot)=>{
dot.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");
dots[index].classList.add("active");

}

setInterval(showSlide,3000);
















const track = document.getElementById('track');
const cards = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
    // 1. Get dimensions
    const cardWidth = cards[0].offsetWidth;
    const cardMargin = 30 * 2; // margin left + right
    const totalStep = cardWidth + cardMargin;
    
    // 2. Calculate the Center of the Screen
    const screenCenter = window.innerWidth / 2;
    const cardCenter = cardWidth / 2;
    
    // 3. Move the track so the active card is at screen center
    // Math: Center - (index * width) - half of the card's own width
    const offset = screenCenter - (currentIndex * totalStep) - cardCenter - 30; // 30 is the margin offset
    
    track.style.transform = `translateX(${offset}px)`;

    // 4. Update Active Class
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === currentIndex);
    });

    // 5. Increment Index
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
}

// Automatic Movement every 3 seconds
let slideTimer = setInterval(updateCarousel, 3000);

// Run immediately on load
updateCarousel();

// Ensure it stays centered if you resize the window
window.addEventListener('resize', () => {
    currentIndex--; // Stay on current slide during resize
    updateCarousel();
});















 track = document.getElementById('track');
 cards = Array.from(track.children);
 currentIndex = 0;

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const cardMargin = 40 * 2; // match margin from CSS
    const totalStep = cardWidth + cardMargin;
    
    // Centering calculation
    const screenCenter = window.innerWidth / 2;
    const cardCenter = cardWidth / 2;
    const offset = screenCenter - (currentIndex * totalStep) - cardCenter - 40;
    
    track.style.transform = `translateX(${offset}px)`;

    // Toggle active class
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === currentIndex);
    });

    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
}

// Auto-slide every 4 seconds
setInterval(updateCarousel, 4000);

// Initial position
updateCarousel();

// Responsive handling
window.addEventListener('resize', () => {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateCarousel();
});











function openImage(img){
document.getElementById("viewer").style.display="flex";
document.getElementById("bigImage").src = img.src;
}

function closeImage(){
document.getElementById("viewer").style.display="none";
}












