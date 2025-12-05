const input = {
  combustivel: document.querySelectorAll(".combustivel"),
  consumo_medio: document.querySelector("#consumo"),
  velocidade_media: document.querySelector("#velocidade"),
  preco_combustivel: document.querySelector("#precoCombustivel"),
  horas_viagem: document.querySelector("#horas"),
};

const elemento = {
  form: document.querySelector("form"),
  resultado: document.querySelector("#resultado"),
};

let combustivelSelecionado;

elemento.form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  calcularDistancia(
    input.velocidade_media,
    input.horas_viagem,
    input.consumo_medio.value,
    combustivelSelecionado
  );
});

function calcularDistancia(velocidade, horas, consumo, tipoCombustivel) {
  console.log(tipoCombustivel);

  let velocidadeDigitada = Number(velocidade.value),
    hora = Number(horas.value.slice(0, 2)),
    minuto = Number(horas.value.slice(3));

  let horasTotais = (hora * 60 + minuto) / 60;
  let distancia = velocidadeDigitada * horasTotais;

  calcularConsumo(consumo, distancia, tipoCombustivel)
  // if (tipoCombustivel == 'etanol') {
  //   distancia = distancia - distancia * 0.3;
  //   calcularConsumo(consumo, distancia);
  //   distancia = distancia.toFixed(1);
  //   distancia = distancia.replace(".", ",");
  // } else if (tipoCombustivel == 'diesel') {
  //   distancia = distancia + distancia * 0.15;
  //   calcularConsumo(consumo, distancia);
  //   distancia = distancia.toFixed(1);
  //   distancia = distancia.replace(".", ",");
  // } else {
  //   calcularConsumo(consumo, distancia);
  //   distancia = distancia.toFixed(1);
  //   distancia = distancia.replace(".", ",");
  // }
}

function calcularConsumo(consumoMedio, distanciaPercorrida, tipoCombustivel) {
  let consumoEmLitros = distanciaPercorrida / consumoMedio;
  let valorAPagar

 
  if (tipoCombustivel == 'etanol') {
    consumoEmLitros += (consumoEmLitros * 0.3);
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  } else if (tipoCombustivel == 'diesel') {
    consumoEmLitros = (consumoEmLitros * 0.85);
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  } else {
    valorAPagar = consumoEmLitros * input.preco_combustivel.value;
    inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  }

  // console.log("voce ira gastar " + consumoEmLitros.toFixed(2) + "litros");
}
input.combustivel.forEach((tipoCombustivel) => {
  tipoCombustivel.addEventListener('change', (evento) => {
    combustivelSelecionado = evento.target.id;
    console.log(combustivelSelecionado);
    return combustivelSelecionado;
  });
});

function inserirDados(distancia, consumo, tipoCombustivel, valorAPagar){

  let distanciaFormatada = distancia.toLocaleString("pt-BR")
    let consumoFormatada = consumo.toLocaleString("pt-BR")

  elemento.resultado.innerText = `para uma viajem de ${distanciaFormatada} km, voce gastará ${consumoFormatada} litros de ${tipoCombustivel}, com valor total de ${valorAPagar.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`


  elemento.resultado.id = "";
}