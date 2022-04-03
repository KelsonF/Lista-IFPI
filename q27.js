//Leia um número inteiro de segundos, 
//calcule e escreva quantas horas, quantos minutos e quantos segundos

import { print,input } from "./io_utils.js";

function main(){
    const segundos = Number(input("Digite um tempo em segundos: "))

    const horas = Math.trunc(segundos/3600)
    const minutos = Math.trunc((segundos % 3600)/60)
    const secs = ((segundos % 3600)%60)

    print("tempo em horas", horas)
    print("tempo em minutos",minutos)
    print("tempo em segundos",secs)


}

main()