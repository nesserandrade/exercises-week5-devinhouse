class Endereço {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.cep = cep
    }
}

cliente1 = new Endereço("Rua Brasil", 922, "Londrina", "Paraná", "Brasil", "86010200")
console.log(cliente1)