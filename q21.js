//Leia uma temperatura em °F, 
//calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { print,input } from "./io_utils.js";

function main(){
    const temperatura_F = Number(input("Digite uma temperatura: "))

    const conversao =  (5 * temperatura_F - 160) / 9

    print('Atemperatura em celsius e', conversao.toFixed(2))

}

main()