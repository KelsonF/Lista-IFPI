//Leia um valor em kg (quilograma), 
//calcule e escreva o equivalente em g (grama).


import { print,input } from "./io_utils.js";

function main(){
    const kilograma = Number(input("Digite um peso em quilograma:  "))

    const grama =  kilograma /1000

    print('Seu peso em grama equivale a :', grama)

}

main()