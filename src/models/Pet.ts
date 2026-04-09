export class Pet{

    constructor(
        public id: number,
        public nome: string, // propriedades de parâmetro*
        public especie: string,
        public raca: string,
        public caminhoFoto?: string // ? - para variavel opcional/que não 
        // precisa ser imediatamente definida
    ){
    }

    //metodo
    exibirPerfil(): void{
        console.log(`Perfil: ${this.nome} - ${this.especie} | Raça: ${this.raca}`);
            // this - para indicar ao metodo para pegar a variavel com esse nome que 
            // esteja na propria classe em que o this se encontra
        }
}

 // * ao invés de ter que declarar cada variável antes do construtor/no inicio da classe 
 // e, para cada parametro recebido, ter que fazer um "this.nome = nomeRecebido", esse comando 
 // já faz automaticamente dentro dos parametros do construtor e em uma única linha
// tudo isso por botar o modificador de acesso direto no construtor

// Ou seja, ao colocar o modificador 'public' direto no parâmetro do construtor, o TypeScript 
// entende que deve criar a variável na classe e atribuir o valor/parametro recebido a ela 
// automaticamente, sem precisar escrever this.variavel = parametro manualmente.