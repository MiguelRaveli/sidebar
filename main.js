const currentSVG = document.querySelector("#threeDots");
const CreateSideBarElement = () => {
  const sideBarElement = document.createElement("div");
  sideBarElement.setAttribute("class", "sideBarElement hidden");
  document.body.appendChild(sideBarElement);

  // Retorna o elemento criado para uso externo
  return sideBarElement;
};

window.addEventListener("DOMContentLoaded", () => {
  const sideBarElement = CreateSideBarElement(); // Cria o elemento e obtém referência a ele

  currentSVG.addEventListener("click", () => {
    sideBarElement.classList.toggle("show"); // Alterna a classe 'show'
  });
});
