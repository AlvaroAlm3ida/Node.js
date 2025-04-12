//nome que utilizamos para representar uma cadeia de caracteres

const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao  = `Ju diz: "nosso lema é 'Estudar bastante!'"`;

console.log (cumprimento);
console.log(citacao);

//Template string
console.log(`a estudante chama ${estudante}`);

//Passa tudo para caixa alta
const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);