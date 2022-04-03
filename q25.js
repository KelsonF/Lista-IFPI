//Leia um número inteiro de metros, 
//calcule e escreva quantos Km e quantos metros ele corresponde.

import { print,input } from "./io_utils.js";

function main(){
    const  metro = Number(input("Digite uma distancia em metros: "))

    const Km = Math.trunc(metro/1000)
    const m = (metro % 1000)

    print('Sua distancia em KM e:',Km)
    print('Sua distancia em metros e:',m)

}

main()
