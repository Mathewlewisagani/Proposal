const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

yesButton.addEventListener('click', () => {
  responseMessage.textContent = "Yay! You've made me the happiest person alive! 💖";
});

noButton.addEventListener('click', () => {
  // Move the button randomly when "No" is clicked
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});