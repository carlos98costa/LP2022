function prova2() {
    let vetor = []
    let vetor1 = []
    pessoa(vetor)
    imoveis(vetor, vetor1)

    
}

function pessoa(vetor) {
    let listaPessoas = []
    for(let i=0; i<2; i++) {
        let pessoa = {
            nome: prompt(`Informe o nome da ${i+1}º pessoa:`),
            rg: Number(prompt(`Informe o RG:`)),
            cpf: Number(prompt(`Informe o CPF:`)),
        }
        vetor.push(pessoa)
    }
    console.log(vetor)
}

function imoveis(vetor, vetor1) {
    for(let i=0; i<2; i++) {
        let cpfDono = Number(prompt(`Informe o CPF do dono ${i+1}`))
        if(cpfDono == vetor[i].cpf) {
            console.log(`Tem na lista`)
            let imovel = {
                cdg: prompt(`Informe o codigo do imovel:`),
                endereco: Number(prompt(`Informe o Endereço:`)),
                tamanho: Number(prompt(`Informe o tamanho:`)),
                tipo: Number(prompt(`Informe o tipo:`)),
                valor: Number(prompt(`Informe o valor:`)),
                cpf: cpfDono
            }
            vetor1.push(imovel)
        }else{
            console.log(`Cliente não cadastrado`)
        }
    }
}



