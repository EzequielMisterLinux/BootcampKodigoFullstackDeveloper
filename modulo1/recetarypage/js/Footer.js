export const Footer = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <div class="footer-container">
        <p class="footer-text">© 2024 Ezequiel Campos. Todos los derechos reservados.</p>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#order">Order</a></li>
          <li><a href="#eat">Eat</a></li>
        </ul>
      </div>
    `;
    document.body.appendChild(footer);
  };
  
  document.addEventListener('DOMContentLoaded', Footer);
  