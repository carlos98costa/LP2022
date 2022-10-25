function exc8() {
    let maior = 0
    let menor = 0
    let nomeMaior
    let nomeMenor
    let somaVeic = 0
    let somaACID = 0
    let porcentVeic = 0
    let porcentAcid = 0
    let vetor = []
    for (i = 1; i < 3; i++) {
        estado = {
            nome: prompt(`Informe o nome do ${i}° estado:`),
            nVeic: Number(prompt(`Informe o n° de veiculos do ${i}° estado:`)),
            nAcid: Number(prompt(`Informe o n° de acidentes do ${i}° estado:`))
        }
        
        if (i == 1) {
            maior = estado.nAcid
            menor = estado.nAcid
            nomeMaior = estado.nome
            nomeMenor = estado.nome
        }
        if (maior < estado.nAcid) {
            maior = estado.nAcid
            nomeMaior = estado.nome
        }
        if (menor > estado.nAcid) {
            menor = estado.nAcid
            nomeMenor = estado.nome
        }
        somaVeic = somaVeic + estado.nVeic
        somaACID = somaACID + estado.nAcid
        vetor.push(estado)
    }
    console.log(`O maior indice de acidentes é ${maior} no estado ${nomeMaior.toUpperCase()}`)
    console.log(`O menor indice de acidentes é ${menor} no estado ${nomeMenor.toUpperCase()}`)
    console.log(vetor)
    for (i = 0; i < 2; i++) {
        nomeEstado = vetor[i].nome
        porcentVeic = vetor[i].nVeic / somaVeic * 100
        porcentAcid = vetor[i].nAcid / somaACID * 100
        console.log(`O percentual de veiculos no estado ${nomeEstado.toUpperCase()} é ${porcentVeic.toFixed(2)}%`)
        console.log(`O percentual de acidentes no estado ${nomeEstado.toUpperCase()} é ${porcentAcid.toFixed(2)}%`)
    }

}