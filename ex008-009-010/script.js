let idTransf = 1

class Cliente {
    constructor (nome, cpf, endereco, celular){
        this.nome = nome
        this.cpf = this.validaCPF(cpf)
        this.endereco = endereco
        this.celular = celular
    }
    validaCPF (cpf) {
    if (typeof cpf !== "string") {
        alert("CPF inválido")
        return false
    }
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
        ) {
            alert("CPF inválido")
            return ""
        }
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(9, 10))) {
            alert("CPF inválido")
            return ""
        }
        soma = 0
        for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(10, 11) ) ) {
            alert("CPF inválido")
            return ""
        }
        alert("CPF válido")
        return cpf
    }
}

class Conta {
    constructor(numConta, saldo, cliente) {
        this.numConta = numConta
        this.saldo = saldo
        this.cliente = cliente
    }
}

class Transacoes {
    constructor(conta, valorTransacao, saldo) {
        this.id = idTransf
        this.conta = conta
        this.valorTransacao = valorTransacao
        this.saldo = saldo
        this.dataTrans = new Date()
    }
    Transferencia () {
        if (this.verificarTransf()) {
            if (this.saldo >= this.valorTransacao) {
                this.saldo -= this.valorTransacao
                this.id = idTransf
                idTransf++
                contaNesser.saldo = this.saldo
                return contaNesser.saldo
            }
            else {
                alert("Transferência inválida")
                return this.saldo
            }
        }
    }
    Deposito () {
        if (this.verificarTransf()) {
            this.saldo += this.valorTransacao
            contaNesser.saldo = this.saldo
            this.id = idTransf
            idTransf++
            alert('Depósito efetuado')
            return contaNesser.saldo
            }
        }

    verificarTransf() {
        if (this.valorTransacao <= 300) {
          return true;
        } else return false;
      }
}

let clienteNesser = new Cliente('Nesser', '071.890.219-06', 'Rua Brasil, 922', 43999999999)
let contaNesser = new Conta(546, 2500, clienteNesser)
let transferenciaNesser = new Transacoes(contaNesser, 250, contaNesser.saldo)
transferenciaNesser.Transferencia()
console.log(contaNesser)
console.log(transferenciaNesser)
console.log(idTransf)