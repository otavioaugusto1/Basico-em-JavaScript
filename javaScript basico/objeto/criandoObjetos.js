//usando notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object)
const obj2 = new Object


//função construtora! IMPORTANTE
function produto(nome,preco,desc){
    this.nome=nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    } // tornando as variaveis públicas para fora do OBJETO
}
const p1 = new produto('Notebook',2500,0.25)
const p2 = new produto('Cadeira',50,0.10)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())


//função factory 
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = new criarFuncionario("Astolfo",998,3)
const f2 = new criarFuncionario('Maria',11800,4)
console.log(f1.getSalario(), f2.getSalario())