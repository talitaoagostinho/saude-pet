const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

import type { RegistroPeso } from './types'; 
import * as Calculos from './calculos/estatisticas';

let historicoPeso: RegistroPeso[] = [];

async function cadastrarNovoPeso() {
    const rl = readline.createInterface({ input, output });

    console.log("----Cadastro de novo peso para o pet----");

    let pesoValido = false;
    let peso = 0;
    let data = new Date();

    while(!pesoValido){
        const novoPeso = await rl.question("\nDigite o peso (ex.: 5.5): ");
        peso = parseFloat(novoPeso.replace('.', ','));

        if (!isNaN(peso) && peso > 0){
            pesoValido = true;
        } else {
            console.log("\nErro: Digite um peso válido")
        }
    }

    data = await rl.question("\nDigite a data (AAAA/MM/DD) ou ENTER para usar a data de hoje: ");
    const dataFinal = data ? new Date(data + "T03:00:00") : new Date();

    //const novaData = await rl.question("\nDigite a data no formato (AAAA/MM/DD): ");
    //const novoPeso = await rl.question("\nDigite peso (ex.: 5.5): ");

    const novoRegistro: RegistroPeso = {
       
       /* data: new Date(novaData.toLocaleString("pt-BR")),
        peso: parseFloat(novoPeso) */

        peso: peso,
        data: dataFinal
    };

    historicoPeso.push(novoRegistro);

    console.log(`\nRegistro de peso ${peso}kg adicionado com sucesso`);
    
    const media = Calculos.calcularMedia(historicoPeso);
    const atual = Calculos.encontrarPesoMaisRecente(historicoPeso);

console.log(`Média: ${media.toFixed(2)}kg | Atual: ${atual}kg`);

    rl.close();

    console.log(`\nAgora temos ${historicoPeso.length} registros no sistema`);

}

cadastrarNovoPeso();


