import { PessoaDao} from "./PessoaDao"
import Pessoa from "./Pessoa"

let dao: PessoaDao = new PessoaDao();
let pessoa = new Pessoa("","");

dao.atualizar(pessoa);