# Eimports

## Componentes

- Poliana Ellen
- Raphael Ramos
- Niedson Fernando
- Franklin Soares

## Contextualização

Muitos vendedores, especialmente aqueles que operam em pequena escala, têm uma preferência arraigada pelo uso de planilhas do Excel ou papel e lápis para gerenciar suas operações. No entanto, há uma série de desafios e limitações inerentes a esse método de controle de estoque. Nesse contexto, justificamos a necessidade de desenvolver um sistema de controle de estoque na internet que seja especialmente adaptado às preferências dos vendedores. O projeto consiste em desenvolver um software para internet em que o vendedor (usuário único do sistema) será capaz de controlar seu estoque e as suas vendas.

## Versão inicial

Dentre os requisitos listados na seção de Documentação, no item Engenharia de Requisitos, cinco foram selecionados para compôr a versão inicial do sistema. Eles foram

- Autenticar usuário
- Cadastrar ordem de compra
- Cadastrar produto
- Baixar ordem de compra
- Avaliar giro de estoque

Portanto, o usuário que controla o estoque deve ser capaz de

- Cadastrar-se e logar no sistema com email e senha
- Cadastrar produto(s) no estoque
- Cadastrar ordem de compra para um ou mais produtos do estoque
- Dar baixa na ordem de compra, dando a possibilidade de anexar comprovantes de pagamento
- Visualizar um plot do giro de estoque de um produto em específico. 

### Documentação

- Engenharia de Requisitos
    - [Casos de Uso](./docs/CdU.md)
    - [Diagrama de casos de uso](./docs/Diagrama%20CdU.pdf)
    - [Histórias de usuários](./docs/HUs.md)
    - [Apresentação dos casos de uso](https://drive.google.com/file/d/10voitNwHleYkfHrKjGWaMnGzj_5zkVzp/view?pli=1)

- Banco de dados
    - [Diagrama Entidade Relacionamento](./docs/MER.pdf)
    - [Modelo Relacional](./docs/MR.pdf)
    - [Consultas ao BD](./docs/QUERIES.md)

- Documentação da API
    - [Código da API](./src/web-server/)
    - [Documentação dos endpoints](https://documenter.getpostman.com/view/31179296/2s9YeN2UPQ)

- Documentação do frontend
    - [Código do frontend](./src/site/)
