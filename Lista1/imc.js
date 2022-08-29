function calcular() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso / (altura * altura)
    if (imc <= 18.5) {
        document.getElementById("imc").innerHTML = (`Você está ABAIXO do peso! Seu IMC é ${imc.toFixed(2)}`)
    }else if (imc > 18.5 && imc <= 24.9){
        document.getElementById("imc").innerHTML = (`Você está no peso NORMAL! Seu IMC é ${imc.toFixed(2)}`)
    }else if (imc > 24.9 && imc <= 30){
        document.getElementById("imc").innerHTML = (`Você está com SOBREPESO! Seu IMC é ${imc.toFixed(2)}`)
    }else if (imc > 30){
        document.getElementById("imc").innerHTML = (`Você está com OBESIDADE! Seu IMC é ${imc.toFixed(2)}`)
    }
}
