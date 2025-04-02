const jogar = parseInt(prompt("Digite uma opção: 1 - Pedra, 2- Papel ou 3 - Tesoura"))
const botao = document.querySelector('button')
function comecar() {
   
  const jogaComputador = Math.floor(Math.random() * 3 )+ 1;
  if (
    jogar== jogaComputador
  ) {
    alert("Empate");
  } else if (jogar == 2 && jogaComputador == 3) {
    alert("Computador ganhou!!!,computador escolheu tesoura");
  } else if (jogar == 3 && jogaComputador == 2) {
    alert("Você ganhou!!!, computador escolheu papel");
  } else if (jogar == 1 && jogaComputador == 3) {
    alert("Você ganhou!!!,  computador escolheu tesoura");
  } else if (jogar == 2 && jogaComputador == 1) {
    alert("Você ganhou!!!, computador escolheu pedra");
  }
}
comecar();
