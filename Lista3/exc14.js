function exc14() {
    let idade
    let opniao
    let otimoCount = 0
    let otimoIdade = 0
    let regularCount = 0
    let bomCount = 0
    
        for (i = 1; i < 16; i++) {
            idade = Number(prompt(`Informe a idade ${i}: `))
            opniao = Number(prompt(`Opnião sobre o filme? \n 3. Otimo \n 2. Bom \n 1. Regular`))
            if (opniao == 3) {
                otimoCount++
                otimoIdade = otimoIdade + idade
            }
            if (opniao == 1) {
                regularCount++
            }
            if (opniao == 2) {
                bomCount++
            }
        }
        console.log(`A resposta 1 é ${(otimoIdade / otimoCount).toFixed(2)}`)
        console.log(`A resposta 2 é ${regularCount}`)
        console.log(`A resposta 3 é ${((bomCount / 10)*100).toFixed(2)}%`)
    }