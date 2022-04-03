//Leia o valor da base e altura de um triângulo, 
//calcule e escreva sua área. (área=(base * altura)/2)

import { input,print } from "./io_utils.js";

function main(){
    const altura = Number(input("Digite a altura do triangulo: "))
    const base = Number(input("Digite a base do triangulo :"))

    const Area_triangulo = (base * altura)/2
    print(Area_triangulo)

}
main()
