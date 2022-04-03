import { input, print } from "./io_utils.js";

function main(){
    const dolar = Number(input(`Digite a cotacao atual do dolar: `))
    const real = Number(input(`Digite o valor a ser convertido: `))

    const calc = (dolar * real)
    print(calc)

}

main()