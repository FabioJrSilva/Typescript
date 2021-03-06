"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
//export no final do código
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, cor) {
        var _this = _super.call(this) || this;
        _this.modelo = modelo;
        _this.cor = cor;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        this.velocidade += 25;
    };
    return Moto;
}(Veiculo_1.default));
/*-- outra forma de exportar uma classe
para visualizar melhor --*/
exports.default = Moto;
