function calcular() {
    let preco = parseFloat(document.getElementById("preco").value)
    let codigo = parseInt(document.getElementById("codigo").value)

    if (codigo == 1) {
        procedencia = "Sul"
    }else if (codigo == 2) {
        procedencia = "Norte"
    }else if (codigo == 3) {
        procedencia = "Leste"
    }else if(codigo == 4) {
        procedencia = "Oeste"
    }else if (codigo == 5 || codigo == 6 ) {
        procedencia = "Nordeste"
    }else if (codigo == 7 || codigo == 8 || codigo == 9) {
        procedencia = "Sudeste"
    }else if (codigo >= 10 && codigo <= 20) {
        procedencia = "Centro-oeste"
    }else if (codigo >= 21 && codigo <= 30) {
        procedencia = "Noroeste"
    }else {
        procedencia = "Codigo invalido. Informe um codigo entre 1 e 30!"
    }
    
    document.getElementById("resultado").innerHTML = 
    `A procedencia do produto é: ${procedencia}`
}