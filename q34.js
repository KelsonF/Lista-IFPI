//Leia 3 números, 
//calcule e escreva a média dos números.

import { input,print } from "./io_utils.js";

function main(){
    const numero1 = Number(input('Digite um numero: '))
    const numero2 = Number(input('Digite um numero: '))
    const numero3 = Number(input('Digite um numero: '))
    
    const media = (numero1 + numero2 + numero3)/3

    print(`A sua media é  ${media}`)
    
}

main()