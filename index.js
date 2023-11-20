class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ` + this.definirTipoAtaque(this.tipo));
    }

    definirTipoAtaque(tipo) {
        let ataque;
        if(tipo == "mago") {
            ataque = "magia";
        } else if(tipo == "guerreiro") {
            ataque = "espada";
        } else if(tipo == "monge") {
            ataque = "artes marciais";
        } else if(tipo == "ninja") {
            ataque = "shuriken";
        }
        return ataque;
    }
}

let heroi = new Heroi("Goku", "28", "monge");
heroi.definirTipoAtaque();
heroi.atacar();