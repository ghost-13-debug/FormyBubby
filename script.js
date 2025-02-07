// Typewriter effect for the love note
const loveNote = document.querySelector('.love-note');
const text = loveNote.innerText;
loveNote.innerText = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    loveNote.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // Adjust speed here (lower = faster)
  }
}

// Trigger typewriter effect when the page loads
window.onload = () => {
  typeWriter();
};

// Smooth scroll to the message section when clicking on gallery images
const cards = document.querySelectorAll('.card');
const messageSection = document.querySelector('.message');

cards.forEach(card => {
  card.addEventListener('click', () => {
    messageSection.scrollIntoView({ behavior: 'smooth' });
  });
});