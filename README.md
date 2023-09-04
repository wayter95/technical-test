# 🚀 Projeto Marketplace
O objetivo deste projeto é desenvolver uma plataforma de marketplace onde os usuários podem visualizar produtos, adicionar ao carrinho e realizar pedidos após autenticação.

## 🛠️ Backend
### Tecnologias Utilizadas:

#### Framework: [NestJS](https://nestjs.com/)

#### Linguagem: TypeScript

#### Documentação: [Swagger](https://swagger.io/)

#### ORM: [Prisma](https://www.prisma.io/)

#### Banco de Dados: SQLite

#### Autenticação: JWT

#### Containerização: [Docker](https://www.docker.com/)

#### Testes: [Jest](https://jestjs.io/pt-BR/)

#### Arquitetura: Clean Architecture

- A adoção da Clean Architecture permite uma separação de responsabilidades, tornando o código mais organizado e facilitando a manutenção. Ela promove a independência de frameworks e a inversão de dependências, resultando em um sistema desacoplado e testável.

#### Testes:

- Os testes foram escritos focando nos use cases, garantindo que a lógica de negócios do aplicativo funcione como esperado.

#### Endpoints:

- SignUp: Para criação de novos usuários.

- SignIn: Para autenticação dos usuários.

- ProductList: Listagem de todos os produtos.

- ProductById: Detalhes de um produto específico através de seu ID.

- CreateOrder: Criação de pedidos.
## 🖥️ Frontend
### Tecnologias Utilizadas:

#### Framework: [NextJS](https://nextjs.org/)

#### Linguagem: TypeScript

#### Requisições HTTP: [Axios](https://axios-http.com/)

#### Rotas: Utilizadas para navegação e estruturação do projeto.

#### Componentes: O uso de componentes permite a reutilização de código e facilita a manutenção.