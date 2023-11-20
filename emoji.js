function createEmoji(event) {
    const emoji = document.createElement('div');
    emoji.innerHTML = getRandomEmoji();
    
    emoji.style.position = 'absolute';
    emoji.style.top = event.clientY + 'px';
    emoji.style.left = event.clientX + 'px';
    emoji.style.pointerEvents = 'none';
    
    document.body.appendChild(emoji);
    
    const animationDuration = Math.random() * 2 + 1;
    emoji.style.animation = `fall ${animationDuration}s linear forwards`;
  
    emoji.addEventListener('animationend', () => {
      emoji.remove();
    });
  }
  
  function getRandomEmoji() {
    const emojis = ['🌭', '️️🍔', '️️🍖', '️️🌮', '️️🍣', '️️🥨', '️️🍿', '️️🌽', '️️🍓', '️️❤️'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  