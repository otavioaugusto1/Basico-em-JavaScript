const avo = {
    attrib1: 'A'
}
const pai ={
    __proto__:avo,
    attrib2: 'B'
}
const filho = {
    __proto__:pai,
    attrib3:'C'
}
console.log(filho.attrib1)

//dificultando
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km de ${this.velMax}km`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

//estabelecendo conexão entre ferrari e carro
Object.setPrototypeOf(ferrari,carro)
