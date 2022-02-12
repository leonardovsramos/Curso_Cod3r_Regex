// Regexp - Expressões Regulares

// g - Tag Global
// i - Tag Ignore Case

var texto = "Carlos assinou o abaixo-assinado.";
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));

console.log("\n");

// Executando Regex em JS
var texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

var regexNove = RegExp("9");
console.log("Métodos da RegExp:");
console.log(regexNove.test(texto));
console.log(regexNove.exec(texto));

console.log("\n");

var regexLetras = /[a-f]/g
console.log("Métodos da string:");
console.log(texto.match(regexLetras));
console.log(texto.search(regexLetras));
console.log(texto.replace(regexLetras), "Achei");
console.log(texto.split(regexLetras));

console.log("\n");

// Caracteres

var texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR.";

var regex = /casa/gi;
console.log(texto.match(regex));
console.log(texto.match(/a b/));

console.log("\n");

// Carateres Simples

var texto = "1,2,3,4,5,6,a.b c!d?e";

var regexVirgula = /,/;
console.log(texto.split(regexVirgula));
console.log(texto.match(regexVirgula));

console.log(texto.match(/,/g));
console.log(texto.match(/A/g));
console.log(texto.match(/A/gi));
console.log(texto.match(/2/g));
console.log(texto.match(/b c!d/));

console.log("\n")

// RegExp - Meta-Caracteres
/*
 * Representantes
 * Meta-caracteres    Nome                   Significado
 * .                  Ponto                  Um carácter qualquer
 * []                 Conjunto               Conjunto de caracteres permitidos
 * [^]                Conjunto Negado        Conjunto de caracteres proibidos
 * 
 * ---------------------------------------------------------------------------
 * 
 * Quantificadores
 * Meta-caracteres    Nome                   Significado
 * ?                  Opcional               Zero ou um
 * *                  Asterisco              Zero ou mais
 * +                  Mais                   Um ou mais
 * {n, m}             Chaves                 De n até m
 * 
 * ---------------------------------------------------------------------------
 * 
 * Âncoras
 * Meta-caracteres    Nome                   Significado
 * ^                  Circunflexo            Início de linha
 * $                  Cifrão                 Fim de linha
 * \b                 Borda                  Início ou fim de palavra
 * 
 * ---------------------------------------------------------------------------
 * 
 * Outros Meta-caracteres
 * Meta-caracteres    Nome                   Significado
 * \                  Escape                 Uso de meta-caracteres como literal
 * |                  Ou                     Operação de OU
 * ()                 Grupo                  Define um Grupo
 * \1...\9            Retrovisor             Resgata grupos já definidos
 */

// Exemplos de uso de Meta-Caracteres
// . ? * + - | [ ] { } ( ) \ :
var texto = "1,2,3,4,5,6,a.b c!d?e";
var regexPonto = /\./g;
console.log(texto.split(regexPonto));

var regexSimbolos = /,|\.|\?|!/g
console.log(texto.split(regexSimbolos));

console.log("\n");

// Meta-Caracteres: Ponto
// . é um coringa, também é válido para uma posição
var texto = "1,2,3,4,5,6,7,8,9,0";

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g));
console.log(texto.match(/1..,/g));

var notas = "8.3,7.1,8.8,10.0";
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));

console.log("\n");

// Selecionando Caracteres Brancos
var texto = `
ca  r
r   o s!
`

console.log(texto.match(/ca\tr\nr\to\ss!/));

console.log("\n");

var texto = "Você precisa responder sim, não ou não sei!";
console.log(texto.match(/sim|não|sei/gi))

console.log("\n");

// Selecionando Caracteres Unicode
var texto = "a c d";
console.log(texto.match(/\u0061\u0020\u0063\u0020\u0064/g))

console.log("\n");

// Conjuntos
// Trabalhando com Conjuntos
var texto = "1,2,3,4,5,6,a.b c!d?e[f";

