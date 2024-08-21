const Header = () => {
    let header = document.createElement('header');

    header.innerHTML = `
        <nav>
            <ul>
                <li>home</li>
                <li>store</li>
                <li id="about-item">about</li>
            </ul>
            <button type="button" onclick="TongleInsano()">Login</button>
        </nav>

        <form action="" id="eventForm">
            <input type="text">
            <input type="text">
        </form>
    `;

    header.className = "navigator";
    header.id = "event";

    document.body.appendChild(header);

    const eventoCambio = document.getElementById("eventForm");

    function TongleInsano() {
        eventoCambio.classList.toggle("eventForm");
    }

    TongleInsano();
};

export default Header;
