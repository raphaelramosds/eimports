# Histórias de usuários (HUs)

## Autenticar usuário

Como vendedor, eu gostaria de acessar minha conta

Critérios de Aceitação:
- O sistema deve me autenticar apenas com nome de usuário e senha
- Não permito que os outros usuários vejam os produtos do meu estoque

## Registrar ordens de compra

Como vendedor, eu gostaria de poder registrar as ordens de compras dos meus clientes

Critérios de Aceitação:
- Os registros das ordens de compra devem ser feitos informando número do cliente e o(s) produto(s) vendido(s)
- A escolha dos produtos deve ser feita numa listagem na mesma página onde estou cadastrando a ordem de compra

## Baixa nas ordens de compra

Como vendedor, eu gostaria de dar baixa nas ordens de compras dos meus clientes

Critérios de Aceitação:
- Para dar baixa nas ordens de compra, é necessário informar forma de pagamento e preço de venda do(s) produto(s)
- Ao dar baixa numa ordem de compra, gostaria de poder anexar o comprovante enviado pelo cliente na ordem de compra
- Ao dar baixa numa ordem de compra, um recibo com a hora e data da baixa, produtos vendidos e minha assinatura digital deve ser gerado automaticamente pelo sistema

## Adicionar ao estoque

Como vendedor, eu gostaria de adicionar produtos no estoque

Critérios de Aceitação:

- Novos produtos do estoque devem ser cadastrados com o preenchimento obrigatório do nome do produto, descrição do produto, categoria e a quantidade de itens deste produto

## Pesquisar ordens de compra

Como vendedor, eu gostaria de pesquisar ordens de compra que cadastrei

Critérios de Aceitação:
- Buscar ordens de compra, informando código da ordem de compra
- Buscar ordens de compra, informando número do cliente 
- Buscar ordens de compra, informando mês da ordem de compra
- Buscar ordens de compra, informando ano da ordem de compra

## Pesquisar produtos em estoque

Como vendedor, eu gostaria de pesquisar os produtos que estão em estoque

Critérios de Aceitação:
- Pesquisar pelos produtos em estoque, informando nome do produto
- Pesquisar pelos produtos em estoque, informando categoria do produto
- Pesquisar pelos produtos em estoque, informando status do produto

## Devoluções

Como vendedor, eu gostaria de registrar a devolução de um produto solicitada pelos meus clientes

Critérios de Aceitação:
- Gostaria de poder ter a opção de registrar devoluções em todas as ordens de compra
- Antes de registrar uma devolução, devo ser capaz de ter filtros ao meu dispôr para encontrar mais facilmente a ordem de compra passível de devolução, tais como nome e número do cliente e data da compra 
- O motivo das devoluções deve ser preenchido
- A data da devolução deve ser preenchida automaticamente pelo sistema

## Troca de produtos

Como vendedor, eu gostaria de registrar a troca de um produto solicitada pelos meus clientes

Critérios de Aceitação:
- Gostaria de poder ter a opção de registrar trocas em todas as ordens de compra
- Antes de registrar uma troca, devo ser capaz de ter filtros ao meu dispôr para encontrar mais facilmente a ordem de compra passível de troca de produtos, tais como nome e número do cliente e data da compra 
- Gostaria de registrar a troca de um produto, pesquisando primeiro pelo produto a ser devolvido e depois pelo novo produto
- O sistema não pode me permitir registrar uma troca cujo preço do novo produto seja maior que o devolvido

## Avaliar giro de estoque

Como vendedor, eu gostaria de avaliar o giro de estoque de um produto ao longo dos meses

Critérios de Aceitação:
- Gostaria de poder ter a opção de visualizar o giro de estoque em todos os produtos com ordens de compra cadastradas
- Para o sistema me apresentar o giro de estoque, devo selecionar o produto, o mês e ano de início e o mês e ano de fim
- O sistema deve calcular o giro de estoque de um produto fazendo o quociente entre o número de vendas dele em um mês e o total de vendas nesse mês
- Com um gráfico, meses do ano (eixo horizontal) e giro de estoque (eixo vertical), terei noção do quão alta foram as vendas desse produto