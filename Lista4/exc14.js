function exc14() {
    var nome = []
    var prova1 = []
    var prova2 = []
    var calcMedia = 0
    var media = []
    for (let i = 0; i<3; i++) {
        nome.push(prompt(`Informe o nome do ${i+1}° aluno: `))
        prova1.push(Number(prompt(`Informe a nota da prova 1 do ${i+1}° aluno: `)))
        prova2.push(Number(prompt(`Informe a nota da prova 2 do ${i+1}° aluno: `)))
        calcMedia = (prova1[i] + prova2[i]) / 2
        media.push(calcMedia)
    }
    for (let i = 0; i<3; i++) {
        console.log(`Nome: ${nome[i]} | Prova1: ${prova1[i]} | Prova2: ${prova2[i]} | Média: ${media[i]}`)
    }
}