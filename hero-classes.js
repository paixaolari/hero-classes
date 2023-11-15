const input = require('readline-sync');

class Heroi {

    ataque = "";

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

        if (this.tipo === "mage") {
            this.ataque = "fire magic";

        } else if (this.tipo === "warrior") {
            this.ataque = "long sword";

        } else if (this.tipo === "monk") {
            this.ataque = "kicks";

        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
            
        } else {
            this.tipo = `- ${this.tipo} - is invalid`;
            this.ataque = "invalid attack";
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} attacked using ${this.ataque}`)
    }

}


// Laço de repetição para criar herois de forma infinita, até que o usuário digite 'n' após criação e ataque do herói
do {

    let nome = input.question('Informe do heroi: ');
    let idade = input.questionInt('Informe a idade do heroi: ');
    let tipo = input.question('Informe o tipo heroi [mage, warrior, monk or ninja]: ');

    let heroi = new Heroi(nome, idade, tipo.toLowerCase()); // Atribui os valores inseridos pelo usuário
    heroi.atacar(); // Chama o método


    let sair = input.question('Deseja criar um novo heroi? [s/n] ');

    if(sair.toLowerCase() === 'n')
        break;

} while(true);