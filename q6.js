import { print,input } from "./io_utils.js";

function main(){

    const v1 = Number(input("Digite uma velocidade em km/h"))
    const calc = (v1/3.6)

    print(`Your velocity is  ${calc} m/s`)

}

main()