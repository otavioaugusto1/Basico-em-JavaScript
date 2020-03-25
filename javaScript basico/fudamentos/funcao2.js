// armazenando uma função em uma variável 
const imprimirSoma = function (a,b){
    console.log(a + b)
} 
imprimirSoma(2,3)
// armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
}
console.log(soma(5,5))

// retorno implícito            (MUITO LEGAL)
const subtracao = (a,b) => a - b
console.log(subtracao(4,5)) 