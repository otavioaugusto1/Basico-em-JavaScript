function soma(){
    let soma = 0
    for(let i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
//arguments é utilizado para pegar os parâmetros da função