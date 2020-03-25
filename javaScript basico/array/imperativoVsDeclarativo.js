//faça a média das notas dos alunos
//Imperativo
const alunos = [
    {nome:'Pedro',nota:7.7},
    {nome:'João',nota:8.9},
    {nome:'Ana',nota:5.7}
]
let somatorio = 0
for(let i in alunos){
    somatorio += alunos[i].nota
}
console.log(somatorio)
console.log(somatorio / alunos.length)

//Declarativo
const pegarNota = obj => obj.nota
const soma = (total,atual) => total + atual
let total2 = alunos.map(pegarNota).reduce(soma)
console.log(total2 / alunos.length)
total2 = alunos.map(pegarNota)
console.log(total2)