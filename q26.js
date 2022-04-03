//Leia um número inteiro de dias, 
//calcule e escreva quantas semanas e quantos dias ele correspondente

import { print,input } from "./io_utils.js";

function main(){

    const dias = Number(input("Digite um numero de dias: "))
    
    const semanas = Math.trunc(dias/7)
    const days = (dias % 7)

    print("Seu tempo em semanas e: ", semanas)
    print("Seu tempo em dias e: ", days)
}

main()