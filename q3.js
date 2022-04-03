import { input, print } from "./io_utils.js";

function main(){
    const time = Number(input(`Digite um valor em minutos: `))
    
    const horas_minutos = Math.trunc(time/60)
    const sobra_minutos = (time % 60)


    print('numero de horas : ', horas_minutos)
    print('o numero de minutos e: ', sobra_minutos)
    

}

main()