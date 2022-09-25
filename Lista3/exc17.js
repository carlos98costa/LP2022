function exc17() {
    let canal, qtdPessoas
    let qtdPesquisadas = 0
    let pessoasCount1 = 0
    let pessoasCount2 = 0
    let pessoasCount3 = 0
    let pessoasCount4 = 0
    do {
        qtdPessoas = Number(prompt(`Informe a quantidade de pessoas assistindo: `))
        canal = Number(prompt(`Informe o canal: \n 4. Canal 4 \n 5. Canal 5 \n 7. Canal 7 \n 12. Canal 12 \n 0. Finalizar programa!`))
        if (canal == 4 || canal == 5 || canal == 7 || canal == 12) {
            qtdPesquisadas = qtdPesquisadas + qtdPessoas
        }
        if (canal == 4) {
            pessoasCount1 = pessoasCount1 + qtdPessoas
        }else if (canal == 5) {
            pessoasCount2 = pessoasCount2 + qtdPessoas
        }else if (canal == 7 ) {
            pessoasCount3 = pessoasCount3 + qtdPessoas
        }else if (canal == 12) { 
            pessoasCount4 = pessoasCount4 + qtdPessoas
        }else if (canal == 0){
            alert(`O programa foi finalizado!`)
        }else {
            alert(`Canal invalido!`)
        }
    } while (canal != 0);
    console.log(`A % de pessoas assistindo o canal 4 é ${((pessoasCount1 / qtdPesquisadas)*100).toFixed(2)}`)
    console.log(`A % de pessoas assistindo o canal 5 é ${((pessoasCount2 / qtdPesquisadas)*100).toFixed(2)}`)
    console.log(`A % de pessoas assistindo o canal 7 é ${((pessoasCount3 / qtdPesquisadas)*100).toFixed(2)}`)
    console.log(`A % de pessoas assistindo o canal 12 é ${((pessoasCount4 / qtdPesquisadas)*100).toFixed(2)}`)
}