let nomes = [
  'Julio',
  'Aline',
  'Danilo',
  'Valdir',
  'Ligia',
]

function randomNome(nome) {
  const random = Math.floor(Math.random() * nome.length)
  return nome[random]
}

function imprimeNome(nome) {
  console.log(
    `\n Olá ${randomNome(nome)} \n`
  )
}

for (let index = 0; index < nomes.length; index++) {
  imprimeNome(nomes)
}