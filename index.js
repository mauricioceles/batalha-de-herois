class Heroi {
    constructor(nome, idade, tipo) {
        this.nome
        this.idade
        this.tipo
    }

    atacar(tipo) {
        let ataque

        if (tipo == "mago") {
            ataque = "magia"
        }
        else if (tipo == "guerreiro") {
            ataque = "espada"
        }
        else if (tipo == "monge") {
            ataque = "artes marciais"
        }
        else {
            ataque = "shuriken"
        }

        console.log("O " + tipo + " atacou usando " + ataque)
    }
}

let herois = ["mago", "guerreiro", "monge", "ninja"]
let heroi = new Heroi()

for (let i in herois) {
    heroi.atacar(herois[i])
}
