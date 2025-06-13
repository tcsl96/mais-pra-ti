// npm install prompt-sync
const input = require("prompt-sync")();


/**
 * 1. Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real  
 * (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
 */
function questao1() {}

/**
 * 2. Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar.  
 * Use while para repetir até acertar, contando tentativas  
 * e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
 */
function questao2() {
    const numeroSorteado = Math.floor(Math.random() * 100 + 1);
    let escolha = 0;
    let tentativas = 1;

    console.log("Um número de 1 a 100 foi sorteado.");
    while (true) {
        escolha = Number(input("Qual número você acha que é? "));
        if (escolha == numeroSorteado) {
            console.log(`Parabéns! Você acertou com ${tentativas} tentativa(s).`);
            break;
        } else if (escolha > numeroSorteado) {
            console.log("Mais baixo. O número de tentativas é:", tentativas);
        } else {
            console.log("Mais alto. O número de tentativas é:", tentativas);
        }
        tentativas++;
    }
}

/**
 * 3. Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for  
 * para extrair todas as palavras únicas e exibi-las em um array.
 */
function questao3() {
    const string = "olá olá mundo mundo hello world";
    const palavrasUnicas = new Array();
    let palavra = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            palavra += string[i];
        } 
        if (string[i] == " " || i == (string.length - 1)) {
            if (!palavrasUnicas.includes(palavra)) {
                palavrasUnicas.push(palavra);
            }
            palavra = "";
        }
    }
    console.log(palavrasUnicas);
}

/**
 * 4. Implemente function fatorial(n) de forma recursiva;  
 * trate n < 0 lançando um Error, e n === 0 retornando 1.
 */
 function questao4() {}

/**
 * 5. Crie function debounce(fn, delay) que receba uma função fn e um delay em ms,  
 * retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
 */
function questao5() {}

/**
 * 6. Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos),  
 * retornando resultados instantâneos em repetidas invocações.
 */
function questao6() {}

/**
 * 7. Dado um array produtos = [{ nome, preco }, …],  
 * crie uma função que retorne um novo array apenas com os nomes,  
 * ordenados por preço crescente, usando map, sort.
 */
function questao7() {
    const produtos = [
        {nome: "Produto 1", valor: 5},
        {nome: "Produto 2", valor: 2},
        {nome: "Produto 3", valor: 9},
        {nome: "Produto 4", valor: 7},
        {nome: "Produto 5", valor: 3}];

    function compararPreco(produto1, produto2) {
        return produto1.valor - produto2.valor;
    }

    return produtos
    .sort(compararPreco)
    .map(produto => produto.nome);
}

/**
 * 8. Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
 * cada chave é um cliente e o valor é a soma de todos os seus total.
 */
function questao8() {}

/**
 * 9. Escreva duas funções:  
 * ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.  
 * ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.
 */
function questao9() {}

// questao1();
// questao2();
// questao3();
// questao4();
// questao5();
// questao6();
console.log(questao7());
// questao8();
// questao9();