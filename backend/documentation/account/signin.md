# Logar

> ## Dados
* E-mail
* Senha

> ## Fluxo primário
1. [ ] Obter dados
2. [ ] Verificar se o e-mail e valido
3. [ ] Consultar se existe um usuário com o email recebido acima
4. [ ] Verifica se a senha corresponde a senha criptografada no banco
5. [ ] Gera um token JWT para o usuário

## Exceções
1. [ ] Retornar 404 caso rota não exista
2. [ ] Retornar 400 caso algum dado não seja informado
3. [ ] Retornar 400 caso o e-mail não seja valido
4. [ ] Retornar 400 caso não exista exista esse e-mail cadastrado
5. [ ] Retornar 400 caso a senha seja invalida
6. [ ] Retornar 500 caso encontre erro no servidor