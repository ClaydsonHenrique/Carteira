Carteira

TrybeWallet

Este projeto é uma aplicação de gerenciamento financeiro pessoal chamada TrybeWallet. Desenvolvida com React e Redux, a aplicação permite que os usuários façam login, adicionem despesas e visualizem uma tabela com suas transações.
Índice

    Instalação
    Uso
    Componentes
    Redux
    Contribuição
    Licença

Instalação

    Instale as dependências:

    bash

npm install

Inicie o servidor de desenvolvimento:

bash

    npm start

    A aplicação estará disponível em http://localhost:3000.

Uso

A aplicação permite que os usuários:

    Façam login com email e senha.
    Adicionem despesas com detalhes como valor, moeda, método de pagamento e categoria.
    Visualizem uma tabela com suas transações e o valor total das despesas.

Componentes
App

Define as rotas principais da aplicação.
Login

Componente de login que permite ao usuário inserir seu email e senha para acessar a carteira.
Wallet

Componente principal da carteira, onde os usuários podem adicionar despesas e visualizar a tabela de transações.
Header

Componente de cabeçalho exibido na página da carteira.
WalletForm

Formulário para adicionar novas despesas.
Table

Tabela que exibe as transações adicionadas pelo usuário.
Redux
Actions

As actions definem os tipos de ações e os criadores de ações para atualizar o estado global da aplicação.

    ADD_EMAIL: Adiciona o email do usuário ao estado global.
    ADD_CURRENCIES: Adiciona as moedas disponíveis ao estado global.
    ADD_EXPENSE: Adiciona uma nova despesa ao estado global.
    TOTAL_DIVIDA: Atualiza o valor total das despesas.
    REMOVE_DIVIDA: Remove uma despesa do estado global.

Reducers

Os reducers especificam como o estado da aplicação deve mudar em resposta às ações enviadas.

    user: Gerencia o estado do usuário (email).
    wallet: Gerencia o estado da carteira (despesas, moedas).

Store

A store é criada utilizando redux-thunk para permitir ações assíncronas e redux-devtools-extension para facilitar o desenvolvimento.
