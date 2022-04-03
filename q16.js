//Leia o valor do lado de um quadrado
//, calcule e escreva sua área. (área = lado2)

import { print,input } from "./io_utils.js";

function main(){
    const lado = Number(input("Digite o lado do quadrado: "))
    const area = lado * lado //lado**2

    print(area)


}

main()