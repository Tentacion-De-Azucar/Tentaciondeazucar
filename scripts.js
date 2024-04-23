document.addEventListener('DOMContentLoaded', function() {
    // Generar elementos del menú dinámicamente
    const menu = document.getElementById('menu');
    for (let i = 1; i <= 30; i++) {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.innerHTML = `
        <img src="img/postre${i}.jpeg" alt="Postre ${i}">
        <p class="description">Descripción del Postre ${i}.</p>
      `;
      menuItem.querySelector('img').addEventListener('click', function() {
        const description = this.nextElementSibling;
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
      });
      menu.appendChild(menuItem);
    }
  });
  
  // Agregar efectos de fondo con JavaScript o CSS aquí
  