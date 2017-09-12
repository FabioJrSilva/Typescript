import {DaoInterface} from "./Daointerface"

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = ""
    
        inserir(object: T): boolean{
            console.log("lógida do insert");             
            return true;
        }
        atualizar(object: T): boolean{
            console.log("lógica do update");            
            return true;
        }
        remover(id: number): T{
            console.log("lógica do delet");
            return Object();
        }
        seleionar(id: number): T{
            console.log("lógica do select");
            return Object();        
        }
        selecionarTodos(): [T]{
            console.log("lógica getAll");
            return [Object()];
        }
}