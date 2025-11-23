(function() {
  'use strict';

  // Scrolling suave para los enlaces internos
  function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Reproducción de videos solo cuando están en el viewport
  function setupLazyVideos() {
    const videos = document.querySelectorAll('.lazy-video');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        const jobCardVideo = video.closest('.job-card-video');
        if(entry.isIntersecting) {
          //video.querySelectorAll('source').forEach(source => { });  
          video.load();
          video.onloadeddata = () => {
            //jobCardVideo && jobCardVideo.classList.add('video-loaded'); // ocultar el placeholder de carga
            video.play();
          };
          //observer.unobserve(video);
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.75 // Se activa cuando el 75% del elemento es visible
    });
    
    videos.forEach(video => {
      observer.observe(video);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScrolling();
    setupLazyVideos();
  });

})();