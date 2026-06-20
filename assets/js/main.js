document.addEventListener('DOMContentLoaded', function() {
  var introScreen = document.getElementById('introScreen');
  var introClose = document.getElementById('introClose');
  var introImage = document.getElementById('introImage');

  var availablePages = [2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  var randomPage = availablePages[Math.floor(Math.random() * availablePages.length)];
  var pageNum = randomPage < 10 ? '0' + randomPage : '' + randomPage;
  
  introImage.src = './assets/pages/Page-' + pageNum + '.jpg';

  introClose.addEventListener('click', function() {
    introScreen.style.display = 'none';
  });

  introImage.addEventListener('click', function() {
    introScreen.style.display = 'none';
  });

  var pageWrappers = document.querySelectorAll('.page-wrapper');

  function updateScales() {
    var viewportCenter = window.innerHeight / 2;
    pageWrappers.forEach(function(wrapper) {
      var rect = wrapper.getBoundingClientRect();
      var elementCenter = rect.top + rect.height / 2;
      var distance = Math.abs(viewportCenter - elementCenter);
      var maxDistance = window.innerHeight;
      
      var scale = Math.max(0.6, 1.3 - (distance / maxDistance) * 0.7);
      var opacity = Math.max(0.7, 1 - (distance / maxDistance) * 0.3);
      
      var img = wrapper.querySelector('.portfolio-page');
      if (img) {
        img.style.transform = 'scale(' + scale + ')';
        img.style.opacity = opacity;
      }
    });
  }

  window.addEventListener('scroll', updateScales);
  updateScales();
});
