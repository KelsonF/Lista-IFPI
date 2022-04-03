//Leia 2 (duas) frações (numerador e denominador),
// calcule e escreva a soma destas frações, escrevendo o
//resultado em forma de fração.

import { input,print } from "./io_utils.js";

function main(){
    const fração1 = input("Digite uma fração formato a/b: ")
    const fração2 = input("Digite uma fração formato a/b: ")

    const numerador1 = Number(fração1.split("/")[0])
    const denominador1 = Number(fração1.split("/")[1])

    const numerador2 = Number(fração2.split("/")[0])
    const denominador2 = Number(fração2.split("/")[1])

    const produto_de_denominadores = Number(denominador1*denominador2)
    const soma_numerador = (produto_de_denominadores/denominador1)*numerador1 + (produto_de_denominadores/denominador2)*numerador2

    print(`a soma das frações é ${soma_numerador}/${produto_de_denominadores}`)
    
}
main()