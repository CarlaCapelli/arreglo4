let nombre: string[] = new Array(2);
let numero: number[] = new Array(3);

for (let i: number = 0; i < 2; i++) {
  nombre[i] = String(prompt("ingerse un nombre en la posicion ", i));
  console.log("el nombre en la posicion ", i, "es ", nombre[i]);
}
for (let i: number = 0; i < 3; i++) {
  numero[i] = Number(prompt("ingrese un numero en la posicion", i));
  console.log("el numero en la posicion", i, "es ", numero[i]);
}
