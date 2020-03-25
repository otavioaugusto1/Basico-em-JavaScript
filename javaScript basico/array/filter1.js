const produtos = [
    {nome: 'Notebook',preco: 2499,fragil:true},
    {nome: 'Ipad pro',preco:4199,fragil: true},
    {nome: 'Copo de vidro',preco: 12.49,fragil:true},
    {nome: 'Copo descartável',preco: 18.99,fragil:false}
]

const caro = produto => produto.preco >= 500
const fragilzinho = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragilzinho))