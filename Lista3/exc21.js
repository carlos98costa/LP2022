function exc21() {
    let i = 1
    let opcao
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0
    let count6 = 0
    do {
        opcao = Number(prompt(`${i}° eleitor.\n Escolha uma opção \n 1. Candidato 1 \n 2. Candidato 2 \n 3. Candidato 3 \n 4. Candidato 4 \n 5. Voto Nulo \n 6. Voto em branco \n 0. Finaliza o programa`))
        i++
        switch (opcao) {
            case 1:
                count1++
                break
            case 2:
                count2++
                break
            case 3:
                count3++
                break
            case 4:
                count4++
                break
            case 5:
                count5++
                break
            case 6:
                count6++
                break
            case 0:
                alert(`O programa foi finalizado com sucesso!`)
                break
            default:
                alert(`Opção invalida, tente novamente`)
                i--
                break
        }
    } while (opcao != 0);
    console.log(`O candidato 1 recebeu ${count1} voto(s)`)
    console.log(`O candidato 2 recebeu ${count2} voto(s)`)
    console.log(`O candidato 3 recebeu ${count3} voto(s)`)
    console.log(`O candidato 4 recebeu ${count4} voto(s)`)
    console.log(`O total de votos nulos foi ${count5} voto(s)`)
    console.log(`O total de votos em branco foi ${count6} voto(s)`)
    console.log(`A % de votos nulos em relação ao total é ${((count5 / i)*100).toFixed(2)}%`)
    console.log(`A % de votos brancos em relação ao total é ${((count6 / i)*100).toFixed(2)}%`)
}