function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Area acima do permitido ${area}m2.`)
    }else{
        return area
    }
}
console.log(area(4,3))
console.log(area(2))
console.log(area())
console.log(area(1,2,3,4,5,6))
console.log(area(5,5))