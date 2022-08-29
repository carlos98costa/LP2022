function calcular() {
    const date = new Date();
    const currentYear = date.getFullYear();
    let anoNasc = parseFloat(document.getElementById("anoNasc").value)
    document.getElementById("idadeA").innerHTML = 
    `A idade da pessoa em anos é ${currentYear - anoNasc}`
}