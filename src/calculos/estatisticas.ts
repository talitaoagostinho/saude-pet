import type { RegistroPeso } from '../types';

export function calcularMedia(historico: RegistroPeso[]): number { // o parametro "historico" que vai ser recebido é do tipo "RegistroPeso" (um array que contém peso e data). o ": number" depois é para indicar que esse parametro vai buscar apenas o dado desse array que for tipo number (no caso, o peso)
    if (historico.length === 0) return 0;

    const soma = historico.reduce((somaParcial, atual) => somaParcial + Number(atual.peso), 0); // o 0 do final é o valor inicial do somaParcial
    // reduce - coloca o valor total da soma como soma mais atual.peso. o somaParcial é uma "ponte" para calcular a soma (o total que queremos calcular) com o atual.peso
    return soma / historico.length;
}

export function encontrarPesoMaisRecente(historico: RegistroPeso[]) : number {
    if (historico.length === 0) return 0;
    return historico[historico.length - 1]!.peso;
}