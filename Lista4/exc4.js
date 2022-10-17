function exc4() {
    var vetor = []
    var cont = 0
    for (var i=1; i <=15; i++) {
        vetor.push(Number(prompt(`Informe o ${i}° numero:` )))
    }
    console.log(vetor)
    for (var i=0; vetor.length; i++) {
        if (vetor[i] == 30) {
            console.log(`Na posição ${i} contem  o numero 30!`)
            cont++
        }
    }
    if (cont == 0) {
        console.log(`Não contem o numero 30 no vetor!`)
    }
}