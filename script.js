// JavaScript

const botaoEntrar = document.getElementById("enter-btn");

function validation() {
  const inputEmail = document.getElementById("email");
  const inputSenha = document.getElementById("senha");

  if (
    inputEmail.value === "tryber@teste.com" &&
    inputSenha.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

botaoEntrar.addEventListener("click", validation);

const checkAgree = document.getElementById("agreement");
const botaoEnviar = document.getElementById("submit-btn");

function permiteEnviar() {
  botaoEnviar.disabled = !checkAgree.checked;
}

checkAgree.addEventListener("change", permiteEnviar);

const textArea = document.getElementById("textarea");
const maxC = 500;
const contador = document.getElementById("counter");
contador.innerHTML = maxC;

function count() {
  const len = textArea.value.length;
  contador.innerHTML = maxC - len;
}

textArea.addEventListener("keyup", count);
