// array===vetor '?'
const valores = [5.5,6.8,6.9,4.4]
console.log(valores[0],valores[3])
console.log("Oi, coquinho")
console.log(valores[4])
valores[4]= 10.876
console.log(valores[4])
console.log(valores)
valores.push('oi',5.4,10,'bem-vindo') //adicionando quantas posições quiser ao mesmo tempo,porém tudo no final
console.log(valores)
delete valores[0] // deletando o índice 0 e colocando "empty item " no seu lugar
valores.pop() // removendo a ultima posição e printando na tela
console.log(valores)
console.log(typeof valores) // array em JS é um objeto

