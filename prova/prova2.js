function prova2() {
    let metragem = parseFloat(document.getElementById("metragem").value)
    let garagens = parseInt(document.getElementById("garagens").value)
    let andar = parseInt(document.getElementById("andar").value)
    let posicaoSol = String(document.getElementById("posicaoSol").value).toUpperCase()
    let precoInicial = 0
    let precoMedio = 0
    let precoFinal = 0
    
    if(metragem >= 0 && metragem <= 80 && garagens == 1) {
        precoInicial = 300000
    }else if(metragem >= 0 && metragem <= 80 && garagens == 2) {
        precoInicial = 320000
    }else if(metragem >= 0 && metragem <= 80 && garagens == 3) {
        precoInicial = 340000
    }else if(metragem >= 0 && metragem > 80 && metragem <= 120 && garagens == 1) {
        precoInicial = 400000
    }else if(metragem >= 0 && metragem > 80 && metragem <= 120 && garagens == 2) {
        precoInicial = 420000
    }else if(metragem >= 0 && metragem > 80 && metragem <= 120 && garagens == 3) {
        precoInicial = 440000
    }else if(metragem >= 0 && metragem > 120 && garagens == 1) {
        precoInicial = 500000
    }else if(metragem >= 0 && metragem > 120 && garagens == 2) {
        precoInicial = 520000
    }else if(metragem >= 0 && metragem > 120 && garagens == 3) {
        precoInicial = 540000
    }
    if(andar == 1) {
        precoMedio = precoInicial + 10000
    }else if(andar == 2) {
        precoMedio = precoInicial + 20000
    }else{
        precoMedio = precoInicial + 30000
    }
    if(posicaoSol == "M") {
        precoFinal = (precoInicial * 0.05) + precoMedio
    }else{
        precoFinal = (precoInicial * 0.08) + precoMedio
    }
    document.getElementById("resultado").innerHTML = 
    `Metragem é : ${metragem} m² <br>
    Nro. de garagens é : ${garagens} <br>
    Andar é: ${andar}º andar <br>
    Posição do sol é: ${posicaoSol}<br>
    O valor total será R$ ${precoFinal.toFixed(2)}`
}