const pessoa= {
    saudacao : 'Olá',
    falar() {
        console.log(this.saudacao)
    }
}
console.log(pessoa.saudacao)
const falarDePessoa = pessoa.falar.bind(pessoa) // o this funcionará, passando dentro do parâmetro de BIND o que seria o THIS
falarDePessoa()