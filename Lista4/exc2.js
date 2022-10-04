function exc2() {
    var vetor = []
    for (let i = 0; i < 7; i++) {
        vetor.push(Number(prompt(`Informe o ${i}° numero: `)))
    }

    //process
    let multiplos2 = []
    let multiplos3 = []
    let multiplos23= []
    for (let i = 0; i < 7; i++) {
        if (vetor[i] % 2 == 0) {
            multiplos2.push(vetor[i])
        }
        if (vetor[i] % 3 == 0) {
            multiplos3.push(vetor[i])
        }
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0) {
            multiplos23.push(vetor[i])
        }
    }
    console.log(`Os numeros multiplos de 2 são ${multiplos2}`)
    console.log(`Os numeros multiplos de 3 são ${multiplos3}`)
    console.log(`Os numeros multiplos de 2 e 3 são ${multiplos23}`)
}