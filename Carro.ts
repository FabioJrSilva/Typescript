import Veiculo from "./Veiculo"

export default class Carro extends Veiculo {
    
    private numeroDePortas: number;

    constructor(modelo: string, cor: string, portas: number){
        super();
        this.modelo = modelo;
        this.cor = cor;
        this. numeroDePortas = portas;
    }
}