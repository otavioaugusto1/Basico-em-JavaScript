//criei uma função anonima
/*
criei outra variável para receber outra função anônima, que recebe 3
parâmetros, o último é a função que faz a soma, os 2 primeiros são os números para somar
e que, serão passados como parâmetros
*/

const soma =function(x,y){
    return x + y
}
const imprimirResultado = function(a,b,resultado = soma){
    console.log(resultado(a,b))
}
imprimirResultado(5,4)
imprimirResultado(5,5,soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})
imprimirResultado(3,4,(x,y)=> x * y) // passando uma arrow function dentro de outra função




const pessoa = {
    falar : function(){
        console.log("FALANDO")
    }
}
pessoa.falar() //lembrar de por o ':' pois é um objeto
 
const outraPessoa = {
    falar : 'ola,guys',
    idade : 123
}
console.log(outraPessoa.falar)