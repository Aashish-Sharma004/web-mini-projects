const button = document.getElementById('changeBtn');

button.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  // Generate a random color in hex format
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
