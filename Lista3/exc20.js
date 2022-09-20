function exc20() {
    let opcao
    let nota1, peso1
    let nota2, peso2
    let nota3, peso3
    let mediaPonderada
    do {
        opcao = Number(prompt(`Escolha uma opção \n 1. Média aritmetica \n 2. Média ponderada \n 3. Sair`))
        switch (opcao) {
            case 1: let media
                nota1 = Number(prompt(`Informe a nota 1: `))
                nota2 = Number(prompt(`Informe a nota 2: `))

                if (nota1, nota2>= 0) {

                    media = (nota1 + nota2) / 2
                }else {
                    alert(`Notas não podem ser negativas`)
                    break
                }
                alert(`Media aritmetica ${media}`)
                break

            case 2:
                nota1 = Number(prompt(`Informe a nota 1: `))
                nota2 = Number(prompt(`Informe a nota 2: `))
                nota3 = Number(prompt(`Informe a nota 3: `))
                alert(`Agora informe o peso das notas`)
                peso1 = Number(prompt(`Informe o peso 1: `))
                peso2 = Number(prompt(`Informe o peso 2: `))
                peso3 = Number(prompt(`Informe o peso 3: `))

                if (nota1, nota2, nota3 >= 0 && (peso1, peso2, peso3) >= 1) {
                    mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
                }
                alert(`Media ponderada é  ${mediaPonderada}`)
                break
            case 3:
                alert('Obrigado por utilizar nosso sistema')
                break
            default:
                alert(`Opção invalida, tente novamente`)
                break
        }

    } while (opcao != 4);
}