const CreateSideBarElement = () => {
  const sideBarElement = document.createElement("div");
  sideBarElement.setAttribute("class", "sideBarElement hidden");
  const currentSVG = document.querySelector("#threeDots");
  document.body.insertBefore(sideBarElement, currentSVG);
};

window.addEventListener("DOMContentLoaded", CreateSideBarElement());
currentSVG.addEventListener("click", () => {
  sideBarElement.classList.add("show");
  alert("funciona");
});
