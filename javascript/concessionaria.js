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
    return Concessionario;
}());
exports.default = Concessionario;
