//Leia a idade de uma pessoa expressa em anos, meses e dias 
//e escreva-a expressa apenas em dias.

import { input,print } from "./io_utils.js";

function main(){
    const anos = Number(input("Escreva sua idade(anos): "))
    const meses = Number(input("Digite sua idade(meses): "))
    const dias = Number(input("Digite sua idade(dias): "))

    const idade = (anos * 365) + (meses * 30) + dias

    print("Sua idade em dias corresponde à; ",idade)

}

main()