// Para definir uma classe (ou conjunto) de caracteres usa []
var regexPares = /[02468]/g;
console.log(texto.match(regexPares));

var texto = "João não vai passear na moto."
var regexComESemAcento = /n[aã]/g
console.log(texto.match(regexComESemAcento));

console.log("\n");

// Trabalhando com Intervalos
var texto = "1,2,3,4,5,6,a.b c!d?e[f";
console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[b-d]/g));
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[A-Z1-3]/gi))

console.log("\n")

// Trabalhando com Conjuntos de Meta-Caracteres
var texto = ".$+*?-";

console.log(texto.match(/[+.?*$]./g)); // Não precisa de escape dentro do conj.
console.log(texto.match(/[$-?]/g)); // Isso é um intervalo (range)


// NÃO é um intervalo (range)
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

console.log("\n");

// Alguns cuidados com Intervalos
var texto = "ABC [abc] a-c 1234";

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // Não define um range

console.log(texto.match(/[A-z]/g)) // Intervalos usam a ordem da tabela UNICODE

console.log("\n");

// Usando Shorthands
var texto = `1,2,3,4,5,6,a.b c!d?e\r    -
f_g`;

console.log(texto.match(/\d/g)) // Números [0-9]
console.log(texto.match(/\D/g)) // Não números [^0-9]

console.log(texto.match(/\w/g)) // Caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)) // Não caracteres  [^a-zA-Z0-9]

console.log(texto.match(/\s/g)) // Espaços [\t\n\r\f]
console.log(texto.match(/\S/g)) // Não Espaços [^ \t\n\r\f]

console.log("\n");

// Conjuntos Negados
var texto = "1,2,3,a.b c!d?e[f";

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));

var texto = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(texto.match(/[^!-/:-@\s]/g));

console.log("\n");

// Selecionando Intervalos Unicode
var texto = 'áéíóú àèìòù âêîôû ç ãõ ü';
console.log(texto.match(/[À-ü]/g));

console.log("\n");

//Quantificadores 

// Quantificador: ? (Zero - Um)
var texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!";
var texto2 = "There is a big fog in NYC";

// ? -> Zero ou um (Opcional)
var regex = /fogo?/gi; // Devem ter as seguintes ocorrências: fogo, fog
console.log(texto1.match(regex));
console.log(texto2.match(regex));

console.log("\n");

// Quantificador: + (Um - Mais)
var texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO";
var texto2 = "There is a big fog in NYC";

// + -> Um ou Mais
var regex = /fogo+/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex));

var texto3 = "Os números: 0123456789";
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g));

console.log("\n")

// Quantificador: * (Zero - Mais)
var texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!";
var texto2 = "There is a big fog in NYC";

// * -> Zero ou Mais
var regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

console.log("\n");

// Quantificador: {n, m}
var texto = "O joão recebeu 120 milhões apostando 6 9 21 23 45 46."

// Para definir um quantificador usamos {}
console.log(texto.match(/\d{1,2}/g));
console.log(texto.match(/[0-9]{2}/g));
console.log(texto.match(/\d{1,}/g));

console.log(texto.match(/\w{7}/g));
console.log(texto.match(/[\wõã]{7,}/g));

console.log(texto.match(/\b\d{1,2}\b/g));
console.log(texto.match(/\b[\wõ]{7}\b/g));

console.log("\n");

// Guloso VS Não Guloso
var texto = "<div>Conteudo 01</div><div>Conteudo 02</div>";

// Quantificadores são guloso (greedy):
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))

console.log("\n\n");

// Desafio: Selecionando CPF
// DesafioCPF.js
var CPF = `
CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 454.674.333-21
    - 678.987.123-87
    - 789.112.543-00
`

console.log(CPF.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

console.log("\n\n")

// Desafio: Selecionando Telefone
// DesafioTelefone.js
var telefone = `Lista telefônica:
  - (11) 98756-1212
  -98765-4321 ...`

console.log(telefone.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));

