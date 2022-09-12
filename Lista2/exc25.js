function calcular() {
    let horasExtras = parseInt(document.getElementById("horasExtras").value)
    let horasFaltas = parseInt(document.getElementById("horasFaltas").value)

    horas = horasExtras - (2/3 * (horasFaltas))
    horasToMin = horas * 60

    if (horasToMin >= 2400) {
        premio = 500
    }else if (horasToMin >= 1800 && horasToMin < 2400) {
        premio = 400
    }else if (horasToMin >= 1200 && horasToMin < 1800) {
        premio = 300
    }else if (horasToMin >= 600 && horasToMin < 1200) {
        premio = 200
    }else {
        premio = 100
    }

    if(horasToMin < 0 ) {
        document.getElementById("resultado").innerHTML = 
        `O funcionario não tem direito ao bonus`
    }else {
        document.getElementById("resultado").innerHTML = 
        `O funcionario receberá um bonus de R$ ${premio}`
    }
}