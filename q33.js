//Leia um número inteiro (3 dígitos), 
//calcule e escreva a soma do número com seu inverso.

import { input,print } from "./io_utils.js";

function main(){
    const numero = Number(input("Digite um numero de 3 digitos: "))

    const centenas = Math.trunc(numero/100)
    const resto = numero % 100
    
    const dezenas = Math.trunc(resto/10)
    const unidades = resto % 10


    const novo_numero = (unidades*100) + (dezenas*10 ) +(centenas)

    print(numero + novo_numero)
}

main()