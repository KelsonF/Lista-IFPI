//Leia um número inteiro de minutos,  
//calcule e escreva quantos dias, quantas horas e quantos minutos ele

import { input,print } from "./io_utils.js";

function main(){
    const tempo = Number(input("Digite um tempo em minutos: "))

    const dias = Math.trunc(tempo/1440)
    const horas = Math.trunc(tempo%1440/60)
    const minutos = (tempo%1440)%60

    print("Numero de dias: ",dias)
    print("Nunero de horas:",horas)
    print("Numero de minutos",minutos)

}

main()