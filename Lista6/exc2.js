function exc2() {
    let matriz = []
    leitura(matriz)
    console.log(matriz)
    console.log(`Qtde de elementos entre 15 e 20 é = ${contaIntervalo(matriz)}`)
    contaPares(matriz)
}

function leitura(matriz) {
    for(let i=0;i<2;i++){
        matriz[i] = [] // cria um vetor na posição i de matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt(Math.random() * 30)
        }
    }
}

function contaIntervalo(matriz){
    let conta = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20) {
                conta++
            }
        }
    }
    return conta
}

function contaPares(matriz){
    let contaPar = 0
    let somaPar = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] % 2 == 0) {
                contaPar++
                somaPar = somaPar + matriz[i][j]
            }
        }
    }
    return console.log(`A media dos valores pares é = ${somaPar / contaPar}`)
}