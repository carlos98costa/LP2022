function exc3() {
    let matriz = []
    leitura(matriz)
    console.log(matriz)
    maiorMenor(matriz)
}

function leitura(matriz) {
    for(let i=0;i<6;i++){
        matriz[i] = [] // cria um vetor na posição i de matriz
        for(let j=0;j<3;j++){
            matriz[i][j] = parseInt(Math.random() * 30)
        }
    }
}

function maiorMenor(matriz) {
    let maior = matriz[0][0]
    let posLM = 0
    let posCM = 0
    let menor = matriz[0][0]
    let posLm = 0
    let posCm = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (matriz[i][j] >= maior) {
                maior = matriz[i][j]
                posLM = [i]
                posCM = [j]
            }
            if (matriz[i][j] <= menor) {
                menor = matriz[i][j]
                posLm = [i]
                posCm = [j]
            }
        }
    }
    return console.log(`O maior elemento da matriz é ${maior}, esta na posição L = ${posLM} C = ${posCM} \n
    O menor elemento da matriz é ${menor}, esta na posição L = ${posLm} C = ${posCm}`)
}