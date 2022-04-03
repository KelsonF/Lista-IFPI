//Leia três números inteiros e positivos (A, B, C) e 
//calcule a seguinte expressão:

import { input,print } from "./io_utils.js";

function main(){
    const A = Number(input("Digite um numero inteiro: "))
    const B = Number(input("Digite um numero inteiro: "))
    const C = Number(input("Digite um numero inteiro: "))

    const R = (A + B)**2 
    const S = (B + C)**2

    const expressao = (R + S)/2

    print("O valor da expressao é:",expressao)

}

main()