// npm install prompt-sync
const input = require("prompt-sync")();


/**
 * 1. Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real  
 * (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
 */
function questao1(dia, mes, ano) {
    function ehBissexto(ano) {
        if (ano % 400 == 0) {
            return true;
        } else if (ano % 4 == 0) {
            if (ano % 100 != 0) { return true; }
        }

        return false;
    }

    const mesesTrintaDias = [4, 6, 9, 11];  // Abr, Jun, Set, Nov

    if (mes < 1 || mes > 12) { return false; }
    if (dia < 1 || dia > 31) { return false; }

    if (mesesTrintaDias.includes(mes)) {
        if (dia > 30) { return false; }
    } else if (mes == 2) {  // Fev
        if (ehBissexto(ano)) {
            if (dia > 29) { return false; }
        } else {
            if (dia > 28) { return false; }
        }
    }

    return true;
}

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
function questao3(string="olá olá mundo mundo") {
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
 function questao4(numero) {
    if (numero < 0 ) {
        throw new Error("O número precisa ser maior do que 0.");
    }
    if (numero === 0) {
        return 1;
    }
    return numero * questao4(numero - 1);
 }

/**
 * 5. Crie function debounce(fn, delay) que receba uma função fn e um delay em ms,  
 * retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
 */
function questao5() {
    function debounce(fn, delay) {
        let timeoutId;

        return function(...args) {
            const context = this;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    }

    function buscar(query) {
        console.log("Buscando:", query);
    }

    const buscarDebounced = debounce(buscar, 300);

    buscarDebounced("a");     // Cancelado
    buscarDebounced("ab");    // Cancelado
    buscarDebounced("abc");   // Última chamada - após 300ms, executa: "Buscando: abc"
}

/**
 * 6. Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos),  
 * retornando resultados instantâneos em repetidas invocações.
 */
function questao6() {
    function memoize(fn) {
        const cache = new Map();

        return function(...args) {
            const key = JSON.stringify(args);
            
            if (cache.has(key)) {
                return cache.get(key);
            }
    
            const result = fn.apply(this, args);
            cache.set(key, result);
            return result;
        }
    }

    function fatorial(n) {
        if (n == 1) { return n; }
        return n * fastFatorial(n - 1);
    }

    const fastFatorial = memoize(fatorial);
    console.log(fastFatorial(5));
}

/**
 * 7. Dado um array produtos = [{ nome, preco }, …],  
 * crie uma função que retorne um novo array apenas com os nomes,  
 * ordenados por preço crescente, usando map, sort.
 */
function questao7() {
    const produtos = [
        {nome: "Produto 1", preco: 5},
        {nome: "Produto 2", preco: 2},
        {nome: "Produto 3", preco: 9},
        {nome: "Produto 4", preco: 7},
        {nome: "Produto 5", preco: 3},
    ];

    function compararPreco(produto1, produto2) {
        return produto1.preco - produto2.preco;
    }

    return produtos.sort(compararPreco).map(produto => produto.nome);
}

/**
 * 8. Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
 * cada chave é um cliente e o valor é a soma de todos os seus total.
 */
function questao8() {
    const vendas = [
        {cliente: "Cliente 1", total: 1},
        {cliente: "Cliente 2", total: 2},
        {cliente: "Cliente 1", total: 3},
        {cliente: "Cliente 3", total: 4},
        {cliente: "Cliente 2", total: 5},
    ];

    function acumularVendas(acumulador, venda) {
        acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
        return acumulador;
    }

    return vendas.reduce(acumularVendas, {});
}

/**
 * 9. Escreva duas funções:  
 * ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.  
 * ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.
 */
function questao9() {
    function paresParaObjeto(acumulador, par) {
        acumulador[par[0]] = par[1];
        return acumulador;
    }

    function objetoParaPares(objeto) {
        const pares = new Array();
        for (const key in objeto) {
            pares.push([key, objeto[key]]);
        }
        return pares;
    }

    pares = [["Chave 1", 1], ["Chave 2", 2], ["Chave 3", 3]];
    objeto = {"Chave 1": 1, "Chave 2": 2, "Chave 3": 3};

    console.log(pares.reduce(paresParaObjeto, {}));
    console.log(objetoParaPares(objeto));
}

// console.log(questao1(29, 2, 2000));
// questao2();
// questao3("olá olá mundo mundo hello world");
// console.log(questao4(5));
// questao5();
// questao6();
// console.log(questao7());
// questao8();
// questao9();