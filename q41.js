function main() {
    const custo = Number(input("O custo de fábrica do carro: R$"))
 
    const percent_distr = 28 / 100
    const percent_impos = 45 / 100
    
    const valor = custo + (custo * percent_distr) + (custo * percent_impos)
    
    print(`O valor do carro ao cosumidor: R$ ${valor}`);
}
main()
