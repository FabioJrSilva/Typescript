import Carro from "./Carro"
import Moto from "./Moto"

let carro = new Carro("Civic", "Preto", 4)

let moto = new Moto("CG Titã", "Vermelha")

moto.acelerar()
carro.acelerar()

console.log(carro.velocidadeAtual());
console.log(moto.velocidadeAtual());


