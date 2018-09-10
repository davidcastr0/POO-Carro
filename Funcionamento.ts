declare function require(msg : string) : any;
var readline = require('readline-sync');
//essas duas linhas são para poder utilizar os codigos necessários para pedir algo ao usuário, como um (input em python).


/**
//para rodar o programa do projeto criado, utiliza-se (tsc -t ES6 nomedoarquivo.ts)

let l :number[] = [3,2,1,5,7];
for (let i in l){              for in percorre o indice da lista para percorrer o conteudo, usa se o (for of)
    console.log(i);
}
*/
export class Funcionamento{
   
    private combustivel : number;
    private km : number;
    private passageiros : number;
    private calculo : number;
    public teste : boolean;

   
    constructor(){
        this.combustivel = 0;
        this.km = 0;
        this.passageiros = 0
        this.calculo = 0;
        this.teste = true;

    }
    public getCombustivel() : number {
        return this.combustivel;

    }
    public setCombustivel(combustivel : number) : void{
        this.combustivel = combustivel;
    }

    public getKm() : number {
        return this.km;

    }
    public setKm(km : number) : void{
        this.km = km;
    }
    public getPassageiros() : number {
        return this.passageiros;

    }
    public setPassageiros(passageiros : number) : void{
        this.passageiros = passageiros;
    }

    public getCalculo() : number {
        return this.calculo;

    }
    public setCalculo(calculo : number) : void{
        this.combustivel = calculo;
    }






    //abastecer

    abastecer(litros : number) : number{
        this.combustivel += litros;
        if(this.combustivel>10){
            this.combustivel=10;
            return this.combustivel;
        }
    }
    //andar com o carro

    andarCarro(qntKm : number) : boolean{
        
        this.calculo = this.combustivel - (qntKm*0.1);
        if (this.calculo == 0){
            this.combustivel = this.calculo;
            this.km += qntKm;
            return this.teste = true;

        }if ((qntKm*0.1) < this.calculo){
            this.combustivel = this.calculo;
            this.km += qntKm;
            return this.teste = true;

        }else{
            return this.teste = false;
            
        }

    }

    //colocar passageiros

    insertPassageiros() : number{
        this.passageiros ++;
        return this.passageiros;
    }

    //retirar passageiros
    outPassageiros() : number{
        this.passageiros --;
        return this.passageiros;
        


    }







}