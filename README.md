Sistema de Gerenciamento de Produtos

<img width="1363" height="649" alt="image" src="https://github.com/user-attachments/assets/37691b66-a7f3-4643-b3f5-8bee06fffdc5" />
![image](https://github.com/user-attachments/assets/ab2d1d7f-2ee9-48ff-b03e-8cfa30f07b66)



Este é um sistema simples de gerenciamento de produtos que permite criar e listar produtos. Ele foi construído usando Node.js para o backend, SQLite como banco de dados e React para o frontend.
Tecnologias Utilizadas

    Backend:
        Node.js
        Express.js
        SQLite3
    Frontend:
        React

Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

    Node.js (versão 21 ou superior)
    npm (gerenciador de pacotes do Node.js)

Configuração

     Clone este repositório:
    Bash

git clone https://github.com/seu-usuario/seu-repositorio.git

Navegue até o diretório do backend:  

Bash

cd backend

Instale as dependências do backend:
Bash

npm install

Inicie o servidor backend:
Bash

npm start

Em um novo terminal, navegue até o diretório do frontend:
Bash

cd ../frontend

Instale as dependências do frontend:
Bash

npm install

Inicie o aplicativo frontend:
Bash

    npm start

Funcionalidades

    Listagem de Produtos: Exibe uma lista de todos os produtos cadastrados.
    Criação de Produtos: Permite adicionar novos produtos ao sistema.
    Edição de Produtos: Possibilita modificar os dados de produtos existentes.
    Exclusão de Produtos: Permite remover produtos do sistema.

Estrutura do Projeto

    backend/: Contém o código do servidor Node.js.
        database.js: Lógica de interação com o banco de dados SQLite.
        routes.js: Definição das rotas da API.
    frontend/: Contém o código do aplicativo React.
        src/: Diretório com os componentes e arquivos do React.
            components/: Componentes da interface do usuário.
            services/: Serviços para comunicação com o backend.
            App.js: Componente principal do aplicativo.

Banco de Dados

O sistema utiliza o SQLite como banco de dados. O arquivo do banco de dados (database.db) será criado automaticamente na primeira vez que o servidor for iniciado.
Rotas da API

    GET /products: Lista todos os produtos.
    POST /products: Cria um novo produto.
    PUT /products/:id: Atualiza um produto existente.
    DELETE /products/:id: Exclui um produto.
