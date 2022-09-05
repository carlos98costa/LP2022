function calcular() {
    let idade = parseInt(document.getElementById("idade").value)
    let peso = parseFloat(document.getElementById("peso").value)
    let erro = false

    if (idade < 0 || peso < 0) {
        erro = true
    }else if (peso < 0 ) {
        erro = true
    }

    if (idade >0 && idade < 20 && peso > 0 && peso <= 60) {
        grupo = 9
    }else if (idade > 0 && idade < 20 && peso > 0 && peso > 60 && peso <= 90) {
        grupo = 8
    }else if (idade > 0 && idade < 20 && peso > 0 && peso > 90) {
        grupo = 7
    }else if (idade > 0 && idade >= 20 && idade <= 50 && peso > 0 && peso <= 60) {
        grupo = 6
    }else if (idade > 0 && idade >= 20 && idade <= 50 && peso > 0 && peso > 60 && peso <= 90) {
        grupo = 5
    }else if (idade > 0 && idade >= 20 && idade <= 50 && peso > 0 && peso > 90) {
        grupo = 4
    }else if ( idade > 0 && idade > 50 && peso > 0 && peso <= 60) {
        grupo = 3
    }else if (idade > 0 && idade > 50 && peso > 0 && peso > 60 && peso <= 90) {
        grupo = 2
    }else if (idade > 0 && idade > 50 && peso > 0 && peso > 90) {
        grupo = 1
    }else if (erro == true) {
        grupo = "Dados invalidos!"
    }

    document.getElementById("resultado").innerHTML = 
    `O grupo será: ${grupo}`
}