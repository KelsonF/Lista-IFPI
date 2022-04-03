//Leia um valor em real (R$),
//calcule e escreva 70% deste valor.

import { input,print } from "./io_utils.js";

function main(){
    const Real = Number(input('Digite um valor em real: '))

    const calculo = (Real * 70 / 100)
    
    print(calculo)



}

main()