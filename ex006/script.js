const estadosBrasileiros = Object.freeze({
    AC: 'Acre', AL: 'Alagoas', PR: 'Paraná'
})

class Endereco {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.estado = this.checaEstado(estado)
        this.pais = pais
        this.cep = cep
    }
    checaEstado(estado) {
        for (const enumEstado of Object.values(estadosBrasileiros)) {
            if (enumEstado == estado) {
                return estado
            }
        }
        console.log("Estado não encontrado")
        return false
    }
}

let cliente1 = new Endereco("Rua Brasil", 922, "Londrina", "Paraná", "Brasil", "86010200")
let cliente2 = new Endereco("Rua Brasil", 922, "Londrina", "São Paulo", "Brasil", "86010200")

console.log(cliente1)
console.log(cliente2)