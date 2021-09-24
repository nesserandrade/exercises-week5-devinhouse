class Endereco {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.cep = cep
    }
}

let cliente1 = new Endereco("Rua Brasil", 922, "Londrina", "Paraná", "Brasil", "86010200")
console.log(cliente1)