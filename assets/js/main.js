document.addEventListener('DOMContentLoaded', function() {
  var hero = document.getElementById('hero');
  var main = document.getElementById('main');
  var heroImage = document.getElementById('heroImage');
  var portfolioBtn = document.getElementById('portfolioBtn');
  
  // Hero Section - Random Image + 5 Second Auto Switch
  var availablePages = [2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  var randomPage = availablePages[Math.floor(Math.random() * availablePages.length)];
  var pageNum = randomPage < 10 ? '0' + randomPage : '' + randomPage;
  
  heroImage.src = './assets/pages/Page-' + pageNum + '.jpg';
  
  // Auto switch after 5 seconds
  setTimeout(function() {
    hero.classList.add('hidden');
    main.style.display = 'block';
    document.body.classList.remove('hero-active');
  }, 5000);
  
  // Click Portfolio button to switch
  portfolioBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hero.classList.add('hidden');
    main.style.display = 'block';
    document.body.classList.remove('hero-active');
  });

  // Portfolio Click to Fullscreen
  var portfolioPages = document.querySelectorAll('.portfolio-page');
  portfolioPages.forEach(function(page) {
    page.addEventListener('click', function() {
      if (page.classList.contains('fullscreen')) {
        page.classList.remove('fullscreen');
        document.body.style.overflow = 'auto';
      } else {
        // Remove fullscreen from other images
        portfolioPages.forEach(function(p) {
          p.classList.remove('fullscreen');
        });
        page.classList.add('fullscreen');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Scroll to close fullscreen
  document.addEventListener('wheel', function(e) {
    var fullscreenImg = document.querySelector('.portfolio-page.fullscreen');
    if (fullscreenImg) {
      fullscreenImg.classList.remove('fullscreen');
      document.body.style.overflow = 'auto';
    }
  });

  // Set hero active
  document.body.classList.add('hero-active');
});
