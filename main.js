// ROSE-META-ELECTRON-APP/main.js

window.onload = () => {
  const backBtn = document.getElementById('backBtn');
  const fetchBtn = document.getElementById('fetchGamesBtn');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.electronAPI.sendToMain('return-to-launcher');
    });
  }

  if (fetchBtn) {
    fetchBtn.addEventListener('click', async () => {
      const result = await window.electronAPI.seedDefaultGames();
      if (result.success) {
        alert("Games seeded successfully!");
      } else {
        alert("Failed to seed games: " + result.error);
      }
    });
  }
};

