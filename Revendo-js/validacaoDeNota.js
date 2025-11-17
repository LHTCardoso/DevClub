const alunos = [
  {
    name: "Luiz",
    note: 10,
  },
  {
    name: "Joao",
    note: 5,
  },
  {
    name: "Maria",
    note: 7,
  },
  {
    name: "Pedro",
    note: 4,
  },
  {
    name: "Ana",
    note: 8,
  },
];

alunos.forEach(aluno => {
  if (aluno.note >= 6) {
    console.log(`O aluno ${aluno.name} foi aprovado com nota ${aluno.note}`);
  } else {
    console.log(`O aluno ${aluno.name} foi reprovado com nota ${aluno.note}`);
  }
});

console.log(alunos);
