function exc7() {
    var numeros = []
    var contNeg = 0
    var somaPos = 0
    for (let i = 0; i<10; i++) {
        numeros.push(Number(prompt(`Informe um numero: `)))
    }
    for (let i=0; i<10; i++) {
        if(numeros[i] < 0 ) {
            contNeg++
        }
        if(numeros[i] > 0) {
            somaPos = somaPos + numeros[i]
        }
    }
    console.log(`Lista de numeros ${numeros}`)
    console.log(`Nessa lista contem ${contNeg} numeros negativos, e a soma dos positivos é ${somaPos}`)
}