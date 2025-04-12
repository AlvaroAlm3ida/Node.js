const notaPrimeiroBi = 8;
const notaSegundoBi =  6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5') // Caso estiver entre '' seria uma string porém passando o parseInt() ele volta como numero

const total = (notaPrimeiroBi+notaSegundoBi+notaTerceiroBi+notaQuartoBi)/4;

// toFixed faz com que o numero de casas decimais passadas entre parentesis se torne  seja o numero de casas que podem ter.
console.log ('A nota total é ' + total.toFixed(2));
