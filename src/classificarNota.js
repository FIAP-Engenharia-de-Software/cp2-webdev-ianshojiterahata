// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  function classificarNota(nota) {
    if(typeof nota !== 'number' || nota < 0 || nota > 10){
      return "Nota inválida"
    }
   
    return nota >= 6 ? "Aprovado" : "Reprovado";
  }
   
  function adivinharNumero(max, palpite) {
    let numeroAleatorio = Math.floor(Math.random() * (max + 1))
   
    if(numeroAleatorio === palpite){
      return "Acertou!";
    }else{
      return "Errou! Tente novamente!";
    }
  }
   
  function corrigirValor(valor) {
    const numero = Number(valor);
    return isNaN(numero) ? "Valor inválido" : numero;
  }
   
   
  SAUDAÇÃO
   
  function saudacao(nome, isLogged) {
   return isLogged && "Olá, " + (nome ?? "Visitante") + "!"
  }
   
   
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };