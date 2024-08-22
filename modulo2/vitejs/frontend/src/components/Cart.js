import Swal from 'sweetalert2';
export const cart = JSON.parse(localStorage.getItem('cart')) || [];


export const addToCart = (course) => {
  if (cart.some(item => item.id === course.id)) {
    Swal.fire({
      icon: 'info',
      title: 'Producto ya en el carrito',
      text: 'Este curso ya está en tu carrito',
      timer: 2000,
      showConfirmButton: false
    });
    return;
  }

  cart.push(course);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();

  Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    text: 'El curso se ha agregado al carrito',
    timer: 2000,
    showConfirmButton: false
  });
};

export const removeFromCart = (id) => {
  const updatedCart = cart.filter(course => course.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  renderCart();

  Swal.fire({
    icon: 'success',
    title: 'Producto eliminado',
    text: 'El curso se ha eliminado del carrito',
    timer: 2000,
    showConfirmButton: false
  });
};

export const renderCart = () => {
  const cartTable = document.querySelector("#lista-carrito tbody");
  cartTable.innerHTML = cart.map(course => `
    <tr>
      <td><img src="${course.img}" width="50" class="img-fluid rounded" /></td>
      <td>${course.title}</td>
      <td>$${course.price.toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm remove" data-id="${course.id}"><i class="bi bi-trash"></i></button></td>
    </tr>
  `).join('');

  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
      removeFromCart(parseInt(button.dataset.id));
    });
  });

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);
  document.querySelector('#cart-total').textContent = `Total: $${totalPrice.toFixed(2)}`;
};
