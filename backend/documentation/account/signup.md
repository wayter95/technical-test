# Registrar

> ## Dados
* Nome completo
* E-mail
* Telefone
* Senha

> ## Fluxo primário
1. [✅] Obter dados
2. [✅] Verificar se o e-mail e valido
3. [✅] Consultar se existe um usuário com o email recebido acima
4. [✅] Verificar se a senha tem mais de 6 caracteres
5. [✅] Verificar se a senha tem menos de 15 caracteres
6. [✅] Cripitografar a senha antes de enviar para o banco
7. [✅] Salvar os dados no banco 

## Exceções
1. [✅] Retornar 404 caso rota não exista
2. [✅] Retornar 400 caso algum dado não seja informado
3. [✅] Retornar 400 caso o e-mail não seja valido
4. [✅] Retornar 409 caso já exista exista esse e-mail cadastrado
5. [✅] Retornar 400 caso a senha seja invalida
6. [✅] Retornar 500 caso encontre erro no servidor