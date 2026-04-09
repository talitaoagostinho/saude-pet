import type { RegistroPeso } from './types'; 
import * as Calculos from './calculos/estatisticas';
import fs from 'node:fs';

let historicoPeso: RegistroPeso[] = [];
let linhaLog : string;

export async function cadastrarNovoPeso(rl: any) {
   
    console.log("----Cadastro de novo peso para o pet----");

    let pesoValido = false;
    let pesoFinal;
    let dataFinal : Date;

    while(!pesoValido){
        const pesoEntrada = await rl.question("\nDigite o peso: ");
     
        if(pesoEntrada){
            
            pesoFinal = pesoEntrada.replace(',', '.');
            
            if (!isNaN(pesoFinal) && pesoFinal > 0 && pesoFinal <=150){
                pesoValido = true;
            } else console.log("\nErro: Digite um peso válido");
        } else console.log("\n\nCampo não pode ficar vazio");
    }

    const entradaData : string = await rl.question("Digite a data (DD/MM/AAAA) ou ENTER para usar a data de hoje: ");
    
    if (entradaData.trim() === "") dataFinal = new Date(); // trim() - remove espaços vazios no início e fim de uma string
    // nesse caso, se não ouver nenhuma entrada (o "apertar o enter"), o if identifica e já coloca a data de hoje como a data do registro
    else {
        const partes = entradaData.split('/'); // "quebra" uma string e o transforma em um array. nesse caso, a divisão é feita a cada "/" encontrado e, entre cada um, é um item da lista//array
        if (partes.length === 3){
        const [dia, mes, ano] = partes; // dando nome as partes
        dataFinal = new Date(`${ano}-${mes}-${dia}T00:00:00`);
        } else {
        dataFinal = new Date(entradaData); // cria uma data no padrão AAAA/MM/DD para o JS ler
        }
    }
    
    //const novaData = await rl.question("\nDigite a data no formato (AAAA/MM/DD): ");
    //const novoPeso = await rl.question("\nDigite peso (ex.: 5.5): ");

    const novoRegistro: RegistroPeso = {
       
        data: new Date(dataFinal.toLocaleString("pt-BR")),
        peso: pesoFinal
    };

    historicoPeso.push(novoRegistro);

    await salvarEmArquivo(dataFinal, pesoFinal);

  fs.appendFileSync("historico.txt", linhaLog);
}

async function salvarEmArquivo(data: Date, peso: number){
    
    const dataSegura = isNaN(data.getTime()) ? new Date() : data;

    const dataFormatada = dataSegura.toLocaleDateString('pt-BR');
    const horaFormatada = dataSegura.toLocaleTimeString('pt-BR', { hour: '2-digit'});

    linhaLog = `Data: ${dataFormatada} | Peso ${peso}kg\n`;
}  

export async function estatisticas(){
    
    if(historicoPeso.length === 0) return console.log("\n\nSem registros");

    const media = Calculos.calcularMedia(historicoPeso);
    const atual = Calculos.encontrarPesoMaisRecente(historicoPeso);

    console.log(`\n--- Estatísticas ---`);
    console.log(`Média: ${media.toFixed(2)}kg | Atual: ${atual}kg`);
}