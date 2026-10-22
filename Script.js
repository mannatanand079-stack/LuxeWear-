            
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
document.body.classList.remove("category-page");
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

    // Hide all sections
    sections.forEach(function(id) {
        let section = document.getElementById(id);

        if (section) {
            section.style.display = "none";
        }
    });

    // Hide extra areas
    let homePreview = document.querySelector(".home-preview");
    let offersPreview = document.querySelector(".offers-preview");
    let helpSection = document.querySelector(".help-section");
    let collectionMenu = document.querySelector(".collection-menu");
  let whyLuxe = document.querySelector(".why-luxe");

    if (homePreview) homePreview.style.display = "none";
    if (offersPreview) offersPreview.style.display = "none";
    if (helpSection) helpSection.style.display = "none";
    if (collectionMenu) collectionMenu.style.display = "none";
  if (whyLuxe) whyLuxe.style.display = "none";

    // Show selected section
    let selected = document.getElementById(sectionId);

    if (!selected) return;

    selected.style.display = "block";

    // Home page
  
    if (sectionId === "home") {

    if (homePreview) {
        homePreview.style.display = "block";
    }

    if (offersPreview) {
        offersPreview.style.display = "block";
    }

    if (whyLuxe) {
        whyLuxe.style.display = "block";
    }
    }

    // Women, Men, Kids, New Arrival buttons
    document.body.classList.remove("category-page");
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

    // Contact help section
    if (sectionId === "contact") {

        if (helpSection) {
            helpSection.style.display = "grid";
        }
    }

    // Cart
    if (sectionId === "cart") {
        updateCart();
    }

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

/* ===== LUXEWEAR DAY / NIGHT MODE ===== */

(function () {
    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        themeToggle.textContent =
            theme === "dark" ? "☀️ Day Mode" : "🌙 Dark Mode";
    }

    // Load saved theme, or use Day Mode by default
    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("luxewear-theme") || "light";
    } catch (error) {
        savedTheme = "light";
    }

    applyTheme(savedTheme === "dark" ? "dark" : "light");

    // Switch theme when button is clicked
    themeToggle.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);

        try {
            localStorage.setItem("luxewear-theme", newTheme);
        } catch (error) {
            // Theme still works even if saving is unavailable
        }
    });
})();
/* =========================================
   LUXEWEAR - LOAD PRODUCTS FROM DATABASE
   ========================================= */

async function loadDatabaseProducts() {
    const sections = {
        "women": "womenProducts",
        "men": "menProducts",
        "kids": "kidsProducts",
        "new arrival": "newArrivalProducts"
    };

    try {
        const response = await fetch(
            "https://luxewear.free.je/get_products.php"
        );

        if (!response.ok) {
            throw new Error("Server error: " + response.status);
        }

        const data = await response.json();

        if (!data.success || !Array.isArray(data.products)) {
            throw new Error("Invalid product data");
        }

        data.products.forEach(function (product) {
            const category = String(product.category || "")
                .trim()
                .toLowerCase();

            const sectionId = sections[category];
            const container = document.getElementById(sectionId);
if (!container) {
                console.warn("Section not found:", sectionId);
                return;
            }

            // Prevent duplicate database products on repeated loads
            if (container.querySelector(
                '[data-database-product-id="' +
                product.product_id + '"]'
            )) {
                return;
            }

            const card = document.createElement("div");
            card.className = "product-card";
            card.dataset.databaseProductId = product.product_id;

            const imageBox = document.createElement("div");
            imageBox.className = "product-image";

            const img = document.createElement("img");
            img.src = product.image || "";
            img.alt = product.product_name || "Product";
            img.loading = "lazy";

            img.onerror = function () {
                this.alt = "Product image unavailable";
            };

            const title = document.createElement("h3");
            title.textContent = product.product_name || "Product";

            const price = document.createElement("p");
            price.textContent = "₹" +
                Number(product.price || 0).toLocaleString("en-IN");

            const button = document.createElement("button");
            button.textContent = "Shop Now";

            button.addEventListener("click", function () {
                if (typeof shopNow === "function") {
                    shopNow(
                        product.product_name,
                        Number(product.price)
                    );
                } else {
                    alert("Cart function is unavailable.");
                }
            });

            imageBox.appendChild(img);
            card.appendChild(imageBox);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(button);

            container.appendChild(card);
        });

        console.log("Database products loaded successfully.");

    } catch (error) {
        console.error("Could not load database products:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadDatabaseProducts);
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


