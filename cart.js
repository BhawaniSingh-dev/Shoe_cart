const cartData = JSON.parse(localStorage.getItem("cartItem"));
const cartContainer = document.getElementById("cartContainer");

if (cartData) {
  cartContainer.innerHTML = `
    <div class="cart-item">
      <img src="${cartData.image}" alt="${cartData.name}">
      <div>
        <h2>${cartData.name}</h2>
        <p>${cartData.description}</p>
        <p><strong>Size:</strong> ${cartData.size}</p>
        <p><strong>Price:</strong> $${cartData.price}</p>
      </div>
    </div>
  `;
} else {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
}
