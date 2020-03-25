const sequencia = {
    _valor: 1, //convenção q essa variável é pretendida ser usada só privadamente
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor,sequencia.valor)