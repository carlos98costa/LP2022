function exc4() {
    let matriz = []
    let vetor = []
    gerar4(matriz, vetor)
    console.log(media4(matriz, vetor))
    console.log(`A media da classe foi ${mediaClasse4(matriz)}`)
}

function gerar4(matriz, vetor){
    for (let i=0; i<5; i++) {
        vetor.push(prompt(`Informe o nome do aluno:`))
        matriz[i] = []
        for (let k=0; k<2; k++) {
            matriz[i][k] = parseInt((Math.random()*10))
        }
    }
}

function media4(matriz, vetor) {
    let soma
    for (let i=0; i<5; i++) {
        soma = 0
        for (let k=0; k<2; k++) {
            soma += matriz[i][k]
        }
        console.log(`O aluno ${vetor[i]} teve a media ${soma/2}`)
        if ((soma/2) >= 6) {
            console.log(`O aluno ${vetor[i]} foi Aprovado!`)
        }
        else if((soma/2) >=3) {
            console.log(`O aluno ${vetor[i]} ficou de Recuperação`)
        }
        else{
            console.log(`O aluno ${vetor[i]} foi Reprovado!`)
        }

    }
}

function mediaClasse4(matriz) {
    let soma = 0
    for (let i=0; i<5; i++) {
        for (let k=0; k<2; k++) {
            soma += matriz[i][k]
        }
    }
    return soma/10
}