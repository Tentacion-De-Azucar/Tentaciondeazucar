document.addEventListener('DOMContentLoaded', function() {
  // Generar elementos del menú dinámicamente
  const menu = document.getElementById('menu');
  let lastClickedItem = null;
  for (let i = 1; i <= 30; i++) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="img/postre${i}.jpeg" alt="Postre ${i}">
      <p class="description">Descripción del Postre ${i}.</p>
    `;
    menuItem.querySelector('img').addEventListener('click', function() {
      const description = this.nextElementSibling;
      if (lastClickedItem && lastClickedItem !== description) {
        lastClickedItem.style.display = 'none';
      }
      description.style.display = description.style.display === 'block' ? 'none' : 'block';
      lastClickedItem = description.style.display === 'block' ? description : null;
    });
    menu.appendChild(menuItem);
  }
});
