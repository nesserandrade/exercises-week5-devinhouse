class Cliente {
    constructor (nome, cpf, endereco, celular){
        this.nome = nome
        this.cpf = this.validaCPF(cpf)
        this.endereco = endereco
        this.celular = celular
    }
    validaCPF (cpf) {
    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") return "";

    for (let i=1; i<=9; i++) {Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11}

    if ((Resto == 10) || (Resto == 11))  {Resto = 0}
    if (Resto != parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido")
        return "";
}

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido")
        return "";
    }
    alert("CPF válido")
    return cpf;
    }
}

let cliente1 = new Cliente('Nesser', '07189021905', 'Rua Brasil, 922', 43999999999)

console.log(cliente1)