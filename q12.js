import { print,input } from "./io_utils.js";

function main(){

    const salario = Number(input("Digite seu salario bruto: "))
    
    const aumento = (salario) + ((salario * 25)/100)

    print(aumento)


}

main()