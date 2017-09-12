import Veiculo from "./Veiculo"
//export no final do código
class Moto extends Veiculo{
    constructor(modelo: string, cor: string){
        super();
        this.modelo = modelo;
        this.cor = cor;
    }

    public acelerar(): void {
        this.velocidade += 20;
        }
}

/*-- outra forma de exportar uma classe
para visualizar melhor --*/
export default Moto