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
      coreCount: "16,384 CUDA Cores",
      baseClock: "2.23 GHz",
      boostClock: "2.52 GHz",
      tdp: "450W",
      ports: ["3x DisplayPort 1.4a", "1x HDMI 2.1"],
      link: "products/product-1/product1.html",
      image: "../img/high-end-gpu.png",
      description:
        "The Nvidia RTX 4090 is a high-end GPU, delivering incredible performance for gaming, creative, and AI workloads.",
    },
    {
      name: "AMD Radeon RX 7900 XTX",
      price: 999,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "24GB",
      coreCount: "5,120 Stream Processors",
      baseClock: "2.3 GHz",
      boostClock: "2.5 GHz",
      tdp: "355W",
      ports: ["2x DisplayPort 2.1", "1x HDMI 2.1", "1x USB-C"],
      link: "products/product-2/product2.html",
      image: "../img/rx7900xtx.jpg",
      description:
        "AMD’s flagship card with cutting-edge architecture for 4K gaming and content creation.",
    },
    {
      name: "Nvidia RTX 4080 16GB",
      price: 1199,
      category: "high-end",
      manufacturer: "Nvidia",
      memoryType: "GDDR6X",
      vram: "16GB",
      coreCount: "9,728 CUDA Cores",
      baseClock: "2.21 GHz",
      boostClock: "2.51 GHz",
      tdp: "320W",
      ports: ["3x DisplayPort 1.4a", "1x HDMI 2.1"],
      link: "products/product-3/product3.html",
      image: "../img/rtx408016gb.jpg",
      description:
        "A powerhouse for enthusiasts who demand top-tier performance at 4K and beyond.",
    },
    {
      name: "AMD Radeon RX 6800 XT",
      price: 649,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "16GB",
      coreCount: "4,608 Stream Processors",
      baseClock: "2.2 GHz",
      boostClock: "2.4 GHz",
      tdp: "300W",
      ports: ["3x DisplayPort 1.4", "1x HDMI 2.1"],
      link: "products/product-4/product4.html",
      image: "../img/rx6800xt.jpg",
      description:
        "High performance for gamers, great for 1440p and 4K gaming with ray tracing support.",
    },
    {
      name: "Nvidia RTX 4070 Ti 12GB",
      price: 799,
      category: "high-end",
      manufacturer: "Nvidia",
      memoryType: "GDDR6X",
      vram: "12GB",
      coreCount: "7,680 CUDA Cores",
      baseClock: "2.31 GHz",
      boostClock: "2.61 GHz",
      tdp: "285W",
      ports: ["3x DisplayPort 1.4a", "1x HDMI 2.1"],
      link: "products/product-5/product5.html",
      image: "../img/rtx4070ti.jpg",
      description:
        "For gamers looking for excellent 1440p and 4K performance with DLSS 3.0 and ray tracing.",
    },
    {
      name: "AMD Radeon RX 7700 XT",
      price: 749,
      category: "high-end",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "12GB",
      coreCount: "3,840 Stream Processors",
      baseClock: "2.4 GHz",
      boostClock: "2.6 GHz",
      tdp: "250W",
      ports: ["2x DisplayPort 2.1", "1x HDMI 2.1", "1x USB-C"],
      link: "products/product-6/product6.html",
      image: "../img/rx7700xt.jpg",
      description:
        "An affordable high-end option for gamers who want great performance for 1440p and 4K gaming.",
    },

    // Mid-range products
    {
      name: "Nvidia RTX 4060 Ti 16GB",
      price: 499,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR6",
      vram: "16GB",
      coreCount: "4,358 CUDA Cores",
      baseClock: "2.6 GHz",
      boostClock: "2.75 GHz",
      tdp: "220W",
      ports: ["3x DisplayPort 1.4a", "1x HDMI 2.1"],
      link: "products/product-7/product7.html",
      image: "../img/mid-range-gpu.png",
      description:
        "An excellent mid-range option for 1080p and 1440p gaming, with support for ray tracing.",
    },
    {
      name: "AMD Radeon RX 6750 XT",
      price: 579,
      category: "mid-range",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "12GB",
      coreCount: "2,560 Stream Processors",
      baseClock: "2.1 GHz",
      boostClock: "2.5 GHz",
      tdp: "230W",
      ports: ["2x DisplayPort 2.1", "1x HDMI 2.1"],
      link: "products/product-8/product8.html",
      image: "../img/rx6750xt.jpg",
      description:
        "A solid option for gamers looking for good 1440p and 4K performance.",
    },
    {
      name: "Nvidia GTX 1070 8GB",
      price: 499,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "8GB",
      coreCount: "1,920 CUDA Cores",
      baseClock: "1.68 GHz",
      boostClock: "1.88 GHz",
      tdp: "150W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-9/product9.html",
      image: "../img/gtx1070.jpg",
      description:
        "Good for mid-level gaming with a balance of power and efficiency, supporting 1080p and 1440p gaming.",
    },
    {
      name: "Nvidia GTX 1060 6GB",
      price: 299,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "6GB",
      coreCount: "1,280 CUDA Cores",
      baseClock: "1.5 GHz",
      boostClock: "1.7 GHz",
      tdp: "120W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-10/product10.html",
      image: "../img/gtx1060.jpg",
      description:
        "A solid choice for gamers who want to play at 1080p with higher settings and occasional 1440p gaming.",
    },
    {
      name: "AMD Radeon RX 6600 XT 8GB",
      price: 379,
      category: "mid-range",
      manufacturer: "AMD",
      memoryType: "GDDR6",
      vram: "8GB",
      coreCount: "2,048 Stream Processors",
      baseClock: "2.0 GHz",
      boostClock: "2.6 GHz",
      tdp: "160W",
      ports: ["2x DisplayPort 2.1", "1x HDMI 2.1"],
      link: "products/product-11/product11.html",
      image: "../img/rx6600xt.jpg",
      description:
        "A great 1080p gaming GPU with solid performance and efficiency at a competitive price point.",
    },
    {
      name: "Nvidia GTX 1660 Ti 6GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Nvidia",
      memoryType: "GDDR6",
      vram: "6GB",
      coreCount: "1,536 CUDA Cores",
      baseClock: "1.5 GHz",
      boostClock: "1.7 GHz",
      tdp: "120W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-12/product12.html",
      image: "../img/gtx1660ti.jpg",
      description:
        "A strong performer in the mid-range category, offering excellent performance for 1080p and decent 1440p gaming.",
    },

    // Budget products
    {
      name: "Nvidia GTX 1650 4GB",
      price: 149,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "4GB",
      coreCount: "896 CUDA Cores",
      baseClock: "1.66 GHz",
      boostClock: "1.83 GHz",
      tdp: "75W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-13/product13.html",
      image: "../img/gtx1650.jpg",
      description:
        "Perfect for entry-level gaming at 1080p with low power consumption.",
    },
    {
      name: "AMD Radeon RX 570 4GB",
      price: 189,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "4GB",
      coreCount: "2,048 Stream Processors",
      baseClock: "1.1 GHz",
      boostClock: "1.25 GHz",
      tdp: "150W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-14/product14.html",
      image: "../img/rx5704gb.jpg",
      description:
        "A great option for 1080p gaming on a budget, with decent performance.",
    },
    {
      name: "Nvidia GTX 1050 Ti 4GB",
      price: 149,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "4GB",
      coreCount: "768 CUDA Cores",
      baseClock: "1.29 GHz",
      boostClock: "1.39 GHz",
      tdp: "75W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-15/product15.html",
      image: "../img/gtx1050ti.jpg",
      description: "A great budget GPU for casual gaming at 1080p resolution.",
    },
    {
      name: "AMD Radeon RX 580 8GB",
      price: 229,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "8GB",
      coreCount: "2,304 Stream Processors",
      baseClock: "1.3 GHz",
      boostClock: "1.4 GHz",
      tdp: "185W",
      ports: ["2x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-16/product16.html",
      image: "../img/low-end-gpu.png",
      description:
        "Ideal for 1080p gaming with high settings, perfect for gamers on a budget.",
    },
    {
      name: "Nvidia GTX 1050 2GB",
      price: 119,
      category: "budget",
      manufacturer: "Nvidia",
      memoryType: "GDDR5",
      vram: "2GB",
      coreCount: "640 CUDA Cores",
      baseClock: "1.35 GHz",
      boostClock: "1.46 GHz",
      tdp: "75W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-17/product17.html",
      image: "../img/gtx1050.jpg",
      description:
        "A low-cost option for 1080p gaming at lower settings with low power consumption.",
    },
    {
      name: "AMD Radeon RX 550 2GB",
      price: 99,
      category: "budget",
      manufacturer: "AMD",
      memoryType: "GDDR5",
      vram: "2GB",
      coreCount: "512 Stream Processors",
      baseClock: "1.18 GHz",
      boostClock: "1.18 GHz",
      tdp: "50W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-18/product18.html",
      image: "../img/rx5502gb.jpg",
      description:
        "A budget-friendly option for basic gaming at 720p or 1080p with lower settings.",
    },

    // Intel products
    {
      name: "Intel Arc A770 16GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "16GB",
      coreCount: "4,096 ALUs",
      baseClock: "2.1 GHz",
      boostClock: "2.45 GHz",
      tdp: "225W",
      ports: ["3x DisplayPort 2.0", "1x HDMI 2.1"],
      link: "products/product-19/product19.html",
      image: "../img/intela770.jpg",
      description:
        "Intel’s high-end offering with 16GB of VRAM, perfect for 1440p and 4K gaming.",
    },
    {
      name: "Intel Arc A750 8GB",
      price: 349,
      category: "mid-range",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "8GB",
      coreCount: "3,072 ALUs",
      baseClock: "2.05 GHz",
      boostClock: "2.35 GHz",
      tdp: "225W",
      ports: ["2x DisplayPort 2.0", "1x HDMI 2.1"],
      link: "products/product-19/product19.html",
      image: "../img/intela750.jpg",
      description:
        "A solid mid-range option from Intel for 1080p and 1440p gaming with ray tracing support.",
    },
    {
      name: "Intel Arc A380 6GB",
      price: 129,
      category: "budget",
      manufacturer: "Intel",
      memoryType: "GDDR6",
      vram: "6GB",
      coreCount: "1,024 ALUs",
      baseClock: "2.0 GHz",
      boostClock: "2.4 GHz",
      tdp: "75W",
      ports: ["1x DisplayPort 1.4", "1x HDMI 2.0"],
      link: "products/product-20/product20.html",
      image: "../img/intela580.jpg",
      description:
        "A great entry-level option for casual gaming and productivity tasks, featuring 6GB of VRAM.",
    },
  ];

  const productGrid = document.getElementById("products");

  // Query selectors for filters
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

  const minPriceInput = document.querySelector(
    '#filters .filter input[name="cenamin"]'
  );
  const maxPriceInput = document.querySelector(
    '#filters .filter input[name="cenamax"]'
  );

  // Get the query parameter for category
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category"); // Example: "high-end"

  // Function to render products
  function renderProducts(filteredProducts) {
    productGrid.innerHTML = ""; // Clear existing products

    if (filteredProducts.length === 0) {
      productGrid.innerHTML = "<p>No products found.</p>";
      return;
    }

    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <a href="${product.link}">
          <img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image" />
          <h2>${product.name}</h2>
          <p class="price">$${product.price}</p>
        <button class="add-to-cart-btn">Order</button>
        </a>
        
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

    const minPrice = parseFloat(minPriceInput.value) || 1; // Default to 1
    const maxPrice = parseFloat(maxPriceInput.value) || 1399; // Default to 1399

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

  // Pre-select category from URL parameter
  if (categoryParam) {
    const categoryInput = Array.from(categoryInputs).find(
      (input) => input.name === categoryParam
    );
    if (categoryInput) {
      categoryInput.checked = true;
    }
  }

  // Apply filters initially
  applyFilters();

  // Add event listeners for filters
  document.querySelectorAll("#filters .filter input").forEach((input) => {
    input.addEventListener("change", applyFilters);
  });
});
