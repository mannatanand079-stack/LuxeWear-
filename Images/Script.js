let cart = [];

function shopNow(productName, price) {
    cart.push({ name: productName, price: price });

    alert(productName + " added to cart! 🛒");

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(product, index) {

        total = total + product.price;

        let item = document.createElement("div");

        item.innerHTML =
            "🛍️ " + product.name +
            " - ₹" + product.price +
            " <button onclick=\"removeFromCart(" + index + ")\">Remove</button>";

        cartItems.appendChild(item);
    });

    let totalElement = document.createElement("h3");
    totalElement.textContent = "Total: ₹" + total;

    cartItems.appendChild(totalElement);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent successfully. 📩");

    event.target.reset();
}
function submitHelp() {

    let name = document.getElementById("helpName").value;
    let email = document.getElementById("helpEmail").value;
    let message = document.getElementById("helpMessage").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you " + name + "! Your help request has been submitted. 💬");

    document.getElementById("helpName").value = "";
    document.getElementById("helpEmail").value = "";
    document.getElementById("helpMessage").value = "";
}
function showOffer(offerName) {

    alert("Great choice! 🎉 You selected: " + offerName);

}
function makePayment() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let address = document.getElementById("customerAddress").value;
    let payment = document.getElementById("paymentMethod").value;

    if (name === "" || email === "" || address === "" || payment === "") {
        alert("Please fill all the details.");
        return;
    }

    alert("Order placed successfully! 🎉\nThank you " + name + "!");
}
function goToPayment() {
    document.getElementById("payment").scrollIntoView({
        behavior: "smooth"
    });
}