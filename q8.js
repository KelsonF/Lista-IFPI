import { print, input } from "./io_utils.js";

function main(){

    const n1 = Number(input("Digite um numero: "))
    const n2 = Number(input("Digite um numero: "))

    const calc = (n1 + n2)/(n1 - n2)

    print(calc)


}

main()