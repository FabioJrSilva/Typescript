import Concessionaria from "./Concessionaria"
import Pessoa from "./Pessoa"
import {Dao} from "./Dao"
let pessoa = new Pessoa("","");
let concessionaria = new Concessionaria("", []);

let dao: Dao<Pessoa> = new Dao();
let dao2: Dao<Concessionaria> = new Dao<Concessionaria>();

dao.atualizar(pessoa)
dao2.inserir(concessionaria)
