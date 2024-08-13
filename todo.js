const keper = document.querySelector(".keper");
const momen = `<span class="icon-heart"></span>`;
const form = document.querySelector("form");
let kalam = document.getElementById("kalam");
let add = document.getElementById("add");
let task = document.getElementsByClassName("task");
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const geded = `
<div class="task">
<span class="icon-star"></span>
<h5 class="kalamy">${kalam.value}</h5>
<div class="icons">
  <span class="icon-trash-o"></span>
  <span class="icon-sad"></span>
</div>
`;
  keper.innerHTML += geded;
  kalam.value = "";
});
keper.addEventListener("click", (eo) => {
  eo.preventDefault();

  if (eo.target.classList == "icon-trash-o") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.classList == "icon-sad") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("kalamy")[0]
      .classList.add("finish");
    eo.target.parentElement.innerHTML += momen;
  } else if (eo.target.classList == "icon-heart") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("kalamy")[0]
      .classList.remove("finish");
    eo.target.parentElement
      .getElementsByClassName("icon-sad")[0]
      .classList.remove("dn");
  } else if (eo.target.classList == "icon-star") {
    eo.target.style.color = "orange";
    keper.prepend(eo.target.parentElement);
  }
});
