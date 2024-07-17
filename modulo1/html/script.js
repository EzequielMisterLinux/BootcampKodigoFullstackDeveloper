document.addEventListener('DOMContentLoaded', function() {
    const burgerList = document.getElementById('burger-list');

    const burgers = [
        {
            name: 'Hamburguesa Clásica',
            description: 'Carne de res, lechuga, tomate, cebolla y queso.',
            image: './assets/burger.png',
            price: '$10.99',
        },
        {
            name: 'Hamburguesa BBQ',
            description: 'Carne de res, queso cheddar, cebolla caramelizada y salsa BBQ.',
            image: './assets/burger1.png',
            price: '$12.99',
        },
        
        {
            name: 'Hamburguesa Clásica',
            description: 'Carne de res, lechuga, tomate, cebolla y queso.',
            image: './assets/burger3.png',
            price: '$10.99',
        },
        {
            name: 'Hamburguesa BBQ',
            description: 'Carne de res, queso cheddar, cebolla caramelizada y salsa BBQ.',
            image: './assets/burger4.png',
            price: '$12.99',
        },
        {
            name: 'Hamburguesa Vegana',
            description: 'Hamburguesa de garbanzo, lechuga, tomate, cebolla y aguacate.',
            image: './assets/burger5.png',
            price: '$11.99',
        },
        {
            name: 'Hamburguesa Clásica',
            description: 'Carne de res, lechuga, tomate, cebolla y queso.',
            image: './assets/burger6.png',
            price: '$10.99',
        },
        {
            name: 'Hamburguesa Clásica',
            description: 'Carne de res, lechuga, tomate, cebolla y queso.',
            image: './assets/burger3.png',
            price: '$10.99',
        }
    ];

    burgers.forEach(burger => {
        const burgerItem = document.createElement('div');
        burgerItem.className = 'burger-item';
        burgerItem.style.backgroundImage = `url(${burger.image})`;

        burgerItem.innerHTML = `
            <h3>${burger.name}</h3>
            <p>${burger.description}</p>
            <button>${burger.price}</button>
        `;

        burgerList.appendChild(burgerItem);
    });
});
