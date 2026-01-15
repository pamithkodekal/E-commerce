// FILTER FUNCTIONALITY
const filter = document.getElementById("filter");
const cards = document.querySelectorAll(".card");

filter.addEventListener("change", () => {
    const value = filter.value;

    cards.forEach(card => {
        if (value === "all" || card.classList.contains(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// ADD TO CART FUNCTIONALITY
let cart = [];
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const productName = card.dataset.name;

        cart.push(productName);
        cartCount.textContent = cart.length;

        alert(productName + " added to cart!");
    });
});
