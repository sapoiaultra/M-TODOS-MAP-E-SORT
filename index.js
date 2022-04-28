// Vamos olhar um método muito usado nos arrays. O método map.

let nomes = ["João", "Ana", "Carlos", "Antônio", "Joana", "Maria", "Francisco", "Marta"];

//pretendemos ter um novo array com o número de caracteres de todos os elementos da coleção nomes
let tamanhos = nomes.map(nome => nome.length);
console.table(tamanhos);

//ou por exemplo, pretendemos fazer operações matemáticas com um array de valores numéricos
let valores = [10, 25, 32, 45, 60, 67, 89, 122];
let novo = valores.map(n => Math.sqrt(n))
console.table(novo);

//podemos também usar o map para alterar os valores do próprio array
console.table(nomes.map(nome => {
  return `Olá ${nome}`;
}));

//Se quisermos ordenar um array, usamos o método sort
nomes.sort();
console.table(nomes);

//Para ordenar números temos de comparar valores
function comparar(a,b){
  if(a > b) return 1;
  if(a == b) return 0;
  if(a < b) return -1;
}

console.table(valores.sort((a,b)=>{
  console.log(`${a} compara com ${b}`);
  return a - b;
}));