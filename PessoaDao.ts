import { DaoInterface } from "./DaoInterface"
import Pessoa from "./Pessoa"

export class PessoaDao implements DaoInterface<Pessoa>{

    nomeTabela: string = "tb_pessoa"
    
        inserir(object: Pessoa): boolean{
            console.log("lógida do insert");             
            return true;
        }
        atualizar(object: Pessoa): boolean{
            console.log("lógica do update");            
            return true;
        }
        remover(id: number): Pessoa{
            console.log("lógica do delet");
            return new Pessoa("","");
        }
        seleionar(id: number): Pessoa{
            console.log("lógica do select");
            return new Pessoa("","");        
        }
        selecionarTodos(): [any]{
            console.log("lógica getAll");
            return [new Pessoa("", "")]
        }
}