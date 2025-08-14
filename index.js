// Sample Shoe Data
const products = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    price: 120,
    description: "Lightweight running shoes with breathable mesh and responsive cushioning.",
    image: "Nike.jpg"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 150,
    description: "High-performance shoes with Boost cushioning and Primeknit upper.",
    image: "adidas.jpg"
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 100,
    description: "Retro-style sneakers with chunky sole and vibrant design.",
    image: "puma.jpg"
  }
];

const productList = document.getElementById("productList");

// Create Product Cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <label>Size:</label>
    <select id="size-${product.id}">
      <option value="">--Choose--</option>
      <option value="6">6 </option>
      <option value="7">7 </option>
      <option value="8">8 </option>
      <option value="9">9 </option>
      <option value="10">10 </option>
    </select>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// Add to Cart Function
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const size = document.getElementById(`size-${id}`).value;
  if (!size) {
    alert("Please select a size!");
    return;
  }
  localStorage.setItem("cartItem", JSON.stringify({ ...product, size }));
  window.location.href = "cart.html";
}
