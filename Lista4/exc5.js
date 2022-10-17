function exc5() {
    var logica = []
    var linguagem = []
    var ambas = []
    
    for (var i=1; i<=10; i++) {
        logica.push(Number(prompt(`Informe a ${i}º matricula de logica: `)))
    }
    for (var k=1; k<=8; k++) {
        linguagem.push(Number(prompt(`Informe a ${k}º matricula de linguagem: `)))
    }
    for (var k=1; k<=10; k++) {
        for (var i=1; i<=8; i++) {
            if (logica[i] == linguagem[k]) {
                ambas.push(logica[i])
            }
        }
    }
    if (ambas.length == 0) {
        console.log(`Não existem alunos que façam as duas disciplinas`)
    }else{
        console.log(`Alunos que fazem ambas disciplinas ${ambas}`)
    }
}