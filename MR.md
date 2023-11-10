# Modelo Relacional

## Modelagem

O modelo relacional abaixo ilustra as entidades envolvidas na versão inicial do sistema

```mermaid

erDiagram
    usuario {
        int usuario_id PK
        string username
        string password
    }

    vendedor {
        int vendedor_id PK
        string nome
        int usuario_id FK
    }

    vendedor ||--|| usuario : ""

    categoria {
        int categoria_id PK
        string nome
        int vendedor_id FK
    }

    vendedor ||--o{ categoria : ""
    vendedor ||--o{ cliente : ""

    produto {
        int produto_id PK
        string nome
        string descricao
        int qtde
        float cotacao

        int categoria_id FK
        int vendedor_id FK
    }

    produto }|--|| categoria : ""
    produto }o--|| vendedor : ""

    cliente {
        int cliente_id PK
        string telefone
        string nome
        int vendedor_id FK
    }

    ordem {
        int ordem_id PK
        string forma_pgto
        data data
        string comprovante
        timestamp baixa
        int cliente_id FK
        int vendedor_id FK
    }

    ordem ||--|| cliente : ""
    ordem }o--|| vendedor : ""
    ordem  }|--|| produto_ordem : ""
    produto }|--|| produto_ordem : ""

    produto_ordem {
        int produto_id FK
        int ordem_id FK
        float preco
        int qtde
    }
```

## Comentários

A ordem de compra pode conter mais de um produto, e um produto pode estar em várias ordens de compra. Além disso, o preço do produto cadastrado pelo vendedor na ordem de compra pode não ser a cotação que está registrada no produto, pois esse valor pode ser negociado. Então, a tabela de cruzamento `produto_ordem` foi criada para conter o preço que o produto foi vendido.

O atributo `vendedor_id` está presente em tabelas como `categoria`, `cliente` e `ordem` porque, pensando em um sistema com vários usuários, um vendedor não pode ver as categorias, clientes e ordens de compra cadastradas pelos outros vendedores.
