// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 220
console.log(produto)

//dificultando MAIS UM POUCO
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 55,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }
}
console.log(carro)
//deletando
delete carro.proprietario