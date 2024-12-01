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
