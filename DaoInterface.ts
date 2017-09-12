export interface DaoInterface<T>{
    nomeTabela: string;

    inserir(object: T): boolean;
    atualizar(object: T): boolean;
    remover(id: number): T;
    seleionar(id: number): T;
    selecionarTodos(): [T]; 
}