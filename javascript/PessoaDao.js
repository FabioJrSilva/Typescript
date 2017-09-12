"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "tb_pessoa";
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("lógida do insert");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("lógica do update");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("lógica do delet");
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.seleionar = function (id) {
        console.log("lógica do select");
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("lógica getAll");
        return [new Pessoa_1.default("", "")];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
