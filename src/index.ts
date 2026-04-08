import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import type { RegistroPeso } from './types'; 
import * as Calculos from './calculos/estatisticas';

let historicoPeso: RegistroPeso[] = [];
const rl = readline.createInterface({ input, output });

async function cadastrarNovoPeso() {
   
    console.log("----Cadastro de novo peso para o pet----");

    let pesoValido = false;
    let peso = 0;
    // data : Date;

    while(!pesoValido){
        const novoPeso = await rl.question("\nDigite o peso (ex.: 5.5): ");
        peso = parseFloat(novoPeso.replace('.', ','));

        if (!isNaN(peso) && peso > 0){
            pesoValido = true;
        } else {
            console.log("\nErro: Digite um peso válido")
        }
    }
/*
    Date data = await rl.question("\nDigite a data (AAAA/MM/DD) ou ENTER para usar a data de hoje: ");
    const dataFinal = data ? new Date(data + "T03:00:00") : new Date();

    //const novaData = await rl.question("\nDigite a data no formato (AAAA/MM/DD): ");
    //const novoPeso = await rl.question("\nDigite peso (ex.: 5.5): ");
*/
    const novoRegistro: RegistroPeso = {
       
       /* data: new Date(novaData.toLocaleString("pt-BR")),
        peso: parseFloat(novoPeso) */

        peso: peso
        // data: dataFinal
    };

    historicoPeso.push(novoRegistro);

    console.log(`\nRegistro de peso ${peso}kg adicionado com sucesso`);
    
    

}

async function calcularMedia(){
    const media = Calculos.calcularMedia(historicoPeso);
    const atual = Calculos.encontrarPesoMaisRecente(historicoPeso);

    console.log(`Média: ${media.toFixed(2)}kg | Atual: ${atual}kg`);

}

async function repetirPergunta(){

    const resposta = await rl.question("\n\nDeseja adicionar mais um registro? S/N: ");

    if (resposta === "S"){
        await cadastrarNovoPeso();
        await repetirPergunta();
        while (resposta === "S"){
            await repetirPergunta();
        }
    }

}

await cadastrarNovoPeso();

await repetirPergunta();

rl.close();

calcularMedia();

console.log(`\nAgora temos ${historicoPeso.length} registros no sistema`);

/* 
async function iniciarSistema() {
    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        // Agora você pode usar await direto no rl.question!
        const pesoStr = await rl.question("Digite o peso do pet: ");
        const peso = parseFloat(pesoStr);

        // ... sua lógica de salvar no array e calcular a média ...
        console.log(`Peso ${peso}kg registrado!`);

        continuar = await rl.question("\nDeseja adicionar outro peso? (s/n): ");
    }

    console.log("Encerrando sistema...");
    rl.close();
}

// Chama a função
iniciarSistema();
*/

