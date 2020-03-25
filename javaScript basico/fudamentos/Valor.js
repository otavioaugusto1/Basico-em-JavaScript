const saudacao = 'opa'


function vazio(){
    const saudacao = 'falaaaaa'
    return saudacao
}
console.log(saudacao)
console.log(vazio())
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Otávio',
    idade: 19,
    endereco:{
        logradouro: 'Rua muito legal',
        numero: 623
    }
}
console.log(cliente)
console.log(cliente.endereco.logradouro) //interessante