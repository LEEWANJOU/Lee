document.addEventListener('DOMContentLoaded', () => {
  // Intro Screen Logic
  const introScreen = document.getElementById('introScreen');
  const introClose = document.getElementById('introClose');
  const introImage = document.getElementById('introImage');

  if (introScreen && introClose && introImage) {
    // 排除的頁碼：01, 06, 12, 18
    const availablePages = [2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    // 隨機選一張
    const randomPage = availablePages[Math.floor(Math.random() * availablePhttps://mail.google.com/mail/u/0/#inbox/FMfcgzQgMMKfTkpCPdpWKtkzqJfJTkdKages.length)];
    const pageNum = String(randomPage).padStart(2, '0');
    
    introImage.src = `./assets/pages/Page-${pageNum}.jpg`;

    // 點擊關閉按鈕
    introClose.onclick = () => {
      introScreen.style.display = 'none';
    };

    // 點擊圖片也能關閉
    introImage.onclick = () => {
      introScreen.style.display = 'none';
    };
  }

  // Portfolio 放大縮小效果
  const pageWrappers = document.querySelectorAll('.page-wrapper');

  const updateScales = () => {
    const viewportCenter = window.innerHeight / 2;

    pageWrappers.forEach(wrapper => {
      const rect = wrapper.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - elementCenter);
      const maxDistance = window.innerHeight;
      
      const scale = Math.max(0.6, 1.3 - (distance / maxDistance) * 0.7);
      const opacity = Math.max(0.7, 1 - (distance / maxDistance) * 0.3);
      
      const img = wrapper.querySelector('.portfolio-page');
      if (img) {
        img.style.transform = `scale(${scale})`;
        img.style.opacity = opacity;
      }
    });
  };

  window.addEventListener('scroll', updateScales, { passive: true });
  updateScales();
});
