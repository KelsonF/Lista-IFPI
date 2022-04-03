import { input,print } from "./io_utils.js";

function main(){
    const num_a = Number(input("Insira o coeficiente a: "));
    const num_b = Number(input("Insira o coeficiente b: "));
    const num_c = Number(input("Insira o coeficiente c: "));
    const num_d = Number(input("Insira o coeficiente d: "));
    const num_e = Number(input("Insira o coeficiente e: "));
    const num_f = Number(input("Insira o coeficiente f: "));
    
    const X = (num_c * num_e - num_b * num_f) / (num_a * num_e - num_b * num_d)
    const Y = (num_a * num_f - num_c * num_d) / (num_a * num_e - num_b * num_d)
    
    print("Seguindo as seguintes expressões:")
    print("x = ( ce - bf ) / ( ae - bd )")
    print("y = ( af - cd ) / ( ae - bd )")
    print(`os valores de x e y são, respectivamente: ${X}, ${Y}`);
}

main()