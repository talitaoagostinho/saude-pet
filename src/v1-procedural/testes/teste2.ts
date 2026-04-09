interface RegistroPeso{
    data: Date;
    peso: number;
}

const nomePet: string = "luna";

const historicoPesos: RegistroPeso[] = [
    { data: new Date('2023/01/01'), peso: 5.0 },
    { data: new Date('2023/02/01'), peso: 5.2 },
    { data: new Date('2023/0301'), peso: 5.5 },
];

console.log(`Diario de saúde para: ${nomePet}`);

let qtdareg = historicoPesos.length;

let soma = 0;
historicoPesos.forEach(registroAtual => {
    
    soma =+ registroAtual.peso;

});

historicoPesos.forEach(registro => {
    if (registro.peso < 5.1){
        console.log(`Alerta de peso abaixo do esperado no dia ${registro.data.toLocaleDateString("pt-BR")}`);
    }
});

let media = (soma / qtdareg).toFixed(2);

const pesoAtual = historicoPesos[qtdareg - 1]!.peso;
console.log(`\nPeso mais recente: ${pesoAtual}kg`);
console.log(`Peso médio dos últimos ${qtdareg} meses foi de ${media}kg`);