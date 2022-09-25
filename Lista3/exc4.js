function exc4() {
    // tabuada do 5
    // com estrutura de repetição - while
    let numero
    numero = Number(prompt(`Informe um numero:`))
    let contador = 0
    while (contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}`)
        contador++
    }
}