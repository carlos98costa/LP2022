function exc3() {
    let pessoas = []
    let mediaIdades = 0
    for (i = 1; i<3; i++) {
        dados = {
            sexo: prompt(`Informe o sexo da ${i}ª pessoa:\n M. Masculino \n F. Feminino `),
            altura: Number(prompt(`Informe a altura da ${i}ª pessoa:}`)),
            peso: Number(prompt(`Informe o peso da ${i}ª pessoa:}`)),
            olhos: prompt(`Informe a cor dos olhos da ${i}ª pessoa:\n A. Azuis \n V. Verdes \n C. Castanhos `)
        }
        pessoas.push(dados)
        
    }
    console.log(pessoas)
}