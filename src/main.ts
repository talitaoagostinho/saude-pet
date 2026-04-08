import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as Funcoes from './index.js';

const rl = readline.createInterface({ input, output });

// só cria o leitor no main, e o index só puxa o parametro que for mandado daqui
let rodando = true;

async function main() {

    while (rodando) {
        await Funcoes.cadastrarNovoPeso(rl);

        const resposta = await rl.question("\nDeseja cadastrar outra informação?");
        
        if (resposta.toLowerCase() !== 's') rodando = false;
    }

    Funcoes.estatisticas();
    console.log("\n\nAcesso finalizado. Até logo!");

    rl.close();
}

main();