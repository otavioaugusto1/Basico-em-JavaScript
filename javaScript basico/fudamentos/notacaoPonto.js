console.log(Math.ceil(6.1))
 function Obj(nome){
     this.nome=nome
     this.exec = function(){
         console.log("Executando...")
     }
 }
 const obj2 = new Obj('Flamingo')
 const obj3 = new Obj('Dartanhã')
 console.log(obj2.nome)
 console.log(obj3.nome)
obj3.exec()