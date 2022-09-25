function exc22() {
    let i = 1
    let idade, altura
    let count1 = 0
    let countAltura = 0
    do {
        idade = Number(prompt(`Informe a idade ${i} \n Para finalizar o programa informe um valor menor ou igual a 0`))
        if (idade > 0) {
            altura = Number(prompt(`Informe a altura ${i}`))
        }
        i++
        if (idade > 50) {
            count1++
            countAltura = countAltura + altura
        }
    } while (idade > 0);
    console.log(`A media da altura das pessoas com mais de 50 anos é  ${(countAltura / count1).toFixed(2)} m`)
}