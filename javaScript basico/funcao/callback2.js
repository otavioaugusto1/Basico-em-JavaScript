// sem callback
const notas = [7.7,5.2,6.3,8.4,9.0,8.8,1.1]
let notasMenoresQue7 = []
for(i in notas){
    if(notas[i] < 7){
        notasMenoresQue7.push(notas[i])
    }
}
console.log(notasMenoresQue7)

// com callback
notasMenoresQue7 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasMenoresQue7)

//com callback e arrow function
const notasMenoresQue7PT3 = notas.filter(notas => notas < 7)
console.log(notasMenoresQue7PT3)