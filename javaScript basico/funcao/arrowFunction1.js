// sem arrow function
let dobro = function (valor){
    return 2 * valor
}
console.log(dobro(4))


//com arrow function
dobro = (a) => {
    return 2 * a
}

// simplificando mais ainda
dobro= a => 2 * a // retorno implícito


let ola = () => {
    return 'Olá'
}

ola = () => 'olá'