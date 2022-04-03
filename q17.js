//Leia o valor da base e altura de um retângulo, 
//calcule e escreva sua área. (área = base * altura)

import { print,input } from "./io_utils.js";

function main(){
    const base = Number(input("Digite o valor da base do retangulo: "))
    const altura = Number(input("Digite o valor da altura: "))

    const area = (base * altura)
    print (area)
}

main()