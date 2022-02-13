const toggleButton = document.getElementsByClassName("three_line_image")[0];
const navbarLinks = document.getElementsByClassName("navbar2")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("action");
});

document.getElementById("login_button").onclick = function () {
  console.log("adsa");
  document.getElementById("login_page").style.display = "block";
};

document.getElementById("exit_logo").onclick = function () {
  document.getElementById("login_page").style.display = "none";
};

document.getElementById("register_button").onclick = function () {
  console.log("adsa");
  document.getElementById("register_page").style.display = "block";
};

document.getElementById("exit_register").onclick = function () {
  document.getElementById("register_page").style.display = "none";
};
