const pilotos = ["Vetel","Alonso","Raikkonen","Massa"]
pilotos.pop() //remove a última posição
console.log(pilotos)

pilotos.push('Verstappen') //add no fim
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionando:
pilotos.splice(2,0,"Bottas","Massa")
console.log(pilotos)
//removendo
pilotos.splice(3,1) //massa sumirá novamente KKSKSKSKSK
console.log(pilotos)


//SLICE: retorna um novo array a partir do demarcado
const algunsPilotos = pilotos.slice(3)
console.log(algunsPilotos)