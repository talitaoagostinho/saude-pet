import type { RegistroPeso } from './types'; 
import * as Calculos from './calculos/estatisticas';

let historicoPeso: RegistroPeso[] = [];

export async function cadastrarNovoPeso(rl: any) {
   
    console.log("----Cadastro de novo peso para o pet----");

    let pesoValido = false;
    let pesoFinal;

    while(!pesoValido){
        const pesoEntrada = await rl.question("\nDigite o peso (ex.: 5.5): ");
     
        if(pesoEntrada){
            
            pesoFinal = pesoEntrada.replace(',', '.');
            
            if (!isNaN(pesoFinal) && pesoFinal > 0){
                pesoValido = true;
            } else console.log("\nErro: Digite um peso válido");
        } else console.log("\n\nCampo não pode ficar vazio");
    }

    const entradaData : string = await rl.question("\nDigite a data (AAAA/MM/DD) ou ENTER para usar a data de hoje: ");
    const dataFinal = entradaData ? new Date(entradaData + "T03:00:00") : new Date();

    //const novaData = await rl.question("\nDigite a data no formato (AAAA/MM/DD): ");
    //const novoPeso = await rl.question("\nDigite peso (ex.: 5.5): ");

    const novoRegistro: RegistroPeso = {
       
        data: new Date(dataFinal.toLocaleString("pt-BR")),
        peso: pesoFinal
    };

    historicoPeso.push(novoRegistro);

    console.log(`\nRegistro de peso ${pesoFinal}kg adicionado com sucesso`);
}

export async function estatisticas(){
    if(historicoPeso.length === 0) return console.log("\n\nSem registros")
        ;
    const media = Calculos.calcularMedia(historicoPeso);
    const atual = Calculos.encontrarPesoMaisRecente(historicoPeso);

    console.log(`\n--- Estatísticas ---`);
    console.log(`Média: ${media.toFixed(2)}kg | Atual: ${atual}kg`);

}