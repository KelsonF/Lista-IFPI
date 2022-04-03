//Leia 2 números inteiros, 
//calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import { print,input } from "./io_utils.js";

function main(){
    
    const numero1 = Number(input("Digite um numero inteiro: "))
    const numero2 = Number(input("Digite um numero inteiro: "))
    
    const quociente = Math.trunc(numero1/numero2)
    const resto = numero1 % numero2

    print('O quociente da divisao e :', quociente)
    print('O resto da divisao e :', resto)

}

main()