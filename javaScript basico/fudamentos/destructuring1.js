//novo recurso do ES2015
const pessoa = {
    nome: 'Otávio',
    idade: 19,
    endereco: {
        logradouro: 'Rua Monsenhor Aluísio',
        numero: 623
    }
}
const {nome,idade} = pessoa
console.log(nome,idade) // tornando 'nome' e 'idade' "GLOBAIS", não somente dentro do objeto PESSOA;
const {nome: n, idade: i} = pessoa // Fazendo a mesma coisa de cima,porém alterando seu nome para oq quiser;
console.log(n,i)
const {endereco :{ logradouro:l ,numero:num}} = pessoa
console.log(l,num)