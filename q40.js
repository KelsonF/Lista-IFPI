//Calcule a quantidade de dinheiro gasta por um fumante. 
//Dados de entrada: o número de anos que ele fuma, 
//o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import { input,print } from "./io_utils.js";

function main(){
    const valor = Number(input("Informe o valor de um maço de cigarro: "))
    const anos = Number(input("Informe a quantos anos você fuma: "))
    const quantidade = Number(input("Quantos cigarros você fuma por dia: "))

    const maço =Math.trunc(quantidade/20)
    const tempo = Math.trunc(anos * 365)

    const divida = (maço * tempo * valor )

    print("Sua divida é de", divida)

}
main()

