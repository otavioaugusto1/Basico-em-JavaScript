const escola = "Unic"
console.log(escola.charAt(1))
console.log(escola.substring(2)) // a partir do índice ela mostra todo o restante
console.log('oi'.concat(" otavio ").concat(escola))
console.log("oi " + "otavio " + "voce " + "estuda " + "na " + escola)
console.log(escola.replace('U','p')) // transforma a letra da esquerda na letra pedida na direita
console.log("oi,tudo,bem,como,voce,vai".split(',')) // transforma a junção das palavras em array
console.log(`1 + 1 = ${1+1}`)