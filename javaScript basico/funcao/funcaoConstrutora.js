function carro(velocidadeMaxima = 200,delta =5){
    //criando atributo privado
    let velocidadeAtual = 0
    //metodo público
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //outro método público
    //pegar a velocidade atual que é privada
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
//instanciando um carro
const uno = new carro(5,5)
uno.acelerar()
//mostrando a velocidade 5,pois só foi chamado o ACELERAR 1 vez
console.log(uno.getVelocidadeAtual())
const ferrari = new carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log(typeof carro)
console.log(typeof ferrari)