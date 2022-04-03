//Leia um número inteiro (4 dígitos), 
//calcule e escreva a soma dos elementos que o compõem.

import { input,print } from "./io_utils.js";

function main(){
    const numero = (input('Digite um numero de 4 digitos: '))

    const algarismo1 = Number(numero[0])
    const algarismo2 =Number (numero[1])
    const algarismo3 = Number(numero[2])
    const algarismo4 = Number(numero[3])

    const soma = algarismo1 + algarismo2 + algarismo3 + algarismo4

    print(`A soma dos elementos é : ${soma}`)

}

main()