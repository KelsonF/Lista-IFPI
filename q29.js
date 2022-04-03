//Leia um número inteiro de meses, 
//calcule e escreva quantos anos e quantos meses ele corresponde.

import { input,print } from "./io_utils.js";

function main(){
    const meses = Number(input("Digite um numero de meses: "))

    const anos = Math.trunc(meses/12)
    const months = meses % 12

    print(`Numero de anos: `, anos)
    print(`Numero de meses`, months)
}

main()