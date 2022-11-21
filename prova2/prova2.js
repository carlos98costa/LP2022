function prova2() {
    let vetor_pessoas = []
    let vetor_imoveis = []
    dados(vetor_pessoas, vetor_imoveis)
    rg(vetor_pessoas, vetor_imoveis)
    imovelCaro(vetor_imoveis)

}


function dados(pessoas, imoveis) {

    for (let i = 0; i < 10; i++) { 

        let objPessoas = {
            nome: prompt(`Informe o seu nome:`),
            rg: Number(prompt(`Digite seu RG:`)),
            cpf: Number(prompt(`Digite seu CPF:`))

        }
        pessoas.push(objPessoas)

        // CADASTRO IMOVEIS

        let objImoveis = {
            cdg: Number(prompt(`Informe o CODIGO do imóvel:`)),
            endereco: prompt(`Informe o endereço:`),
            tipo: prompt(`Informe o tipo :`),
            valor: Number(prompt(`Informe o valor do imóvel R$ `)),
            cpfDono: Number(prompt(`Informe o cpf :`))
        }
        if (objImoveis.cpfDono == pessoas[i].cpf) {
            imoveis.push(objImoveis)
        }
        else {
            alert(`CPF Não cadastrado!`)
        }
    }

    console.log(pessoas)
    console.log(imoveis)
}



function rg(vetor_pessoas, vetor_imoveis) {
    let num = 0
    let rg = 0
    let soma = 0
    do {
        num = Number(prompt(`Digite 1 - para ver o valor em imóveis e 0 - para sair do programa`))

        if (num == 1) {
            rg = Number(prompt(`Digite seu RG:`))
            soma = 0

            for (let i = 0; i < 10; i++) { 
                if (rg == vetor_pessoas[i].rg) {
                    if (vetor_pessoas[i].cpf == vetor_imoveis[i].cpfDono) {
                        soma += vetor_imoveis[i].valor
                    }
                }
            }

            console.log(`Esta pessoa possui o valor total em imóvel de: ${soma}`)
        }

    } while (num != 0);
}



function imovelCaro(vetor_imoveis) {
    let mais_caro = 0
    let cpf = 0
    mais_caro = vetor_imoveis[0].valor
    for (let i = 0; i < 10; i++) {

        if (mais_caro < vetor_imoveis[i].valor) {       
            mais_caro = vetor_imoveis[i].valor
            cpf = i
        }
    }
    console.log(`O cpf da pessoa que possui o imóvel mais caro é : ${vetor_imoveis[cpf].cpfDono}\nE o valor do imóvel é de: ${mais_caro}`)
}