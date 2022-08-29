function calcular() {
    let horas = parseFloat(document.getElementById("horas").value)
    let minutos = parseFloat(document.getElementById("minutos").value)
    let horasToMin = horas * 60
    let totalMin = horasToMin + minutos
    let segundos = totalMin * 60
    document.getElementById("resultado").innerHTML = 
    `A ${horas} hora(s) digitada convertida em minutos é ${horasToMin}. <br>
    O total dos ${horasToMin} + ${minutos} minutos é ${totalMin}. <br>
    O total de ${totalMin} minutos convertidos em segundos é ${segundos}`
}