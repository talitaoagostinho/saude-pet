## Saúde Pet
Um utilitário de linha de comando (CLI) desenvolvido em Node.js e TypeScript para ajudar donos de pets a monitorar a saúde de seus animais, registrando e analisando o histórico de peso.

## Funcionalidades
- Cadastro de Pesos: Registro dinâmico de peso com suporte a datas customizadas ou automáticas.
- Tratamento de Dados Inteligente: Aceita entradas com vírgula (padrão brasileiro) ou ponto, convertendo-os automaticamente para cálculos precisos.
- Estatísticas em Tempo Real: Calcula a média de peso do animal e identifica o registro mais recente.
- Interface em Loop: Permite múltiplos cadastros em uma única sessão sem precisar reiniciar o programa.
- Suporte a Datas BR: Aceita entradas no formato DD/MM/AAAA com tratamento automático de fuso horário local.

## Arquitetura e Design de Dados
Embora a versão atual do CLI foque no rastreio de peso, o projeto foi concebido utilizando a metodologia *Design First*. O modelo de dados (DER) já foi normalizado para suportar a expansão do ecossistema Saúde Pet, incluindo:
- **Escalabilidade Funcional (Módulos):** Graças à modularização e ao uso do *Princípio de Responsabilidade Única (SRP)*, novas funcionalidades, como o módulo de vacinação já planejado, podem ser acopladas de forma incremental. Isso garante que o sistema cresça sem a necessidade de refatorar a lógica de peso já existente.
- **Escalabilidade de Dados (Persistência):** O sistema foi estruturado para permitir uma transição suave da persistência em arquivos .txt para bancos de dados relacionais (como SQLite ou PostgreSQL). O design prevê o crescimento do volume de registros de múltiplos pets, garantindo a integridade referencial e a performance a longo prazo.
- **Entidades Relacionais e Normalização:** Separação clara entre Pets, Histórico de Peso e Vacinas. A estrutura de vacinação foi planejada para separar a definição da vacina (catálogo) da aplicação real no pet, permitindo um histórico auditável, seguro e livre de redundâncias.

## Tecnologias Utilizadas
- Node.js (v22+)
- TypeScript
- tsx (para execução rápida em desenvolvimento)
- ESModules: Utilização de import/export nativos.

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

## Modelagem de Dados (v2.0)
A estrutura de dados foi planejada para suportar múltiplos pets e histórico de vacinação. 
[Clique aqui para ver o DER e os Requisitos detalhados](./docs/MODELAGEM.md)

## Roadmap de Evolução

- [x] **v1.0: Arquitetura Procedural**
  - Modularização em arquivos (main, index, estatisticas).
  - Tratamento de dados (ponto/vírgula) e validações de peso.
  - Persistência básica em log de texto ('.txt').

- [ ] **v2.0: Orientação a Objetos (POO)**
  - Refatoração para classes
  - Encapsulamento de dados e métodos.
  - Modelagem de dados prévia.

- [ ] **v3.0: Persistência e Relacionamentos**
  - Migração de arquivos .txt para SQLite ou PostgreSQL.
  - Implementação de Migrations para versionamento do banco de dados.
  - Ativação do módulo de Vacinação baseado no modelo de dados já planejado.
    
## Aprendizados:
Neste projeto, foquei em entender e resolver problemas reais de arquitetura e lógica, como:
- **Gerenciamento de Fluxo Assíncrono:** Uso intensivo de async/await com a interface readline/promises.
- **Princípio de Responsabilidade Única (SRP):** Organização do código em módulos distintos para lógica de negócio, tipos globais e entrada/saída, facilitando a manutenção e testes unitários futuros.
- **Tipagem Estrita e Segurança:** Uso de interfaces e tipos customizados do TypeScript para garantir a integridade dos dados durante a conversão de entradas do usuário para tipos numéricos e objetos Date.
- **Injeção de Dependência:** Passagem da interface de leitura como parâmetro entre módulos para evitar conflitos de entrada no terminal.
- **Persistência de Dados Básica:** Implementação do módulo 'fs' do Node.js para salvar históricos em arquivos .txt.
- **Manipulação de Strings e Datas:** Uso de métodos como split(), trim() e Template Literals para converter entradas de usuários em objetos Date válidos.

## Autor
Feito por Talita Oliveira  
LinkedIn: https://www.linkedin.com/in/talitaoagostinho
