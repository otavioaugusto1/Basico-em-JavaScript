const numeros = [1,2,3,4,5]
let numerosDobrados = numeros.map(x => x *2)
console.log(numerosDobrados)
let numerosMultiFilter = numeros.filter(numero => numero % 2 == 0)
console.log(numerosMultiFilter)
let arrayMapFilter = numeros.filter(numero => numero % 2 ==0 ).map(numero => numero * 2)
console.log(arrayMapFilter)