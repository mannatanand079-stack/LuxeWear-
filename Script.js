/* =================================
   LUXEWEAR SHOPPING CART
   ================================= */

let cart = [];


/* ===============================
   ADD PRODUCT TO CART
   =============================== */

function shopNow(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    alert(productName + " added to cart! 🛒");

    updateCart();
}


/* ===============================
   UPDATE CART
   =============================== */

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is currently empty.</p>";

        return;
    }

    let total = 0;

    cart.forEach(function(product, index) {

        total = total + product.price;

        let item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML =
            "<p>🛍️ " +
            product.name +
            " - ₹" +
            product.price +
            " " +
            "<button onclick=\"removeFromCart(" +
            index +
            ")\">Remove</button></p>";

        cartItems.appendChild(item);

    });


    let totalElement = document.createElement("h3");

    totalElement.textContent =
        "Total: ₹" + total;

    cartItems.appendChild(totalElement);
}


/* ===============================
   REMOVE FROM CART
   =============================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* ===============================
   SHOW SECTIONS
   =============================== */

function showSection(sectionId) {

    let sections = [
        "home",
        "collection",
        "men",
        "kids",
        "new-arrivals",
        "offers",
        "about",
        "contact",
        "cart",
        "payment"
    ];


    /* Hide all sections */

    sections.forEach(function(id) {

        let section =
            document.getElementById(id);

        if (section) {
            section.style.display = "none";
        }

    });


    /* Hide home preview */

    let homePreview =
        document.querySelector(".home-preview");

    if (homePreview) {
        homePreview.style.display = "none";
    }


    /* Hide offers preview */

    let offersPreview =
        document.querySelector(".offers-preview");

    if (offersPreview) {
        offersPreview.style.display = "none";
    }


    /* Hide help */

    let helpSection =
        document.querySelector(".help-section");

    if (helpSection) {
        helpSection.style.display = "none";
    }


    /* Show selected section */

    let selected =
        document.getElementById(sectionId);

    if (!selected) {
        return;
    }

    selected.style.display = "block";
  let collectionMenu = document.querySelector(".collection-menu");

if (collectionMenu) {
    collectionMenu.style.display = "none";
}

if (
    sectionId === "collection" ||
    sectionId === "men" ||
    sectionId === "kids" ||
    sectionId === "new-arrivals"
) {
    if (collectionMenu) {
        collectionMenu.style.display = "grid";
    }
}


    /* HOME */

    if (sectionId === "home") {

        if (homePreview) {
            homePreview.style.display = "block";
        }

        if (offersPreview) {
            offersPreview.style.display = "block";
        }
    }


    /* CONTACT */

    if (sectionId === "contact") {

        if (helpSection) {
            helpSection.style.display = "flex";
        }
    }


    /* Update cart whenever cart opens */

    if (sectionId === "cart") {
        updateCart();
    }


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ===============================
   SPECIAL OFFERS
   =============================== */

function showOffer(offerName) {

    alert(
        "Great choice! 🎉\n\n" +
        "You selected: " +
        offerName
    );
}


/* ===============================
   HELP FORM
   =============================== */

function submitHelp() {

    let name =
        document.getElementById("helpName").value;

    let email =
        document.getElementById("helpEmail").value;

    let message =
        document.getElementById("helpMessage").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your help request has been submitted. 💬"
    );


    document.getElementById("helpName").value = "";

    document.getElementById("helpEmail").value = "";

    document.getElementById("helpMessage").value = "";
}


/* ===============================
   PAYMENT
   =============================== */
function goToPayment() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let productNames = cart.map(function(product) {
        return product.name;
    }).join(", ");

    let totalAmount = cart.reduce(function(total, product) {
        return total + product.price;
    }, 0);

    document.getElementById("productName").value = productNames;
    document.getElementById("totalAmount").value = totalAmount;

    /* Hide all main sections */

    let sections = [
        "home",
        "collection",
        "men",
        "kids",
        "new-arrivals",
        "offers",
        "about",
        "contact",
        "cart"
    ];

    sections.forEach(function(id) {

        let section = document.getElementById(id);

        if (section) {
            section.style.display = "none";
        }

    });

    /* Hide extra sections */

    let homePreview =
        document.querySelector(".home-preview");

    let offersPreview =
        document.querySelector(".offers-preview");

    let helpSection =
        document.querySelector(".help-section");

    if (homePreview) {
        homePreview.style.display = "none";
    }

    if (offersPreview) {
        offersPreview.style.display = "none";
    }

    if (helpSection) {
        helpSection.style.display = "none";
    }

    /* Show Payment */

    let payment = document.getElementById("payment");

if (payment) {
    payment.classList.add("payment-show");
}

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ===============================
   START WEBSITE
   =============================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showSection("home");

    }
);