//criar de forma literal
function fun1() {}

//armazenar em uma variável
const fun2 = function () {}

//armazenar em um array
const array = [function(a,b) { return a + b },fun1,fun2]
console.log(array[0](2,3)) //executando a função dentro de um array,especificando a posição 0 e parâmetros

//armazenar em um atributo de objeto
const obj = {}
obj.falar= function() {return 'OPA'}
console.log(obj.falar())

//passar função como parâmetro
function run(fun){
    fun()
}

//uma função pode retornar outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
//chamando essa função   
soma(4,4)(10)