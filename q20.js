//Leia uma temperatura em °C, 
//calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { print,input } from "./io_utils.js";

function main(){
    const temperatura_C = Number(input("Digite uma temperatura: "))

    const conversao =  (9 * temperatura_C + 160) / 5

    print('Atemperatura em fahrenheit e', conversao.toFixed(2))

}

main()