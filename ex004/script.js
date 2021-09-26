class Cliente {
    constructor (nome, cpf, endereco, celular){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.celular = celular
    }
}

let cliente1 = new Cliente('Nesser', 11111111111, 'Rua Alagoas, 922', 43999999999)

console.log(cliente1)