class Carro 
{
    private modelo: string;
    private cor: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, cor: string, portas: number)
    {
        this.modelo = modelo;
        this.cor = cor;
        this. numeroDePortas = portas;
    }

    /**
     * acelerar
     */
    public acelerar(): void 
    {
        this.velocidade += 10;
    }

    /**
     * parar
     */
    public parar(): void
    {
        this.velocidade = 0;
    }

    /**
     * velocidadeAtual
     */
    public velocidadeAtual(): number
    {
        return this.velocidade;
    }
}

let carroA = new Carro("Civic", "Preto", 4);
console.log(carroA)
carroA.acelerar();
console.log(carroA);
