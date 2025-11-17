const media = 6;
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

alunos.forEach((aluno) => {
  if (aluno.note >= media) {
    console.log(`O aluno ${aluno.name} foi aprovado com nota ${aluno.note}`);
  } else {
    console.log(`O aluno ${aluno.name} foi reprovado com nota ${aluno.note}`);
  }
});

console.log(alunos);

//

const senhaUser = 123456;
const senhaDigitada = 1234567;

if (senhaDigitada === senhaUser) {
  console.log("Acesso Permitido");
} else {
  console.log("Acesso Negado");
}
