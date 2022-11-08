function exc1() {
    let matriz = []
    gerar(matriz)
    console.log(matriz)
    checar(matriz)
    console.log(checar(matriz))
}

function gerar(matriz) {
    for (let i=0; i<3; i++) {
        matriz[i] = []
        for (let k=0; k<5; k++) {
            matriz[i][k] = parseInt((Math.random()*30))
        }
    }
}

function checar(matriz) {
    let count = 0
    for (let i=0; i<3; i++) {
        for (let k=0; k<5; k++) {
            if (matriz[i][k] >= 15 && matriz[i][k] <= 20) {
                count++
            }
        }
    }
    return count
}
