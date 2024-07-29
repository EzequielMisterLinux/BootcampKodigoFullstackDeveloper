export const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <nav class="navigator-container">
      <p class="name-page">Omelette Recipe</p>
      <div id="hamburger-icon" class="material-icons">
        menu
      </div>
      <ul id="list-container">
        <li class="list-element">Home</li>
        <li class="list-element">Order</li>
        <li class="list-element">Eat</li>
      </ul>
    </nav>
    <div id="modal-menu">
      <div id="close-icon" class="material-icons">
        close
      </div>
      <ul id="modal-list-container">
        <li class="list-element">Home</li>
        <li class="list-element">Order</li>
        <li class="list-element">Eat</li>
      </ul>
    </div>
  `;
  document.body.prepend(header);

  const hamburger = document.getElementById('hamburger-icon');
  const modalMenu = document.getElementById('modal-menu');
  const closeIcon = document.getElementById('close-icon');

  const toggleMenu = () => {
    modalMenu.classList.toggle('show');
  };

  hamburger.addEventListener('click', toggleMenu);
  closeIcon.addEventListener('click', toggleMenu);

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target) && modalMenu.classList.contains('show')) {
      modalMenu.classList.remove('show');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      modalMenu.classList.remove('show');
    }
  });
};

document.addEventListener('DOMContentLoaded', Header);
