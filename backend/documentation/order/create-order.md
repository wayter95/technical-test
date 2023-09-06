# Criar Pedido

> ## Dados
* Id do Usuário
* Lista de Id de Produtos e Quantidades

> ## Fluxo primário
1. [✅] Obter dados
2. [✅] Registrar pedido

## Exceções
1. [✅] Retornar 404 caso rota não exista
2. [✅] Retornar 400 caso algum dado não seja informado
3. [✅] Retornar 400 caso não tenha nenhum produto na lista
4. [✅] Retornar 409 caso não exista exista um usuário com id cadastrado
5. [✅] Retornar 500 caso encontre erro no servidor