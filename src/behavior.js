window.addEventListener('scroll', function() {
    var element = document.getElementById('nav-bar');
  
    // Verifica si se ha hecho scroll hacia abajo
    if (window.scrollY > 0) { // Cambia '0' al umbral que desees
      // Aplica la clase de Tailwind CSS para el desenfoque
      element.classList.add('blur');
    } else {
      // Remueve la clase de desenfoque cuando se hace scroll hacia arriba
      element.classList.remove('blur');
    }
  });
  