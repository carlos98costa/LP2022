function exc16() {
    let idade
    let idadeQtd = 0
    let idadeSoma = 0
    do {
        idade = Number(prompt(`Informe a idade: \n 0 para finalizar!`))
        idadeQtd++
        idadeSoma = idadeSoma + idade
    } while (idade != 0);
    console.log(`A media de idade entre os entrevistados é ${(idadeSoma / idadeQtd).toFixed(2)}`)
}