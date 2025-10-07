// Mensagem no console
console.log("Portfólio de Nicolas Francisco carregado com sucesso!");

// Efeito de clique no botão do currículo
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(`Botão clicado: ${btn.textContent}`);
  });
});
