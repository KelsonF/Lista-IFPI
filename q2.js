import { input, print } from "./io_utils.js";

function main(){

    const horas = Number(input(`Digite um valor em horas: `))
    const min = Number(input(`Digite um valor em minutos: `))
    const calc = (horas * 60) + min

    print(calc)
}

main()