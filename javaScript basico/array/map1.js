const nums = [1,2,3,4,5]

//Map é um for com propósito
// armazenando o array em uma variável
let arrayDobro = nums.map(function(numero){
    return numero * 2
})
console.log(arrayDobro)

//map n modifica o array, e sim cria outro array!
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
arrayDobro = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(arrayDobro)