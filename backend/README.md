# 🚀 Teste Técnico Backend
Este backend foi desenvolvido para garantir um alto padrão de qualidade, combinando as melhores ferramentas e práticas da indústria.

## 🛠 Pré-requisitos
- Git
- Node.js
- npm ou yarn
- Docker (não obrigatorio)

## 🚀 Como decolar com o projeto

1. **Clone o repositório**:

```bash
git clone git@github.com:wayter95/technical-test.git
```

2. **Navegue até a pasta do frontend**

```bash
cd backend
```

3. **Instale as dependências:**

- Com npm:

```bash
npm install
```

- Ou com o yarn, se preferir:

```bash
yarn install
```

4. **Configuração do banco de dados:**
> Para testar e desenvolver o projeto eu utilizei o "sqlite" junto ao prisma ORM, para utilizar o "sqlite" no projeto basta seguir os passos abaixo:

- Use o "sqlite" com Prisma ORM para gerenciar o banco de dados.
- Se na pasta prisma existir um arquivo "developer.db", você pode excluí-lo se quiser.
- Atualize ou crie o banco de dados:

```bash
yarn prisma db push
```

- Popule a tabela de produtos:

```bash
yarn prisma db seed
```

- Caso faça alterações, execute:

```bash
yarn prisma generate
```

- Para visualizar o banco via Prisma Studio, use:

```bash
yarn prisma studio
```

5. **Configuração do ambiente:**
> Copie o conteúdo de .env.example para um novo arquivo .env e preencha com as informações necessárias.

- Exemplo: 

```json
JWT_SECRET_KEY="JWT_SECRET_KEY"
```

5. **Execute a aplicação:**

- Usando npm:
```bash
npm run dev 
# ou 
yarn dev  
```

6. **Executando com docker**
- Se tiver o Docker instalado, depois de seguir os passos anteriores, execute:

```bash
docker-compose up -d
```

### Pronto! Agora você pode testar o backend.




