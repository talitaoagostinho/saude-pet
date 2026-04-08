const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

interface RegistroPeso{
    data: Date;
    peso: number;
}

let historicoPeso: RegistroPeso[] = [];

async function cadastrarNovoPeso() {
    const rl = readline.createInterface({ input, output });

    console.log("Cadastro de novo peso para o pet");

    const novaData = await rl.question("Digite a data no formato (AAAA/MM/DD): ");
    const novoPeso = await rl.question("Digite peso (ex.: 5.5): ");

    const novoRegistro: RegistroPeso = {
        data: new Date(novaData.toLocaleString("pt-BR")),
        peso: parseFloat(novoPeso)
    };

    historicoPeso.push(novoRegistro);

    console.log("\nRegistro adicionado com sucesso");

    console.log(`Agora temos ${historicoPeso.length} registros no sistema`);

    rl.close();

}
/*
async function calcularMedia() {
    let soma = 0.0;
    historicoPeso.forEach(reg =>{
        soma += reg.peso;
    });
    const media = (soma / historicoPeso.length).toFixed(2);
} */

cadastrarNovoPeso();
// calcularMedia();
