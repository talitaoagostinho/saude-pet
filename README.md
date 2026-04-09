## Saúde Pet - Rastreador de Peso
Um utilitário de linha de comando (CLI) desenvolvido em Node.js e TypeScript para ajudar donos de pets a monitorar a saúde de seus animais, registrando e analisando o histórico de peso.

## Como rodar:
Com o Node.js já instalado na máquina:
- Clone o repositório com o comando
``` git clone https://github.com/talitaoagostinho/saude-pet.git ```
- Entre na pasta do projeto digitando
``` cd saude-pet ```
- Instale as dependências necessárias
``` npm install ```
- Execute o programa com
``` npm run dev ```

## Funcionalidades
- Cadastro de Pesos: Registro dinâmico de peso com suporte a datas customizadas ou automáticas.
- Tratamento de Dados Inteligente: Aceita entradas com vírgula (padrão brasileiro) ou ponto, convertendo-os automaticamente para cálculos precisos.
- Estatísticas em Tempo Real: Calcula a média de peso do animal e identifica o registro mais recente.
- Interface em Loop: Permite múltiplos cadastros em uma única sessão sem precisar reiniciar o programa.

## Tecnologias Utilizadas
- Node.js (v22+)
- TypeScript
- tsx (para execução rápida em desenvolvimento)
- ESModules: Utilização de import/export nativos.

## Roadmap de Evolução

- [x] **v1.0: Arquitetura Procedural**
  - Modularização em arquivos (main, index, estatisticas).
  - Tratamento de dados (ponto/vírgula) e validações de peso.
  - Persistência básica em log de texto ('.txt').

- [ ] **v2.0: Orientação a Objetos (POO)**
  - Refatoração para classes
  - Encapsulamento de dados e métodos.
  - Modelagem de dados prévia.

- [ ] **v3.0: Banco de Dados e Persistência Real**
  - Implementação de SQL
  - Histórico persistente entre execuções.

## Aprendizados:
Neste projeto, foquei em entender e resolver problemas reais de arquitetura e lógica, como:
- Gerenciamento de Fluxo Assíncrono: Uso intensivo de async/await com a interface readline/promises.
- Modularização: Separação de responsabilidades entre funções de cálculo, tipos e o fluxo principal do sistema.
- Tratamento de Tipos: Conversão rigorosa de strings para números para evitar erros de concatenação em cálculos matemáticos.
- Injeção de Dependência: Passagem da interface de leitura como parâmetro entre módulos para evitar conflitos de entrada no terminal.

## Autor
Feito por Talita Oliveira  
LinkedIn: https://www.linkedin.com/in/talita-oliveira-401b41311/
