function calcular() {
    let altura = parseFloat(document.getElementById("altura").value)
    let sexo = parseInt(document.getElementById("sexo").value)
    
    if(sexo == 1) {
        pesoIdeal = (72.7 * altura) - 58
    }else {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    document.getElementById("resultado").innerHTML = 
    `O peso ideal é ${pesoIdeal.toFixed(2)}`
}