import Carro  from "./Carro"
import Concessionario  from "./Concessionaria"
import Pessoa  from "./Pessoa"

/* --- Criando objetos do tipo Carro --- */
let carroA = new Carro("Civic", "Preto", 4) 
let carroB = new Carro("Focus", "Preto", 4)
let carroC = new Carro("Veloster", "Preto", 3)
let carroE = new Carro("i30", "Branco", 4)
let carroF = new Carro("Uno", "Vermelho", 2)

/* --- Criando Arrey de Carros e,
montando a lista de carros da concessionaria --- */
/* --- Formas diferentes de criação de Arreys ---
let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroE, carroF]
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroE, carroF]
*/

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroE, carroF]
let concessionaria = new Concessionario("Av. Paulista",listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros());

/* Criando um objeto do tipo Pessoa (cliente)
e comprando um carro*/

let cliente = new Pessoa("Fábio","Civic");

//console.log(cliente.dizerNome() + "\n" + cliente.dizerCarroPreferido());
// link para metodos de variáveis do tipo "Arrays" https://www.w3schools.com/js/js_array_methods.asp
concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{
    if(carro["modelo"] == cliente.dizerCarroPreferido())
    // se o retorno for True (verdadeiro)
    cliente.compraCarro(carro)
})

console.log(cliente.dizerCarroAtual());
