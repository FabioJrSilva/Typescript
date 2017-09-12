import Carro from "./Carro"
import Moto from "./Moto"
import Concessionaria from "./Concessionaria"
let carro = new Carro("Civic", "Preto", 4)
carro.acelerar()
carro.acelerar()

let moto = new Moto("CG Titã", "Vermelha")
moto.acelerar()
moto.acelerar()

/* criei uma instancia com parametros vasios penas para testar
   o método da interface ConcessionariaInterface */
let concessionaria = new Concessionaria("", [])

console.log(carro.velocidadeAtual());
console.log(moto.velocidadeAtual());
console.log(concessionaria.fornecerHorariosDeFuncionamento());
