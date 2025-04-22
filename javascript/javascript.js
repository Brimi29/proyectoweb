document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM cargado'); // Para verificar si el DOM se cargó
  document.getElementById('menu-toggle').addEventListener('click', function () {
    console.log('Botón de menú clickeado'); // Ver si el botón de menú fue clickeado
    document.getElementById('navbar-links').classList.toggle('show');
  });
});
