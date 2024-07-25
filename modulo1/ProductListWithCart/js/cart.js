let cart = [];
let cartTotal = 0;

const addToCart = (name, price, image, description) => {
    const item = { name, price, image, description, quantity: 1 };
    cart.push(item);
    cartTotal += price;
    updateCartUI();
    showNotification(`${name} added to cart!`);
};

const updateCartUI = () => {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    cartCount.innerText = cart.length;

    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;" />
            <div>
                <p class="mb-0 fw-bold">${item.name}</p>
                <p class="mb-0">${item.description}</p>
            </div>
            <span class="badge bg-primary rounded-pill">$${item.price}</span>
        `;
        cartItems.appendChild(li);
    });
};

const showNotification = (message) => {
    const notificationBody = document.getElementById('notificationBody');
    notificationBody.innerText = message;
    const toast = new bootstrap.Toast(document.getElementById('notificationToast'));
    toast.show();
};

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
        const description = button.getAttribute('data-description');
        addToCart(name, price, image, description);
    });
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    cart = [];
    cartTotal = 0;
    updateCartUI();
    showNotification('New order started');
});
