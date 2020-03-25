// Object.preventExtensions
const produto= Object.preventExtensions({
    nome: 'Qualquer',preco: 1.99,tag:'promoção'
})
console.log('Extensível:',Object.isExtensible(produto))
produto.nome= 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object seal SELANDO OBJETO
const pessoa ={nome: "Juliana",idade: 35}
Object.seal(pessoa)
console.log('É selado?',Object.isSealed(pessoa))

//Object.freeze
//Object.freeze(seilá)