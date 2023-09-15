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
2. Vendedor registra produto(s)
3. Vendedor informa forma de entrega
4. Sistema questiona se o preço foi negociado
5. Sistema registra hora e data da venda
6. Sistema registra um código para a venda

Extensões:

1a. O telefone do cliente deve ser precedido de operadora e prefixo

2a. Se produto(s) não cadastrados no sistema, solicitar cadastro

4a. Se o preço foi negociado, o vendedor precisa informar o novo preço de cada produto

## Baixar ordem de compra

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa forma de pagamento
2. Vendedor atualiza venda como paga
3. Vendedor informa data da baixa
4. Sistema anexa nota fiscal na ordem e compra
5. Sistema atualiza status do(s) produto(s) como "Vendido"

2a. Se opção de pagamento for PIX ou débito, vendedor anexa sua via de comprovante

2b. Se opção de pagamento for dinheiro, o vendedor pode ou não anexar o comprovante

## Cadastrar produto

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

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

## Cadastrar lote

Autor: vendedor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa fornecedor
2. Vendedor seleciona produtos
3. Vendedor põe quantidade de cada produto
4. Sistema atualiza o estoque

Extensões:

2a. Se apenas uma unidade foi cadastrado, solicitar mais unidades

2b. Se algum produto não existe no estoque, solicitar seu cadastro

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

Pré-condição:: O vendedor deve estar autenticado no sistema

1. Vendedor abre painel de vendas
2. Vendedor busca pela venda desejada
3. Vendedor acessa venda cadastrada
4. Vendedor registra devolução
5. Vendedor informa motivo da devolução
6. Sistema incremente quantidade em estoque desse produto
7. Sistema remove venda relacionada a esse código

## Regitrar troca

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

1. Vendedor informa produto devolvido
2. Vendedor informa novo produto
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

1a. Se o mês for menor que a sua venda mais antiga, solicitar novo mês

1b. Se o ano for menor que a sua venda mais antiga, solicitar novo ano

## Avaliar giro de estoque

Ator: vendendor

Pré-condição: O vendedor deve estar autenticado no sistema

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
