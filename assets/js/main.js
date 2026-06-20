document.addEventListener('DOMContentLoaded', function() {
  var hero = document.getElementById('hero');
  var main = document.getElementById('main');
  var heroImage = document.getElementById('heroImage');
  var portfolioBtn = document.getElementById('portfolioBtn');
  var logoBtn = document.getElementById('logoBtn');
  
  var availablePages = [2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  // Display random image with fade effect
  function showRandomImage() {
    var randomPage = availablePages[Math.floor(Math.random() * availablePages.length)];
    var pageNum = randomPage < 10 ? '0' + randomPage : '' + randomPage;
    heroImage.style.opacity = '0';
    
    setTimeout(function() {
      heroImage.src = './assets/pages/Page-' + pageNum + '.jpg';
      heroImage.style.opacity = '1';
    }, 300);
  }
  
  // Initialize first image
  showRandomImage();
  
  // Change image every 3 seconds
  var imageInterval = setInterval(function() {
    if (!hero.classList.contains('hidden')) {
      showRandomImage();
    }
  }, 3000);
  
  // Auto switch to Portfolio after 5 seconds
  var autoSwitchTimer = setTimeout(function() {
    hero.classList.add('hidden');
    main.style.display = 'block';
    document.body.classList.remove('hero-active');
    clearInterval(imageInterval);
  }, 5000);
  
  // Portfolio button - Enter portfolio section
  portfolioBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hero.classList.add('hidden');
    main.style.display = 'block';
    document.body.classList.remove('hero-active');
    clearInterval(imageInterval);
    clearTimeout(autoSwitchTimer);
  });
  
  // Logo button - Return to hero section
  logoBtn.addEventListener('click', function() {
    hero.classList.remove('hidden');
    main.style.display = 'none';
    document.body.classList.add('hero-active');
    window.scrollTo(0, 0);
    
    // Restart 3 second image rotation
    showRandomImage();
    clearInterval(imageInterval);
    imageInterval = setInterval(function() {
      if (!hero.classList.contains('hidden')) {
        showRandomImage();
      }
    }, 3000);
    
    // Restart 5 second auto switch timer
    clearTimeout(autoSwitchTimer);
    autoSwitchTimer = setTimeout(function() {
      hero.classList.add('hidden');
      main.style.display = 'block';
      document.body.classList.remove('hero-active');
      clearInterval(imageInterval);
    }, 5000);
  });

  // Portfolio scroll scaling effect
  var pageWrappers = document.querySelectorAll('.page-wrapper');

  function updateScales() {
    var viewportCenter = window.innerHeight / 2;
    pageWrappers.forEach(function(wrapper) {
      var rect = wrapper.getBoundingClientRect();
      var elementCenter = rect.top + rect.height / 2;
      var distance = Math.abs(viewportCenter - elementCenter);
      var maxDistance = window.innerHeight;
      
      var scale = Math.max(0.75, 1.05 - (distance / maxDistance) * 0.3);
      var opacity = Math.max(0.75, 1 - (distance / maxDistance) * 0.25);
      
      var img = wrapper.querySelector('.portfolio-page');
      if (img) {
        img.style.transform = 'scale(' + scale + ')';
        img.style.opacity = opacity;
      }
    });
  }

  window.addEventListener('scroll', updateScales);
  updateScales();

  // Set hero active state
  document.body.classList.add('hero-active');
});
