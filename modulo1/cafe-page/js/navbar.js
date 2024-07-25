document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
});

function initializeNavigation() {
    const header = document.getElementById('header');
    const navHtml = `
        <div class="header__nav">
            <nav class="nav-menu">
                <a href="index.html" class="header__logo">Blog DeCafé</a>
                <button class="nav-menu__mobile-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                    <span class="hamburger-icon"></span>
                </button>
                <ul class="nav-menu__list" id="navMenuList">
                    <li class="nav-menu__item"><a href="../index.html" class="nav-menu__link">Nosotros</a></li>
                    <li class="nav-menu__item"><a href="../pages/courses.html" class="nav-menu__link">Cursos</a></li>
                    <li class="nav-menu__item"><a href="#" class="nav-menu__link">Contacto</a></li>
                </ul>
            </nav>
        </div>
        <div class="header__text">
            <h2>Blog de café con consejos y cursos</h2>
            <p>Aprende de los expertos con las mejores recetas y consejos</p>
        </div>
    `;
    
    header.innerHTML = navHtml;

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenuList = document.getElementById('navMenuList');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenuList.classList.toggle('show');
    });


    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !navMenuList.contains(event.target)) {
            mobileMenuBtn.classList.remove('open');
            navMenuList.classList.remove('show');
        }
    });
}

