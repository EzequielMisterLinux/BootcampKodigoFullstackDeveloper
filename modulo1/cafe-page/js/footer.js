document.addEventListener('DOMContentLoaded', function() {
    initializeFooter();
});


function initializeFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<p>&copy; 2024 Blog DeCafé. Todos los derechos reservados.</p>';
}