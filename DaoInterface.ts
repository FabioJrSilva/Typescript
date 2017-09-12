export interface DaoInterface{
    nomeTabela: string;

    inserir(object: any): boolean;
    atualizar(object: any): boolean;
    remover(id: number): any;
    seleionar(id: number): any;
    selecionarTodos(): Array<any>; 
}