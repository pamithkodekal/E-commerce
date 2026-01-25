let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    list.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${index})">✖</button>
        `;
        list.appendChild(li);
    });

    totalEl.textContent = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }
    alert(`Order placed successfully!\nTotal Amount: ₹${total}`);
    cart = [];
    total = 0;
    renderCart();
}

// FILTER
document.getElementById("filterSelect").addEventListener("change", e => {
    const value = e.target.value;
    document.querySelectorAll(".category").forEach(cat => {
        if (value === "all" || cat.classList.contains(value)) {
            cat.style.display = "grid";
            cat.style.opacity = "1";
        } else {
            cat.style.opacity = "0";
            setTimeout(() => cat.style.display = "none", 300);
        }
    });
});
