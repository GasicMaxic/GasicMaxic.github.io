document.addEventListener("DOMContentLoaded", function () {
  const products = [
    // High-end products
    {
      name: "Nvidia RTX 4090 24GB",
      price: 1599,
      category: "high-end",
      manufacturer: "Nvidia",
      memoryType: "GDDR6X",
      vram: "24GB",
      link: "products/product-1/product1.html",
      image: "../img/high-end-gpu.png",
    },
    {
      name: "AMD Radeon RX 7900 XTX",
      price: 999,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "24GB",
      link: "products/product-2/product2.html",
      image: "../img/rx7900xtx.jpg",
    },
    {
      name: "Nvidia RTX 4080 16GB",
      price: 1199,
      category: "high-end",
      manufacturer: "Nvidia",
      memoryType: "GDDR6X",
      vram: "16GB",
      link: "products/product-3/product3.html",
      image: "../img/rtx408016gb.jpg",
    },
    {
      name: "AMD Radeon RX 6800 XT",
      price: 649,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "16GB",
      link: "products/product-4/product4.html",
      image: "../img/rx6800xt.jpg",
    },
    {
      name: "Nvidia RTX 4070 Ti 12GB",
      price: 799,
      category: "high-end",
      manufacturer: "Nvidia",
      memoryType: "GDDR6X",
      vram: "12GB",
      link: "products/product-5/product5.html",
      image: "../img/rtx4070ti.jpg",
    },
    {
      name: "AMD Radeon RX 7700 XT",
      price: 749,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "12GB",
      link: "products/product-6/product6.html",
      image: "../img/rx7700xt.jpg",
    },

    // Mid-range products
    {
      name: "Nvidia RTX 4060 Ti 16GB",
      price: 499,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR6",
      vram: "16GB",
      link: "products/product-7/product7.html",
      image: "../img/mid-range-gpu.png",
    },
    {
      name: "AMD Radeon RX 6750 XT",
      price: 579,
      category: "mid-range",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "12GB",
      link: "products/product-8/product8.html",
      image: "../img/rx6750xt.jpg",
    },
    {
      name: "Nvidia GTX 1070 8GB",
      price: 499,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "8GB",
      link: "products/product-9/product9.html",
      image: "../img/gtx1070.jpg",
    },
    {
      name: "Nvidia GTX 1060 6GB",
      price: 299,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "6GB",
      link: "products/product-10/product10.html",
      image: "../img/gtx1060.jpg",
    },
    {
      name: "AMD Radeon RX 6600 XT 8GB",
      price: 379,
      category: "mid-range",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "8GB",
      link: "products/product-11/product11.html",
      image: "../img/rx6600xt.jpg",
    },
    {
      name: "Nvidia GTX 1660 Ti 6GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR6",
      vram: "6GB",
      link: "products/product-12/product12.html",
      image: "../img/gtx1660ti.jpg",
    },

    // Budget products
    {
      name: "Nvidia GTX 1650 4GB",
      price: 149,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "4GB",
      link: "products/product-13/product13.html",
      image: "../img/gtx1650.jpg",
    },
    {
      name: "AMD Radeon RX 570 4GB",
      price: 189,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "4GB",
      link: "products/product-14/product14.html",
      image: "../img/rx5704gb.jpg",
    },
    {
      name: "Nvidia GTX 1050 Ti 4GB",
      price: 149,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "4GB",
      link: "products/product-15/product15.html",
      image: "../img/gtx1050ti.jpg",
    },
    {
      name: "AMD Radeon RX 580 8GB",
      price: 229,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "8GB",
      link: "products/product-16/product16.html",
      image: "../img/low-end-gpu.png",
    },
    {
      name: "Nvidia GTX 1050 2GB",
      price: 119,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "2GB",
      link: "products/product-17/product17.html",
      image: "../img/gtx1050.jpg",
    },
    {
      name: "AMD Radeon RX 550 2GB",
      price: 99,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "2GB",
      link: "products/product-18/product18.html",
      image: "../img/rx5502gb.jpg",
    },

    // Intel products
    {
      name: "Intel Arc A770 16GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "16GB",
      link: "products/product-19/product19.html",
      image: "../img/intela770.jpg",
    },
    {
      name: "Intel Arc A750 8GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "8GB",
      link: "products/product-19/product19.html",
      image: "../img/intela750.jpg",
    },
    {
      name: "Intel Arc A380 6GB",
      price: 129,
      category: "budget",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "6GB",
      link: "products/product-20/product20.html",
      image: "../img/intela580.jpg",
    },
  ];

  const categoryInputs = document.querySelectorAll(
    '#filters .filter input[name="high-end"], #filters .filter input[name="mid-range"], #filters .filter input[name="budget"]'
  );
  const manufacturerInputs = document.querySelectorAll(
    '#filters .filter input[name="AMD"], #filters .filter input[name="Intel"], #filters .filter input[name="Nvidia"]'
  );
  const memoryTypeInputs = document.querySelectorAll(
    '#filters .filter input[name="GDDR3"], #filters .filter input[name="GDDR5"], #filters .filter input[name="GDDR6"], #filters .filter input[name="GDDR6X"]'
  );
  const vramInputs = document.querySelectorAll(
    '#filters .filter input[name$="GB"]'
  );

  // Select price input fields for minimum and maximum prices
  const minPriceInput = document.querySelector(
    '#filters .filter input[name="cenamin"]'
  );
  const maxPriceInput = document.querySelector(
    '#filters .filter input[name="cenamax"]'
  );

  const productGrid = document.getElementById("products");

  // Function to render products
  function renderProducts(filteredProducts) {
    productGrid.innerHTML = ""; // Clear existing products

    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <h2>${product.name}</h2>
        </a>
        <p class="price">$${product.price}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;

      productGrid.appendChild(productDiv);
    });
  }

  // Function to apply filters
  function applyFilters() {
    const selectedCategories = Array.from(categoryInputs)
      .filter((input) => input.checked)
      .map((input) => input.name);
    const selectedManufacturers = Array.from(manufacturerInputs)
      .filter((input) => input.checked)
      .map((input) => input.name);
    const selectedMemoryTypes = Array.from(memoryTypeInputs)
      .filter((input) => input.checked)
      .map((input) => input.name);
    const selectedVrams = Array.from(vramInputs)
      .filter((input) => input.checked)
      .map((input) => input.name);

    // Parse price inputs or set defaults
    const minPrice = parseFloat(minPriceInput.value) || 1; // Default to 1
    const maxPrice = parseFloat(maxPriceInput.value) || 1400; // Default to 1399

    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesManufacturer =
        selectedManufacturers.length === 0 ||
        selectedManufacturers.includes(product.manufacturer);
      const matchesMemoryType =
        selectedMemoryTypes.length === 0 ||
        selectedMemoryTypes.includes(product.memoryType);
      const matchesVram =
        selectedVrams.length === 0 || selectedVrams.includes(product.vram);
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return (
        matchesCategory &&
        matchesManufacturer &&
        matchesMemoryType &&
        matchesVram &&
        matchesPrice
      );
    });

    renderProducts(filteredProducts);
  }

  // Apply filters initially with default price range
  applyFilters();

  // Add event listeners for filters and price inputs
  document.querySelectorAll("#filters .filter input").forEach((input) => {
    input.addEventListener("change", applyFilters);
  });
});
