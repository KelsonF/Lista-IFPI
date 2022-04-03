import { input, print } from "./io_utils.js";

function main() {
    const number = input(`Digite um numero de 3 digitos:`)

    const C = Number(number[0])
    const D = Number(number[1])
    const U = Number(number[2])

    const soma = C + D + U
    print(`${soma}`)

}

main()