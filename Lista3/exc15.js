function exc15() {
let opcaoSex
let opcaoRate
let mCount = 0
let fCount = 0
let sCount = 0
let nCount = 0
let mulheresSim = 0

    for (i = 0; i < 10; i++) {
        opcaoSex = String(prompt(`Informe seu sexo \n M. Masculino \n F. Feminino`)).toUpperCase
        opcaoRate = String(prompt(`Você gostou? \n S. Sim \n N. Não`)).toUpperCase

        if (opcaoSex == "M") {
            mCount++
        }else if (opcaoSex == "F") {
            fCount++
        }if (opcaoRate == "S") {
            sCount++
        }else if (opcaoRate == "N") {
            nCount++
        }if (opcaoRate == "S" && opcaoSex == "F") {
            mulheresSim++
        }if (opcaoRate == "N" && opcaoSex == "M") {
            homensQtd++
        }if ((opcaoRate != "N") || (opcaoRate != "S") || (opcaoSex != "M") || (opcaoSex != "F")){
            i--
            alert(`Resposta e ou Sexo invalido(s)`)
        }
    }
}