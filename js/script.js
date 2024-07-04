// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//tutup nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let nomor = document.getElementById("nomor").value;
  let pesan = document.getElementById("pesan").value;

  console.log(name);
  console.log(email);
  console.log(nomor);
  console.log(pesan);
}

function showSlide() {
  document.getElementsByClassName("about-img")[0].style.display = none;
  document.getElementsByClassName("about-img")[1].style.display = block;
}
