//Leia um número inteiro (4 dígitos binários), 
//calcule e escreva o equivalente na base decimal.

import { input,print } from "./io_utils.js";

function main(){
    const binario = (input("Digite um numero binario: "))

    const binario_1 = Number(binario[0])
    const binario_2 =Number (binario[1])
    const binario_3 = Number(binario[2])
    const binario_4 = Number(binario[3])

    const decimal = (binario_1 * 2**3) +(binario_2*2**2) + (binario_3*2**1) + (binario_4*1)

    print(decimal)

}
main()