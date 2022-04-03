//Leia o valor do raio de uma esfera,
// calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import { print,input } from "./io_utils.js";

function main(){
    const pi = Number(3.14)
    const raio = Number(input("Digite o valor do raio: "))
    const volume = (4 * pi * raio**3 / 3).toFixed(2)
  
    
    print(volume)
}

main()