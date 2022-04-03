function limpar(id) {
  document.getElementById(`${id}`).value = null;
}

function limparTudo() {
  function campos(id) {
    document.getElementById(`${id}`).innerHTML = "";
  }
  campos("subtracao");
  campos("media");
  campos("situacao");
  campos("divisao");
  campos("salario_novo");
  campos("resultado");
}

function alert() {
  swal.fire("Opa!", "Você não preencheu todos os campos", "warning");
}

function subtrair() {
  let valor1 = document.querySelector("#valor_subtracao_1").value;
  let valor2 = document.querySelector("#valor_subtracao_2").value;

  if (valor1 == "" || valor2 == "") {
    alert();
  } else {
    let subtracao = valor1 - valor2;
    let resultado = document.querySelector("#subtracao");
    resultado.innerHTML = `O resultado da subtração é ${subtracao}`;

    limpar("valor_subtracao_1");
    limpar("valor_subtracao_2");
  }
}

function media() {
  let nota1 = parseFloat(document.querySelector("#nota_1").value),
    nota2 = parseFloat(document.querySelector("#nota_2").value),
    resultado = document.querySelector("#media"),
    media = (nota1 + nota2) / 2,
    situacao = document.querySelector("#situacao");

  if (
    document.querySelector("#nota_1").value == "" ||
    document.querySelector("#nota_2").value == ""
  ) {
    alert();
  } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    swal.fire(
      "Erro!",
      "O valor digitado é inválido, só são aceitos valores entre 0 e 10",
      "error"
    );
    limpar("nota_1");
    limpar("nota_2");
  } else {
    resultado.innerHTML = `A sua média foi: ${media}`;

    if (media >= 6) {
      situacao.innerHTML = "Você foi aprovado!";
      situacao.style.color = "green";
      situacao.style.fontWeight = "bold";
    } else {
      situacao.innerHTML = "Você foi reprovado!";
      situacao.style.color = "red";
      situacao.style.fontWeight = "bold";
    }
    limpar("nota_1");
    limpar("nota_2");
  }
}

function dividir() {
  let valor1 = document.querySelector("#valor_divisao_1").value,
    valor2 = document.querySelector("#valor_divisao_2").value,
    resultado = document.querySelector("#divisao"),
    divisao = (valor1 / valor2).toFixed(2);

  if (valor1 == "" || valor2 == "") {
    alert();
    limpar("valor_divisao_1");
    limpar("valor_divisao_2");
  } else {
    if (valor2 == 0) {
      swal.fire(
        "Erro!",
        "Não é possível dividir um número por 0, tente novamente",
        "error"
      );
      limpar("valor_divisao_1");
      limpar("valor_divisao_2");
    } else {
      resultado.innerHTML = `O resultado da divisão é ${divisao}`;
      resultado.style.color = "#fff";
      limpar("valor_divisao_1");
      limpar("valor_divisao_2");
    }
  }
}

function salario() {
  let salarioAtual = parseInt(document.querySelector("#salario_atual").value);
  let resultado = document.querySelector("#salario_novo");

  if (document.getElementById("salario_atual").value == "") {
    swal.fire("Opa!", "Você não preencheu este campo", "warning");
  } else {
    if (salarioAtual <= 500) {
      resultado.innerHTML = `Seu novo salario é: R$ ${(
        salarioAtual * 1.2
      ).toFixed(2)}`;
    } else {
      resultado.innerHTML = `Seu novo salario é: R$ ${(
        salarioAtual * 1.1
      ).toFixed(2)}`;
    }
  }
}

function inverter() {
  let a = document.querySelector("#valor1").value,
    b = document.querySelector("#valor2").value,
    resultado = document.querySelector("#resultado"),
    c = a;
  a = b;
  b = c;

  if (a == "" || b == "") {
    alert();
  } else {
    resultado.innerHTML = `A = ${a} <br> B = ${b}`;
  }
}
