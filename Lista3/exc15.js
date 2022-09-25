function exc15() {
let opcaoSex
let opcaoRate
let mCount = 0
let fCount = 0
let sCount = 0
let nCount = 0
let mulheresSim = 0
let homensQtd = 0

    for (i = 1; i < 11; i++) {
        opcaoSex = String(prompt(`Informe o sexo ${i} \n M. Masculino \n F. Feminino`)).toUpperCase()
        opcaoRate = String(prompt(`Você gostou? ${i} \n S. Sim \n N. Não`)).toUpperCase()
        if (opcaoSex == "M") {
            mCount++
        }else if (opcaoSex == "F") {
            fCount++
        }
        if (opcaoRate == "S") {
            sCount++
        }else if (opcaoRate == "N") {
            nCount++
        }
        if (opcaoRate == "S" && opcaoSex == "F") {
            mulheresSim++
        }
        if (opcaoRate == "N" && opcaoSex == "M") {
            homensQtd++
        }
    }
    console.log(`O numero de pessoas que responderam sim é ${sCount}`)
    console.log(`O numero de pessoas que responderam não é ${nCount}`)
    console.log(`O numero de mulheres que responderam sim é ${mulheresSim}`)
    console.log(`A % de homens que responderam não entre todos os homens é ${((homensQtd / mCount)*100).toFixed(2)}%`)
}