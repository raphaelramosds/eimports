# Casos de uso (CdU)

## Autenticar usuário

Autor: usuário

1. Usuário inicia interação com o sistema
2. Sistema exibe a tela de login
3. Usuário informa nome de usuário
4. Usuário informa senha
5. Sistema verifica credenciais fornecidas
6. Sistema autentica usuário

Extensões:

5a. Se nome de usuário incorreto, solicitar novo nome de usuário

5b. Se senha incorreta, solicitar nova senha

## Cadastrar venda

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema, a venda deve conter apenas produtos previamente adicionados no sistema.

1. Vendedor informa número do cliente
2. Vendedor registra produto(s)
3. Vendedor informa forma de pagamento
4. Vendedor informa forma de entrega
5. Sistema questiona se o preço foi negociado
6. Sistema registra hora e data da venda
7. Sistema registra um código para a venda

Extensões:

1a. O número do cliente deve ser precedido de operadora e prefixo

3a. As formas de pagamento válidas são via débito, pix ou dinheiro

5a. Se o preço foi negociado, o vendedor precisa informar o novo preço de cada produto

## Baixar venda

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor atualiza venda como paga
2. Vendedor informa data da baixa
3. Sistema emite nota fiscal
4. Sistema atualiza status do(s) produto(s) como "Vendido"
   
## Cadastrar produto

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa nome
2. Vendedor informa descrição
3. Vendedor informa categoria
4. Vendedor informa preço
5. Vendedor informa desconto
6. Vendedor informa fornecedor
7. Vendedor informa quantidade
8. Sistema põe status "Não vendido"

Extensões:

4a. Se nome do produto conter caracteres não alfanuméricos, solicitar novo nome

5a. O desconto do produto é um valor percentual

6a. Se o produto não tem fornecedor, o vendedor pode deixar em branco

## Cadastrar lote

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa fornecedor
2. Vendedor cadastra produtos
3. Sistema atualiza o estoque com os novos produtos

Extensões:

1a. Se fornecedor não informado, solicitar um fornecedor

## Buscar vendas

Ator: vendedor

1. Vendedor abre painel de vendas
2. Sistema exibe um formulário com pesquisa de vendas, que pode incluir
- Código da venda
- Número do cliente
- Nome do cliente
- Mês e ano da venda
3. Vendedor preenche os campos
4. Sistema retorna vendas rotuladas com código, data, hora e nome do cliente

Extensões:

3a. Se algum campo foi preenchido incorretamente, solicitar novo preenchimento

4a. Se nenhuma venda for encontrada, solicitar novo preenchimento

## Registrar devolução 

Ator: vendendor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor abre painel de vendas
2. Vendedor busca pela venda desejada
3. Vendedor acessa venda cadastrada
4. Vendedor registra devolução
5. Vendedor informa motivo da devolução
6. Sistema incremente quantidade em estoque desse produto
7. Sistema remove venda relacionada a esse código

## Regitrar troca

Ator: vendendor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa produto devolvido
2. Vendedor informa novo produto
3. Sistema incrementa quantidade em estoque do produto devolvido
4. Sistema decrementa quantidade em estoque do novo produto

## Cadastrar fornecedor

Ator: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa nome do fornecedor
2. Vendedor informa cidade do fornecedor
3. Vendedor informa estado do fornecedor
4. Vendedor informa CNPJ do fornecedor
5. Sistema cadastra fornecedor

## Avaliar lucro mensal

Ator: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa mês e ano
2. Sistema lista produtos comprados no mês
3. Sistema lista produtos vendidos no mês
4. Sistema apresenta lucro no mês

Extensões:

1a. Se o mês for menor que a sua venda mais antiga, solicitar novo mês

1b. Se o ano for menor que a sua venda mais antiga, solicitar novo ano

## Avaliar giro de estoque

Ator: vendendor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa produto
2. Vendedor informa fornecedor 
3. Vendedor informa mês e ano de início
4. Vendedor informa mês e ano de fim
5. Sistema apresenta gráfico número de vendas do produto versus mês
6. Sistema apresenta Total de valor de vendas / Volume médio de vendas

Extensões:

2a. Se o mês for menor que a sua venda mais antiga, solicitar novo mês

2b. Se o ano for menor que a sua venda mais antiga, solicitar novo ano

3a. O mês informado precisa ser, no mínimo, um mês a frente do mês de início
