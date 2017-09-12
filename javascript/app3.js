"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var carro = new Carro_1.default("Civic", "Preto", 4);
carro.acelerar();
carro.acelerar();
var moto = new Moto_1.default("CG Titã", "Vermelha");
moto.acelerar();
moto.acelerar();
/* criei uma instancia com parametros vasios penas para testar
   o método da interface ConcessionariaInterface */
var concessionaria = new Concessionaria_1.default("", []);
console.log(carro.velocidadeAtual());
console.log(moto.velocidadeAtual());
console.log(concessionaria.fornecerHorariosDeFuncionamento());
