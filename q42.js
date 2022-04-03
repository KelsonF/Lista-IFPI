import { input,print } from "./io_utils.js";


function main(){

  const X1 = Number(input("Insira o x do primeiro ponto: "));
  const Y1 = Number(input("Insira o y do primeiro ponto: "));
  const X2 = Number(input("Insira o x do segundo ponto: "));
  const Y2 = Number(input("Insira o y do segundo ponto: "));

  const distance = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2)
  
  print(`Distância entre os pontos: ${distance}`);

}
main()