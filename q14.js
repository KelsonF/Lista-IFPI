//Leia 3 notas de um aluno e o peso de cada nota
//calcule e escreva a média ponderada.

import {input,print} from "./io_utils.js"

function main(){

    const nota1 = Number(input("Digite sua nota: "))
    const nota2 = Number(input("Digite sua segunda nota: "))
    const nota3 = Number(input("Digite sua terceira nota: "))

    const peso1 = Number(input("Digite seu peso 1: "))
    const peso2 = Number(input("Digite seu peso 2: "))
    const peso3 = Number(input("Digite seu pseo 3: "))

    const ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3))/ (peso1 + peso2 + peso3)
    print(ponderada)


}

main()