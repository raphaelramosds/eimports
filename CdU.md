# Casos de uso (CdU)

## Autenticar usuário

Autor: vendedor

1. Vendedor inicia interação com o sistema
2. Sistema exibe a tela de login
3. Vendedor informa nome de usuário
4. Vendedor informa senha
5. Sistema verifica credenciais fornecidas
6. Sistema autentica usuário

Extensões:

5a. Se nome de usuário incorreto, solicitar novo preenchimento

5b. Se senha incorreta, solicitar novo preenchimento

## Cadastrar ordem de compra

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa telefone do cliente
2. Vendedor pesquisa por produto(s) a ser(em) incluido(s) (sublinhado)
3. Vendedor seleciona produtos
4. Sistema registra hora e data da ordem de compra
5. Sistema registra um código para a ordem de compra

Extensões:

1a. O telefone do cliente deve ser precedido de operadora e prefixo

2a. Se produto(s) não cadastrado(s) no sistema, solicitar cadastro

## Baixar ordem de compra

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor pesquisa ordem de compra (sublinhado)
2. Vendedor informa forma de pagamento
3. Vendedor informa preço
4. Vendedor atualiza ordem de compra como paga
5. Vendedor informa data da baixa
6. Sistema anexa nota fiscal na ordem de compra

Extensões:

4a. Se opção de pagamento for PIX ou débito, vendedor anexa sua via de comprovante

4b. Se opção de pagamento for dinheiro, o vendedor pode ou não anexar um comprovante

## Cadastrar produto

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa nome
2. Vendedor informa descrição
3. Vendedor informa categoria
4. Vendedor informa quantidade
5. Sistema adiciona produto no estoque

## Atualizar estoque

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor pesquisa produto desejado (sublinhado)
2. Vendedor informa quantas unidades ele deseja adicionar
3. Vendedor confirma adição ao estoque
4. Sistema incrementa quantidade desse produto

## Pesquisar produtos

1. Vendedor abre painel do estoque
2. Sistema exibe um formulário de pesquisa de produtos, que pode incluir
- Nome do produto
- Categoria do produto
- Status do produto
3. Sistema retorna produtos relacionados a pesquisa

Extensões:

2a. Se algum campo foi preenchido incorretamente, solicitar novo preenchimento

3a. Se nenhum produto for encontrado, solicitar novo preenchimento

## Pesquisar ordem de compra

Ator: vendedor

1. Vendedor abre painel de ordens de compra
2. Sistema exibe um formulário de pesquisa de ordem de compra, que pode incluir
- Código da ordem da compra
- Número do cliente
- Nome do cliente
- Mês e ano da ordem de compra
3. Vendedor preenche os campos
4. Sistema retorna ordem de compras rotuladas com código, data, hora e nome do cliente

Extensões:

3a. Se algum campo foi preenchido incorretamente, solicitar novo preenchimento

4a. Se nenhuma ordem de compra for encontrada, solicitar novo preenchimento

## Registrar devolução 

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor pesquisa ordem de compra desejada (sublinhado)
2. Vendedor acessa ordem de compra cadastrada
3. Vendedor informa motivo da devolução
4. Vendedor confirma devolução
5. Sistema incrementa quantidade em estoque do(s) produto(s)
6. Sistema remove ordem de compra relacionada a esse código

## Regitrar troca

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor pesquisa ordem de compra desejada (sublinhado)
2. Vendedor pesquisa pelo produto devolvido (sublinhado)
3. Vendedor seleciona produto devolvido
4. Vendedor pesquisa novo produto (sublinhado)
5. Vendedor seleciona novo produto
6. Vendedor confirma troca
7. Sistema incrementa quantidade em estoque do produto devolvido
8. Sistema decrementa quantidade em estoque do novo produto

## Avaliar giro de estoque

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor pesquisa produto (sublinhado)
2. Venededor seleciona produto
3. Vendedor informa mês e ano de início
4. Vendedor informa mês e ano de fim
5. Sistema apresenta gráfico número de ordens de compra do produto versus mês
6. Sistema apresenta Total de valor das ordens de compra / Volume médio de ordens de compra

Extensões:

5a. Se o mês for menor que a sua ordem de compra com baixa mais antiga, solicitar novo mês

5b. Se o ano for menor que a sua ordem de compra com baixa mais antiga, solicitar novo ano

6a. O mês informado precisa ser, no mínimo, um mês a frente do mês de início
