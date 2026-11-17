let cart = [];
const cartList = document.querySelector("#cart-items");

const cartButton = document.querySelectorAll(".gloss-collection button");

cartButton.forEach((function(button) {
    button.addEventListener("click", function() {
        const product = button.getAttribute("data-product");
        cart.push(product);
        const cartItem = document.createElement("li");
        cartItem.textContent = product;
        cartList.appendChild(cartItem);
        console.log(cart);
        alert(product + " has been added to your cart!");
    });
}));
