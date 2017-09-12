"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("lógida do insert");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("lógica do update");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("lógica do delet");
        return new concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.seleionar = function (id) {
        console.log("lógica do select");
        return new concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("lógica getAll");
        return [new concessionaria_1.default("", [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
