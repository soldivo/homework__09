let burger = document.getElementById("burger");
console.log(burger);
let navbarList = document.getElementById("navbarList");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navbarList.classList.toggle("navbar-list--active");
});
