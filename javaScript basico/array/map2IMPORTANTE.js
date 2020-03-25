//Desafio: usar o map para retornar os preços

const carrinho =[
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome": "Kit de lápis","preco":41.22}',
    '{"nome":"Caneta","preco": 7.50 } '
]
const paraObjeto = array => JSON.parse(array) //transforma em objeto
const paraPreco = produto => produto.preco  //retorna o objeto passado no bloco preço

let segundoArrayCriadoParaVerPreco=carrinho.map(paraObjeto).map(paraPreco)
console.log(segundoArrayCriadoParaVerPreco)



