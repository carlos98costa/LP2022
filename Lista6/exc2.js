function exc2() {
    let matriz = []
    gerar2(matriz)
    console.log(checar2(matriz))
    console.log(pares2(matriz))
}

function gerar2(matriz) {
    for (let i=0; i<3; i++) {
        matriz[i] = []
        for (let k=0; k<4; k++) {
            matriz[i][k] = parseInt((Math.random()*30))
        }
    }
}

function checar2(matriz) {
    let count1 = 0
    let elementos = []
    for (let i=0; i<2; i++) {
        for (let k=0; k<4; k++) {
            if (matriz[i][k] >= 12 && matriz[i][k] <= 20) {
                count1++
                elementos.push(matriz[i][k])
            }
        }
    }
    console.log(elementos)
    return count1
}

function pares2(matriz) {
    let countPar = 0
    let somaPar = 0
    for (let i=0; i<2; i++) {
        for (let k=0; k<4; k++) {
            if (matriz[i][k] % 2 == 0) {
                somaPar = somaPar + matriz[i][k]
                countPar++
                
            }
        }
    }
    return (somaPar/countPar)

}