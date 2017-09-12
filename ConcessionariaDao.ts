import { DaoInterface } from "./DaoInterface"
import Concessionaria from "./concessionaria"

export class ConcessionariaDao implements DaoInterface{

    nomeTabela: string = "tb_concessionaria"
    
        inserir(object: Concessionaria): boolean{
            console.log("lógida do insert");             
            return true;
        }
        atualizar(object: Concessionaria): boolean{
            console.log("lógica do update");            
            return true;
        }
        remover(id: number): Concessionaria{
            console.log("lógica do delet");
            return new Concessionaria("", []);
        }
        seleionar(id: number): Concessionaria{
            console.log("lógica do select");
            return new Concessionaria("", []);        
        }
        selecionarTodos(): [any]{
            console.log("lógica getAll");
            return [new Concessionaria("", [])]
        }
}