function prova1() {
    let matriz = []
    let vetor = []
    dados(vetor)
    criarMatriz(matriz, vetor)
    media(matriz, vetor)
    minNota(matriz, vetor)
    minMedia(matriz)
}


function dados(vetor) {
    for (let i = 0; i < 4; i++) {     
        vetor[i] = prompt(`Digite o nome do carro`)
    }

}

function criarMatriz(matriz, vetor) {
    for (let i = 0; i < 4; i++) {
        matriz[i] = []
        alert(`Informe as notas dos carros:`)                 
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Informe a ${j + 1} nota do carro ${vetor[i]}:`)) 
        }
    }
    console.log(matriz)
}


function media(matriz, vetor) {
    let media = []
    let sumNotas
    let qtdNotas
    for (let i = 0; i < 4; i++) {                   
        sumNotas = 0
        qtdNotas = 0
        for (let j = 0; j < 5; j++) {
            sumNotas += matriz[i][j] 
            qtdNotas++
        }

        media[i] = sumNotas / qtdNotas

        console.log(`Média das notas do ${vetor[i]} = ${media[i]}`)
    }

}

function minNota(matriz, vetor) {
    let menorNota = 0
    let nomeCarro = 0

    menorNota = matriz[0][0]
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 4; i++) {

            if (menorNota > matriz[i][j]) {
                menorNota = matriz[i][j]                                   
                nomeCarro = i
            }

        }
        console.log(`A menor nota do ${j + 1}° tipo de nota é do veiculo ${vetor[nomeCarro]}, a nota é : ${menorNota}`)
    }
}

function minMedia(matriz) {
    let media = []
    let minMedia
    let somaNotas
    let qtdAvaliacoes
    let avaliacao = 0

    for (let j = 0; j < 5; j++) {
        menorNota = 0
        somaNotas = 0
        qtdAvaliacoes = 0

        for (let i = 0; i < 4; i++) {
            somaNotas += matriz[i][j] 
            qtdAvaliacoes++

        }
        media[j] = somaNotas / qtdAvaliacoes

    }
    minMedia = media[0]

    for (let j = 0; j < 5; j++) {
        if (media[j] < minMedia) {
            minMedia = media[j]   
            avalicao = j
        }
    }

    console.log(`A menor media é da avaliação ${avaliacao + 1}com a media: ${minMedia} `)
}