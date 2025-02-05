const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('click', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // Add more "Yes" buttons
  const newYesButton = document.createElement('button');
  newYesButton.textContent = 'Yes';
  newYesButton.classList.add('yesButton');
  newYesButton.style.backgroundColor = '#e91e63';
  newYesButton.style.color = 'white';
  newYesButton.style.position = 'absolute';
  newYesButton.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
  newYesButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
  newYesButton.addEventListener('click', () => {
    alert('Yay! I love you too! ❤️');
  });
  document.body.appendChild(newYesButton);
});
