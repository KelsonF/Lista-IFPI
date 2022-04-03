//Leia um valor em m, 
//calcule e escreva o equivalente em cm.

import { print,input } from "./io_utils.js";

function main(){
    const metro = Number(input("Digite um distancia em metros: "))

    const centimetro =  metro /100

    print('Sua distancia em centrimetro equivale a :', centimetro)

}

main()