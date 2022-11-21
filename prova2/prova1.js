    function prova1() {
        let matriz = []
        let vetor = []
        leitura(matriz, vetor)
        mediaNotas(matriz, vetor)
        mediaPorSla(matriz, vetor)
        console.log(matriz)
        

    }

    function leitura(matriz, vetor) {
        for(let i=0;i<4;i++){
            matriz[i] = [] // cria um vetor na posição i de matriz
            for(let j=0;j<5;j++){
                matriz[i][j] = parseInt(Math.random() * 11)
            }
        }
        let listaCarros = ['Macan', '911', 'Cayenne', 'Panamera', 'Taycan', '718', 'Coupê' ]
        for(let w=0;w<4;w++){
            vetor[w] = [listaCarros[w]] // cria um vetor na posição i de matriz
            console.log(vetor[w])
            for(let z=0;z<1;z++){
                vetor[w][z] = vetor[w][z]
            }
        }
        
    }

    function mediaNotas(matriz, vetor) {

        let mediaNotasCarro = 0
        for(let i=0;i<4;i++){
            let media = (matriz[i][0] + matriz[i][1] + matriz[i][2] + matriz[i][3] + matriz[i][4]) / 5
            mediaNotasCarro += media

            let carro = `O carro ${vetor[i]} teve a media ${media}`
            console.log(carro)
        }
    }

    function mediaPorSla(matriz, vetor) {
        for(let i=0;i<4;i++){ // 5 alunos
            matriz[i] = []
            for(let j=0;j<5;j++){ // 2 notas
                carroNotas = matriz[j]
                console.log(carroNotas)
            }
        }
    }
    prova1()


    for(let j=0;j<5;j++){
        let menorNota = 0
        let menorNomeNota = ''
        //notasCarros = matriz[j]
        console.log(matriz[0][j])
        console.log(matriz[1][j])
        console.log(matriz[2][j])
        console.log(matriz[3][j])
        if(matriz[j] > 0) {
            console.log('boa')
        }
    }