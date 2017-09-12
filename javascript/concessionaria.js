"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionario = /** @class */ (function () {
    function Concessionario(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionario.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionario.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionario.prototype.criarListaDeCarros = function (listaDeCarros) {
        this.listaDeCarros = listaDeCarros;
    };
    Concessionario.prototype.fornecerHorariosDeFuncionamento = function () {
        return "De  segunda à sexta das 8:00 as 18:00 e aos sábados das 8:00 as 14:00";
    };
    return Concessionario;
}());
exports.default = Concessionario;
