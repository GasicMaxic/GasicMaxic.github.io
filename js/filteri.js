document.addEventListener("DOMContentLoaded", () => {
  const filterHeaders = document.querySelectorAll(".filter h2");

  filterHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const checkboxes = header.nextElementSibling;
      checkboxes.classList.toggle("show");
      header.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    "#filters input[type='checkbox']"
  );
  const mainDiv = document.getElementById("header");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateBackground(mainDiv);
    });
  });

  function updateBackground(element) {
    const colors = [];
    if (document.getElementById("AMD").checked) colors.push("#ed1c24"); // AMD red
    if (document.getElementById("Intel").checked) colors.push("#00c7fd"); // Intel blue
    if (document.getElementById("nvidia").checked) colors.push("#76b900"); // Nvidia green

    if (colors.length === 1) {
      element.style.background = colors[0];
    } else if (colors.length > 1) {
      element.style.background = `linear-gradient(to right, ${colors.join(
        ", "
      )})`;
    } else {
      element.style.background = "";
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const minValueDisplay = document.getElementById("price-min-value");
  const maxValueDisplay = document.getElementById("price-max-value");

  // Display initial values
  minValueDisplay.textContent = priceMin.value;
  maxValueDisplay.textContent = priceMax.value;

  // Update the max slider range to be equal to the value of the min slider
  priceMin.addEventListener("input", () => {
    minValueDisplay.textContent = priceMin.value;
    priceMax.min = priceMin.value; // Ensure max value is greater than or equal to min value
    if (parseInt(priceMax.value) < parseInt(priceMin.value)) {
      priceMax.value = priceMin.value; // Sync max value to min value if necessary
    }
  });

  // Update the min slider range to be equal to the value of the max slider
  priceMax.addEventListener("input", () => {
    maxValueDisplay.textContent = priceMax.value;
    priceMin.max = priceMax.value; // Ensure min value is less than or equal to max value
    if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
      priceMin.value = priceMax.value; // Sync min value to max value if necessary
    }
  });
});
