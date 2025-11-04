document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.cabecera-link');
  const navbarMenus = document.getElementById('navbarMenus');
  const hamburger = document.querySelector('.hamburger');

  // Función para activar el enlace correspondiente según la URL
  const setActiveLink = () => {
    const currentUrl = window.location.pathname;
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === currentUrl);
    });
  };

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => {
    navbarMenus.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animación suave con transición
    if (navbarMenus.classList.contains('active')) {
      navbarMenus.style.maxHeight = navbarMenus.scrollHeight + 'px';
    } else {
      navbarMenus.style.maxHeight = '0';
    }
  };

  // Event listener para el botón hamburguesa
  hamburger.addEventListener('click', toggleMenu);

  // Ejecutar al cargar la página
  setActiveLink();

  // Opcional: actualizar enlace activo al cambiar la URL (Single Page Apps)
  window.addEventListener('popstate', setActiveLink);
});
