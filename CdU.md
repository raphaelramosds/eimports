# Casos de uso (CdU)

## Autenticar usuário

Autor: vendedor

1. Vendedor inicia interação com o sistema
2. Sistema exibe a tela de login
3. Vendedor informa nome de usuário
4. Vendedor informa senha
5. Sistema verifica credenciais fornecidas
6. Sistema autentica vendedor

## Abrir venda

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor informa número do cliente
2. Vendedor registra produto(s)(sublinhado)
3. Vendedor informa forma de pagamento
4. Vendedor informa forma de entrega
5. Sistema questiona se o preço foi negociado

Extensões:

1a. O número do cliente deve ser precedido de operadora e prefixo

3a. As formas de pagamento válidas são via débito, fatura, pix ou dinheiro

5a. Se o preço foi negociado, o vendedor precisa informar o novo preço de cada produto

## Baixar venda

Autor: vendedor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor atualiza venda como paga
2. Vendedor informa data da baixa
3. Sistema emite nota fiscal
4. Sistema atualiza status do(s) produto(s) como "Vendido"
   
Extensões:

1a. Valor do preço final da venda tem que ser maior ou igual ao preço do produto

## Adicionar produto

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
2. Vendedor informa mês e ano de início
3. Vendedor informa mês e ano de fim
5. Sistema apresenta gráfico número de vendas do produto versus mês
4. Sistema apresenta Total de valor de vendas / Volume médio de vendas

Extensões:

2a. Se o mês for menor que a sua venda mais antiga, solicitar novo mês

2b. Se o ano for menor que a sua venda mais antiga, solicitar novo ano

3a. O mês informado precisa ser, no mínimo, um mês a frente do mês de início

## Registrar devolução 

Ator: vendendor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor acessa venda cadastrada
2. Vendedor registra devolução
3. Vendedor informa motivo da devolução
4. Sistema incremente quantidade em estoque desse produto
5. Sistema remove venda relacionada a esse código

## Regitrar troca

Ator: vendendor

Pré-condições: O vendedor deve estar autenticado no sistema

1. Vendedor acessa painel de trocas
2. Vendedor informa produto devolvido
3. Vendedor informa novo produto
4. Sistema incrementa quantidade em estoque do produto devolvido
5. Sistema decrementa quantidade em estoque do novo produto