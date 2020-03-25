const peso1 = 1.0
const peso2 = 2.0
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
const avaliacao1 = 55.5432
const avalicao2 = 33.321
const total = (peso1 * avaliacao1) + (peso2 * avalicao2)
const media = (total / (peso1 + peso2)) 
console.log(media.toFixed(2))
console.log(media.toString(2)) // transforma em binário 