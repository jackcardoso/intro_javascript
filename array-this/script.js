const alunos = [
    {
        nome: 'Mario',
        nota: 6,
        turma: '1C'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Mouro',
        nota: 3,
        turma: '2C'
    }
];

function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i = 0; i < arr.length; i++){

        const{nota, nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));