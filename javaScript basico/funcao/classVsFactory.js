
class pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const pessoa1 = new pessoa('Otávio')
pessoa1.falar()


//factory com arrow
const Pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)

    }
}
const pessoa2 =Pessoa('Otávio')
pessoa2.falar()

// function com classe
function Pessoazinha(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p10 = new Pessoazinha("OI")
p10.falar()