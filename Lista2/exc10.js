function calcular() {
    let custoFab = parseFloat(document.getElementById("custoFab").value)
    if (custoFab <= 12000) {
        resultado = custoFab + (custoFab * 0.05)
        document.getElementById("resultado").innerHTML = 
        `O valor final do carro será R$ ${resultado}`
    }else if (custoFab > 12000 && custoFab <= 25000) {
        resultado = custoFab + (custoFab * 0.1) + (custoFab * 0.15)
        document.getElementById("resultado").innerHTML = 
        `O valor final do carro será R$ ${resultado}`
    }else {
        resultado = custoFab + (custoFab * 0.15) + (custoFab * 0.2)
        document.getElementById("resultado").innerHTML = 
        `O valor final do carro será R$ ${resultado}`
    }
}