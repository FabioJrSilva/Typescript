"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* --- Criando objetos do tipo Carro --- */
var carroA = new Carro_1.default("Civic", "Preto", 4);
var carroB = new Carro_1.default("Focus", "Preto", 4);
var carroC = new Carro_1.default("Veloster", "Preto", 3);
var carroE = new Carro_1.default("i30", "Branco", 4);
var carroF = new Carro_1.default("Uno", "Vermelho", 2);
/* --- Criando Arrey de Carros e,
montando a lista de carros da concessionaria --- */
/* --- Formas diferentes de criação de Arreys ---
let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroE, carroF]
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroE, carroF]
*/
var listaDeCarros = [carroA, carroB, carroC, carroE, carroF];
var concessionaria = new Concessionaria_1.default("Av. Paulista", listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros());
/* Criando um objeto do tipo Pessoa (cliente)
e comprando um carro*/
var cliente = new Pessoa_1.default("Fábio", "Civic");
//console.log(cliente.dizerNome() + "\n" + cliente.dizerCarroPreferido());
// link para metodos de variáveis do tipo "Arrays" https://www.w3schools.com/js/js_array_methods.asp
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro["modelo"] == cliente.dizerCarroPreferido())
        // se o retorno for True (verdadeiro)
        cliente.compraCarro(carro);
});
console.log(cliente.dizerCarroAtual());
