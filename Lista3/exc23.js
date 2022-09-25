function exc23() {
    let opcao
    let salario

    do {
        opcao = Number(prompt(`Escolha uma opção \n 1. Novo salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair`))
        switch (opcao) {
            case 1: let novo
                salario = Number(prompt(`Informe o salario`))
                if (salario >= 0 && salario < 2100) {
                    novo = salario * 1.15
                }else if (salario >= 0 && salario >= 2100 && salario <= 6000) {
                    novo = salario * 1.1
                }else if ( salario > 6000) {
                    novo = salario * 1.05
                }else {
                    alert(`Salario informado não pode ser negativo`)
                    break
                }
                alert(`Novo salario ${novo.toFixed(2)}`)
                break

            case 2:
                salario = Number(prompt(`Informe o salario`))
                ferias = salario * 1.33

                alert(`Ferias ${ferias.toFixed(2)}`)
                break
            case 3:
                salario = Number(prompt(`Informe o salario`))
                if (salario >= 0) {
                    let meses = Number(prompt(`Informe meses trabalhados`))
                    if (meses >= 0 && meses <= 12) {
                        let decimoTerceiro = (salario * (meses / 12))
                        alert(`13° será ${decimoTerceiro}`)
                    }else {
                        alert(`Meses não podem ser negativos ou maior que 12`)
                    }
                    break
                }else {
                    alert(`Salario informado não pode ser negativo`)
                    break
                }
            case 4:
                alert('Obrigado por utilizar nosso sistema')
                break
            default:
                alert(`Opção invalida, tente novamente`)
        }

    } while (opcao != 4);
}
    
