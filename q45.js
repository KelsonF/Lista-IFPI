
import { input,print } from "./io_utils.js";

function main(){
    const saque = Number(input("Valor de saque: R$ "));
    
    let valorRestante = saque;
    
    const numNotas100 = Math.trunc(valorRestante / 100);
    
    valorRestante = valorRestante % 100;

    const numNotas50 = Math.trunc(valorRestante / 50);
    valorRestante = valorRestante % 50
    
    const numNotas20 = Math.trunc(valorRestante / 20);
    valorRestante = valorRestante % 20
    
    const numNotas10 = Math.trunc(valorRestante / 10);
    valorRestante = valorRestante % 10
    
    const numNotas5 = Math.trunc(valorRestante / 5);
    valorRestante = valorRestante % 5
    
    const numNotas2 = Math.trunc(valorRestante / 2);
    valorRestante = valorRestante % 2
    
    const numMoedas1 = valorRestante;
    
    valorRestante = valorRestante % 1;

    print("Notas de 100:", numNotas100)
    print("Notas de 50",numNotas50)
    print("Notas de 20",numNotas20)
    print("Notas de 10",numNotas10)
    print("Notas de 5",numNotas5)
    print("Notas de 2",numNotas2)
    print("Moedas de 1",numMoedas1)
    print(`Valor liberado", ${saque-valorRestante}`)

}

main()