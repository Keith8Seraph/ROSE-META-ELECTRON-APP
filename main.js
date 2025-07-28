// ROSE-META-ELECTRON-APP/main.js

window.onload = () => {
  const backBtn = document.getElementById('backBtn');
  const fetchBtn = document.getElementById('fetchGamesBtn');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.electronAPI.sendToMain('return-to-launcher');
    });
  } else {
    console.error('Back button not found');
  }

  if (fetchBtn) {
    fetchBtn.addEventListener('click', () => {
      alert('Fetch Games function coming soon!');
    });
  } else {
    console.error('Fetch Games button not found');
  }
};
