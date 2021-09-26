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

cliente1 = new Endereço("Rua Alagoas", 922, "Londrina", "Paraná", "Brasil", "86010210")
console.log(cliente1)