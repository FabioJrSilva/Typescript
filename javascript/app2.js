"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, portas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.cor = cor;
        this.numeroDePortas = portas;
    }
    /**
     * acelerar
     */
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    /**
     * parar
     */
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    /**
     * velocidadeAtual
     */
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro("Civic", "Preto", 4);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
