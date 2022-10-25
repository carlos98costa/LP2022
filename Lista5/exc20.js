function exc20() {
    let listaOrdens = []
    let count = 0
    let somaValores = 0
    let maisCaro = 0
    let nomeCaro
    let descricao
    let dataCaro
    
    do {
        opcao = Number(prompt(`Escolha uma opção \n 0. Nova ordem de serviço \n 9. Finalizar`))
        switch (opcao) {
            case 0:
                ordemServico = {
                    numOrdem: Number(prompt(`Informe o codigo da ordem de serviço`)),
                    dataOS: prompt(`Informe a data do serviço: ex(01/01/2022)`),
                    valor: Number(prompt(`Informe o valor do serviço:`)),
                    tipoServico: prompt(`Informe o serviço realizado:`),
                    cliente: prompt(`Informe o nome do cliente:`)
                }
                if(count == 0) {
                    maisCaro = ordemServico.valor
                    nomeCaro = ordemServico.cliente
                    descricao = ordemServico.tipoServico
                    dataCaro = ordemServico.dataOS
                }
                if (maisCaro < ordemServico.valor) {
                    maisCaro = ordemServico.valor
                    nomeCaro = ordemServico.cliente
                    descricao = ordemServico.tipoServico
                    dataCaro = ordemServico.dataOS
                }
                somaValores = somaValores + ordemServico.valor
                count++
                listaOrdens.push(ordemServico)
                break
            
            case 9:
                alert('Programa finalizado com sucesso!')
                console.log(`Programa finalizado com sucesso!`)
                console.log(`Informações:`)
                console.log(`A media do valores foi R$ ${(somaValores / count).toFixed(2)}`)
                console.log(`O serviço mais caro foi feito para: \n 
                cliente ${nomeCaro} \n Serviço realizado foi ${descricao} \n
                Valor: R$ ${maisCaro} \n
                Data: ${dataCaro}`)




                break
        }
    } while (opcao != 9);
}