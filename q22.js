//Leia um valor em km, 
//calcule e escreva o equivalente em m.

import { print,input } from "./io_utils.js";

function main(){
    const kilometro = Number(input("Digite um distancia em kilometro: "))

    const metro = kilometro * 1000

    print('Sua distancia em km equivale a :', metro)

}

main()