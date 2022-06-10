let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let response = document.querySelector(".answer");
let container = document.querySelector(".container");
let nav = document.querySelector(".nav");
let select = document.querySelector("select");
let form = document.querySelector(".form");
let cgv = document.getElementById("check");
let display = document.querySelector(".display");

let inputName = document.querySelector("input[type='text']");

btn1.addEventListener("click", () => {
  response.classList.toggle("displayResponse");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.toggle("displayResponse");
  response.style.background = "red";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

let pseudo = "";
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

let language = "";
select.addEventListener("input", (e) => {
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    display.innerHTML = `votre nom est ${pseudo} 
    votre langue de programation favoris ${language}`;
  } else {
    alert("veuillez cocher la case cgv");
  }
});
