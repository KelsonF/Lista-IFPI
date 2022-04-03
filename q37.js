//Leia a idade de uma pessoa expressa em dias e 
//escreva-a expressa em anos, meses e dias.

import { input,print } from "./io_utils.js";
function main(){
        const dias = Number(input("Digite sua idade em dias: "))
    
        const anos = Math.trunc(dias/365)
        const resto = dias % 365
        
        const meses = Math.trunc(resto/30)
        const days = resto % 30

        print("Sua idade em anos é:",anos)
        print("Sua idade em meses é:",meses)
        print("Sua idade em dias é:",days)

}

main()
