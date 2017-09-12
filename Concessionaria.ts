import Carro from "./Carro"
import { ConcessionariaInterface } from "./ConcessionariaInterface"

export default class Concessionario implements ConcessionariaInterface {
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    
    public fornecerEndereco(): string {
        return this.endereco;
    }
    
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }

    public criarListaDeCarros(listaDeCarros: any): void{
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento(): string {
        return "De  segunda à sexta das 8:00 as 18:00 e aos sábados das 8:00 as 14:00"
    }
}