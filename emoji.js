let isMouseDown = false;
let generateInterval;

document.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  generateEmojis(e.pageX, e.pageY);
});

document.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    generateEmoji(e.pageX, e.pageY);
  }
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  clearInterval(generateInterval);
});

function generateEmojis(x, y) {
  generateEmoji(x, y); 
  generateInterval = setInterval(() => {
    if (isMouseDown) {
      generateEmoji(x, y);
    }
  }, 100);
}

function generateEmoji(x, y) {
  const emoji = document.createElement('div');
  const emojis = ['🍔', '🥨', '🤪', '❤️', '🍖'];

  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add('emoji');
  document.body.appendChild(emoji);

  const size = Math.floor(Math.random() * 100) + 20; 
  emoji.style.width = `${size}px`;
  emoji.style.height = `${size}px`;

  const startX = x - size / 2 + Math.random() * size * 2;
  const startY = y - size / 2 + Math.random() * size * 2;

  emoji.style.left = startX + 'px';
  emoji.style.top = startY + 'px';

  const endX = x - size / 2 + Math.random() * size * 2;
  const endY = y - size / 2 + Math.random() * size * 2;

  const rotation = Math.random() * 360;
  emoji.style.transition = 'transform 1s linear, opacity 1s linear';
  emoji.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
  emoji.style.opacity = '0';

  setTimeout(() => {
    emoji.style.transform += ` rotate(${rotation}deg)`;
    emoji.remove();
  }, 1000);
}
