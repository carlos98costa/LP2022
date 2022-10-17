function prova1() {
    let i = 1
    let opcao
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0
    do {
        opcao = Number(prompt(`${i}° voto.\n Escolha uma opção \n 1. Entrega apenas pelo Teams \n 2. Entrega apenas em papel \n 3. Entrega apenas pelo WhatsApp \n 4. Entrega apenas por email. \n 5. Tanto faz \n 0. Finaliza o programa`))
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
            case 0:
                alert(`O programa foi finalizado com sucesso!`)
                break
            default:
                alert(`Opção invalida, tente novamente`)
                i--
                break
        }
    } while (opcao != 0);
    let lista = [count1, count2, count3, count4, count5]
    console.log(`A opção 1 recebeu ${count1} voto(s)`)
    console.log(`A opção 2 recebeu ${count2} voto(s)`)
    console.log(`A opção 3 recebeu ${count3} voto(s)`)
    console.log(`A opção 4 recebeu ${count4} voto(s)`)
    console.log(`A opção 5 recebeu ${count5} voto(s)`)
    console.log(`A % de votos Tanto Faz relação ao total é ${((count5 / i)*100).toFixed(2)}%`)
    console.log(`Votos em ordem crescente ${lista.sort()}`)
    let lista1 = [33, 32, 23, 14, 5, 18,]
    console.log(lista1.sort())
}