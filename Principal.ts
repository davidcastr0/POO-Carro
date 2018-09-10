import{Funcionamento} from "./Funcionamento";
declare function require(msg : string) : any;
var readline = require('readline-sync');

let funcionamento : Funcionamento = new Funcionamento();


while(true){
    
    let com : string = readline.question("\nDIGITE O COMANDO DESEJADO: ");
    if(com == 'end'){
        break;
    }
    else{
        switch(com){

            case "show":
                console.log("\nCombustível:", funcionamento.getCombustivel(), "- Quilometragem do carro:",funcionamento.getKm(),"km", "- Passageiros:",funcionamento.getPassageiros());
                break;

            case "in":
                if (funcionamento.getPassageiros() == 2){
                    console.log("\nCarro cheio!!!");

                }else{
                    funcionamento.insertPassageiros();
                    console.log("\nSucesso!!!");
                }
                break;

            case "out" : 
            if (funcionamento.getPassageiros() == 0){
                console.log("\nCarro vazio!!!");
            }else{
                funcionamento.outPassageiros();
                console.log("\nSucesso!!!");
                
            }
            break;

            case "drive":
            if (funcionamento.getPassageiros() == 0){
                console.log("\nSem passageiros!!!");
            
            }if (funcionamento.getCombustivel() == 0){
                console.log("\nSem Combustível!!!");
            
            }else{
                let n1 :number = Number(readline.question("\nDigite o valor da quilometragem: "));
                if (funcionamento.andarCarro(n1) == true){
                    console.log("\nSucesso!!!");


                }else{
                    if(funcionamento.andarCarro(n1) == false){
                    console.log("\nCombustível insuficiente para o trajeto!!!");
                    }
                }
            }
            break;

            case "fuel" :
            let n2 :number = Number(readline.question("\nDigite a quantidade em litros: "));
            funcionamento.abastecer(n2);
            break;

            default:
            console.log("\nDigite um comando válido");
            break;
                
        

        }
    }

}
