//Leia o valor do raio de uma circunferência, 
//calcule e escreva seu comprimento.(c = 2 * p * r)

import { print,input } from "./io_utils.js";

function main(){
    const pi = Number(3.14)
    const raio = Number(input("Digite o valor do raio: "))
    const comprimento = (2 * pi * raio).toFixed(2)
  
    
    print(comprimento)
}

main()