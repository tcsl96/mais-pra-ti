// npm install prompt-sync
const input = require("prompt-sync")();


/**
 * 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 * utilizando uma estrutura de controle if.
 */
function questao1() {
    const numero = Number(input("Informe um número inteiro: "));
    
    if (numero % 2 == 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

/**
 * 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 * adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 * controle if-else.
 */
function questao2() {
    const idade = Number(input("Informe a idade da pessoa: "));
    let classificacao = "";

    if (idade <= 13) {
        classificacao = "criança";
    } else if (idade <= 17) {
        classificacao = "adolescente";
    } else if (idade <= 59) {
        classificacao = "adulta";
    } else {
        classificacao = "idosa";
    }

    console.log("Essa pessoa é", classificacao);
}

/**
 * 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */
function questao3() {
    const nota = Number(input("Informe a nota do aluno (de 0 a 10): "));
    let situacao = "";

    if (nota >= 7) {
        situacao = "aprovado";
    } else if (nota >= 3.5) {
        situacao = "recuperacao";
    } else {
        situacao = "reprovado";
    }

    console.log("A situação do aluno é:", situacao);
}

/**
 * 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */
 function questao4() {
    console.log(
        "Menu de opções\n" +
        "1 - Classificador de par ou ímpar\n" + 
        "2 - Classificador de idade\n" + 
        "3 - Classificador de nota");
    const opcao = input("Escolha uma opção: ");
    switch (opcao) {
        case "1":
            questao1();
            break;
        case "2":
            questao2();
            break;
        case "3":
            questao3();
            break;
        default:
            console.log("Opção inválida.");
    }
}

/**
 * 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 */
function questao5() {
    const altura = Number(input("Informe a altura da pessoa em m: "));
    const peso = Number(input("Informe o peso da pessoa em kg: "));
    const imc = peso / (altura * altura);
    let categoria = "";

    if (imc <= 18.5) {
        categoria = "baixo peso";
    } else if (imc <= 24.9) {
        categoria = "peso normal";
    } else if (imc <= 29.9) {
        categoria = "sobrepeso";
    } else {
        categoria = "obesidade";
    }

    console.log("A pessoa possui", categoria);
}

/**
 * 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 * formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 * Isósceles, escaleno ou eqüilátero.
 * Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
 * Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 * Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 * Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */
function questao6() {
    console.log("Informe os valores dos lados de um triângulo.");
    const ladoA = Number(input("Lado A: "));
    const ladoB = Number(input("Lado B: "));
    const ladoC = Number(input("Lado C: "));
    let classificacao = "";

    if ((ladoA < (ladoB + ladoC)) &&
        (ladoB < (ladoA + ladoC)) &&
        (ladoC < (ladoA + ladoB))) {
        if (ladoA == ladoB && ladoB == ladoC) {
            classificacao = "equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            classificacao = "isósceles";
        } else {
            classificacao = "escaleno";
        }
    } else {
        console.log("Os lados não formam um triângulo.");
        return;
    }

    console.log("O triângulo é", classificacao);
}

/**
 * 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 */
function questao7() {
    const quantidadeMacas = Number(input("Informe a quantidade de maçãs compradas: "));
    let precoMaca = 0.25;

    if (quantidadeMacas < 12) {
        precoMaca = 0.3;
    }

    console.log("O preço total das maçãs é:", quantidadeMacas * precoMaca);
}

/**
 * 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */
function questao8() {
    const numero1 = Number(input("Informe um número: "));
    const numero2 = Number(input("Informe outro número diferente do primeiro: "));

    if (numero1 < numero2) {
        console.log("Os números informados foram:", numero1, numero2);
    } else {
        console.log("Os números informados foram:", numero2, numero1);
    }
}

/**
 * 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
 * utilizando um loop for.
 */
function questao9() {
    for (let contagem = 10; contagem > 0; contagem--) {
        console.log(contagem);
    }
}

/** 
 * 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */
function questao10() {
    const numero = Number(input("Informe um número: "));
    
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}
/**
 * 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */
function questao11() {
    let numero = 0;
    let somaNumeros = 0;
    
    for (let i = 0; i < 5; i++) {
        numero = Number(input("Informe um número: "));
        somaNumeros += numero;
    }

    console.log("A soma dos números informados é:", somaNumeros);
}

/**
 * 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
 * de 1 a 10) utilizando um loop for.
 */
 function questao12() {
    const numero = Number(input("Informe um número: "));

    for (let i = 1; i < 11; i++) {
        console.log(
            numero,"+", i,"=", numero + i,"\t",
            numero,"-", i,"=", numero - i,"\t",
            numero,"*", i,"=", numero * i,"\t",
            numero,"/", i,"=", numero / i);
    }
}

/**
 * 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */
function questao13() {
    let numero = 0;
    let somaNumeros = 0;
    let qtdNumeros = 0;

    while (true) {
        numero = Number(input("Informe um número decimal (ou digite 0 para encerrar): "))
        if (numero == 0) {
            break;
        }
        if (numero % 1 == 0) {
            console.log("O número é inteiro. Por favor, informe um número decimal.");
            continue;
        }
        somaNumeros += numero;
        qtdNumeros++;
    }
    // Para evitar divisão por 0.
    if (qtdNumeros == 0) {
        qtdNumeros++;
    }

    console.log("A média dos números informados é:", somaNumeros / qtdNumeros);
}

/**
 * 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */
function questao14() {
    const numero = Number(input("Informe um número: "));
    let fatorial = 1;
    
    while (numero > 1) {
        fatorial *= numero;
        numero--;
    }

    console.log("O fatorial desse número é:", fatorial);
}

/**
 * 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for
 */
function questao15() {
    let penultimo = 0;
    let ultimo = 1;
    let atual = 0;
    
    console.log(penultimo);
    console.log(ultimo);

    for (let i = 2; i < 10; i++) {
        atual = ultimo + penultimo;
        console.log(atual);
        penultimo = ultimo;
        ultimo = atual;
    }
}

// questao1();
// questao2();
// questao3();
// questao4();
// questao5();
// questao6();
// questao7();
// questao8();
// questao9();
// questao10();
// questao11();
// questao12();
// questao13();
// questao14();
// questao15();