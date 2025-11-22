/**
 * Buenas Prácticas JS: Uso de una IIFE para encapsular el código.
 */
(function() {
  'use strict';

  /**
   * 1. Smooth Scrolling para los enlaces del header/navegación.
   */
  function setupSmoothScrolling() {
      // Selecciona todos los enlaces que apuntan a una sección de la misma página (ej: #proyectos)
      const anchorLinks = document.querySelectorAll('a[href^="#"]');

      anchorLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              // Previene el comportamiento de salto inmediato por defecto
              e.preventDefault(); 
              
              const targetId = this.getAttribute('href');
              const targetSection = document.querySelector(targetId);

              if (targetSection) {
                  // Navegación nativa con desplazamiento suave (smooth scroll)
                  targetSection.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          });
      });
  }

  function setupLazyVideos() {
    const videos = document.querySelectorAll('.lazy-video');
    
    // Creamos un Intersection Observer para detectar cuando un video entra en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const jobCardVideo = video.closest('.job-card-video');

            if (entry.isIntersecting) {
                // Cuando el video entra, cargamos la fuente y lo reproducimos
                video.querySelectorAll('source').forEach(source => {
                      // El video original usa la clase 'lazy-video' y 'preload="none"'.
                      // En un entorno real de Vanilla JS, cargaríamos el 'src' aquí
                      // si hubiéramos usado 'data-src' en el HTML. 
                      // Como aquí ya tienen 'src', simplemente lo cargamos y reproducimos.
                });
                
                video.load();

                // Esperamos a que los datos estén cargados para asegurarnos de que se muestre
                video.onloadeddata = () => {
                    jobCardVideo && jobCardVideo.classList.add('video-loaded'); // Opcional: para ocultar el placeholder de carga si se hubiera implementado
                    video.play();
                };

                // Dejamos de observarlo una vez que está en marcha
                // observer.unobserve(video);
            } else {
                // Pausamos el video cuando sale del viewport para ahorrar recursos
                video.pause();
            }
        });
    }, {
        // Se activa cuando el 50% del elemento es visible
        threshold: 0.5 
    });

    videos.forEach(video => {
        observer.observe(video);
    });
  }

  // Inicialización al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
      setupSmoothScrolling();
      setupLazyVideos();
  });

})();