"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = "";
    }
    Dao.prototype.inserir = function (object) {
        console.log("lógida do insert");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("lógica do update");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("lógica do delet");
        return Object();
    };
    Dao.prototype.seleionar = function (id) {
        console.log("lógica do select");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("lógica getAll");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
