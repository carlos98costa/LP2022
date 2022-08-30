function calcular() {
    let saldoMedio = parseFloat(document.getElementById("saldoMedio").value)
    if (saldoMedio > 400) {
        credito = saldoMedio * 0.3
        document.getElementById("credito").innerHTML = 
        `O credito do usuario sera R$ ${credito.toFixed(2)}`
    }else if (saldoMedio <= 400 && saldoMedio > 300) {
        credito = saldoMedio * 0.25
        document.getElementById("credito").innerHTML = 
        `O credito do usuario sera R$ ${credito.toFixed(2)}`
    }else if (saldoMedio <= 300 && saldoMedio > 200) {
        credito = saldoMedio * 0.2
        document.getElementById("credito").innerHTML = 
        `O credito do usuario sera R$ ${credito.toFixed(2)}`
    }else {
        credito = saldoMedio * 0.1
        document.getElementById("credito").innerHTML = 
        `O credito do usuario sera R$ ${credito.toFixed(2)}`
    }
}