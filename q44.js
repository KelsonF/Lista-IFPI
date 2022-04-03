import { input,print } from "./io_utils.js";

function main(){
    const latao = Number(input("Quantidade de latão (kg): "));
    
    const cobre = latao * (70 / 100)
    const zinco = latao * (30 / 100)
    
    print(`${latao}kg de latão corresponde a ${cobre}% de cobre e ${zinco} de zinco`);

}

main()