function exc4() {
    let matriz = []
    let nomes = []
    leitura(matriz, nomes)
    console.log(matriz)
    console.log(nomes)
    media(matriz, nomes)

}

function geraStringAleatoria() {
    var nomeAleatorio = ''
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 6; i++) {
        nomeAleatorio += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return nomeAleatorio
}

function leitura(matriz, nomes) {
    for(let i=0;i<15;i++){
        matriz[i] = [] // cria um vetor na posição i de matriz
        for(let j=0;j<5;j++){
            matriz[i][j] = parseInt(Math.random() * 11)
        }
    }
    for(let w=0;w<15;w++){
        nomes[w] = [] // cria um vetor na posição i de matriz
        for(let z=0;z<1;z++){
            nomes[w][z] = geraStringAleatoria()
        }
    }
    
}

function media(matriz, nomes) {
    for(let i=0;i<15;i++){
        let media = (matriz[i][0] + matriz[i][1] + matriz[i][2] + matriz[i][3] + matriz[i][4]) / 5
        if (media >=6) {
            situacao = 'Aprovado'
        }else if(media > 3 && media < 6) {
            situacao = 'Exame'
        }else {
            situacao = 'Reprovado'
        }
        let aluno = `O aluno ${nomes[i]} teve a media ${media}, portanto está ${situacao} por notas!`
        console.log(aluno)
    }
}
