# Casos de uso (CdU)

## Autenticar usuário

Autor: vendedor

1. Vendedor inicia interação com o sistema
2. Sistema exibe a tela de login
3. Vendedor informa nome de vendedor
4. Vendedor informa senha
5. Sistema verifica credenciais fornecidas
6. Sistema autentica vendedor

Extensões:

5a. Se nome de usuário incorreto, solicitar novo preenchimento

5b. Se senha incorreta, solicitar novo preenchimento

## Cadastrar ordem de compra

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa telefone do cliente
2. Vendedor seleciona produto(s)
3. Vendedor informa forma de entrega
4. Sistema registra hora e data da ordem de compra
5. Sistema registra um código para a ordem de compra

Extensões:

1a. O telefone do cliente deve ser precedido de operadora e prefixo

2a. Se produto(s) não cadastrados no sistema, solicitar cadastro

## Baixar ordem de compra

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa forma de pagamento
2. Sistema questiona se o preço foi negociado
3. Vendedor atualiza ordem de compra como paga
4. Vendedor informa data da baixa
5. Sistema anexa nota fiscal na ordem de compra
6. Sistema atualiza status do(s) produto(s) como "Vendido"

2a. Se o preço foi negociado, o vendedor precisa informar o novo preço de cada produto

3a. Se opção de pagamento for PIX ou débito, vendedor anexa sua via de comprovante

3b. Se opção de pagamento for dinheiro, o vendedor pode ou não anexar um comprovante

## Cadastrar produto

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa nome
2. Vendedor informa descrição
3. Vendedor informa categoria
4. Vendedor informa preço
5. Vendedor informa fornecedor
6. Vendedor informa quantidade
7. Sistema põe status "Não vendido"

Extensões:

4a. Se nome do produto conter caracteres não alfanuméricos, solicitar novo nome

## Buscar ordem de compra

Ator: vendedor

1. Vendedor abre painel de ordem de compra
2. Sistema exibe um formulário com pesquisa de ordem de compra, que pode incluir
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

1. Vendedor abre painel de ordens de compra
2. Vendedor busca pela ordem de compra desejada
3. Vendedor acessa ordem de compra cadastrada
4. Vendedor registra devolução
5. Vendedor informa motivo da devolução
6. Sistema incrementa quantidade em estoque desse produto
7. Sistema remove ordem de compra relacionada a esse código

## Regitrar troca

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor seleciona produto devolvido
2. Vendedor seleciona novo produto
3. Sistema incrementa quantidade em estoque do produto devolvido
4. Sistema decrementa quantidade em estoque do novo produto

## Cadastrar fornecedor

Ator: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa nome do fornecedor
2. Vendedor informa cidade do fornecedor
3. Vendedor informa estado do fornecedor
4. Vendedor informa CNPJ do fornecedor
5. Sistema cadastra fornecedor

## Avaliar lucro mensal

Ator: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa mês e ano
2. Sistema lista produtos comprados no mês
3. Sistema lista produtos vendidos no mês
4. Sistema apresenta lucro no mês

Extensões:

1a. Se o mês for menor que a ordem de compra com baixa mais antiga, solicitar novo mês

1b. Se o ano for menor que a ordem de compra com baixa mais antiga, solicitar novo ano

## Avaliar giro de estoque

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa produto
2. Vendedor informa fornecedor 
3. Vendedor informa mês e ano de início
4. Vendedor informa mês e ano de fim
5. Sistema apresenta gráfico número de ordens de compra do produto versus mês
6. Sistema apresenta Total de valor das ordens de compra / Volume médio de ordens de compra

Extensões:

3a. Se o mês for menor que a sua ordem de compra com baixa mais antiga, solicitar novo mês

3b. Se o ano for menor que a sua ordem de compra com baixa mais antiga, solicitar novo ano

4a. O mês informado precisa ser, no mínimo, um mês a frente do mês de início
