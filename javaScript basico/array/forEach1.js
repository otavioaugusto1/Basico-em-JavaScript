const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})
aprovados.forEach(nome => console.log(nome))
// No for each, o indice se localiza no segundo parâmetro passado na função