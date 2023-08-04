const toggler = document.querySelector(".main .toggler");
const navMenu = document.querySelector(".main #navMenu");
const scroll = document.getElementById("scroll");

toggler.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

scroll.addEventListener("click", () => {
  document.querySelector(".get-started").scrollIntoView({ behavior: "smooth" });
});
