# Consultas ao BD

As consultas que devem ser executadas para cumprir os requisitos da primeira versão do sistema são:

## Listar produtos com suas categorias

- ##### Inserção

```sql
INSERT INTO seller (login, password, name) VALUES 
('vendedor1', 'senha1', 'Vendedor 1'),
('vendedor2', 'senha2', 'Vendedor 2');


INSERT INTO category (name, seller_id) VALUES 
('Eletrônicos', 1),
('Roupas', 2);

INSERT INTO product (name, description, stock, quotation, category_id, seller_id) VALUES 
('S21FE', '256GB 8GB', 10, 1799.99, 1, 1),
('Iphone 11', '128GB', 14, 1999.99, 1, 1),
('Redmi 11 PRO', '128GB 6GB', 22, 1299.99, 1, 2),
('Camiseta Nike', 'Tamanho M, cor azul', 17, 179.99, 2, 1),
('Camiseta Puma Masculino', 'Tamanho P, cor azul', 49, 129.99, 2, 1),
('Camiseta Puma Feminino', 'Tamanho M, cor azul', 24, 129.99, 2, 2);
```

- ##### Consulta

```sql
SELECT 
    product.name AS product_name,
    COALESCE(category.name, 'No category') AS category_name
FROM 
    product
LEFT JOIN 
    category ON product.category_id = category.id
WHERE 
    product.seller_id = 1
ORDER BY
    COALESCE(category.name, 'No category'),
    product.name ASC;
```

## Listar clientes e suas ordens de compra em um determinado mês

- ##### Inserção

```sql
INSERT INTO seller (login, password, name) VALUES
('seller1', 'password1', 'Seller 1'),
('seller2', 'password2', 'Seller 2');

INSERT INTO category (name, description, seller_id) VALUES
('Eletrônico', 'Classe A', 1),
('Roupas', 'Esportiva', 2);

INSERT INTO client (phone_num, name, seller_id) VALUES
('123-456-7890', 'Poliana', 1),
('987-654-3210', 'Raphael', 2),
('000-000-0000', 'Doquinha', 2);

INSERT INTO purchase_order (purchase, settlement, receipt, client_id, seller_id) VALUES
('2023-01-10', '2023-02-10', 'eNTF', 1, 1),
('2023-01-10', '2023-03-10', 'eNTF', 2, 2),
('2023-01-10', '2023-06-10', 'eNTF', 1, 1);

INSERT INTO product (name, description, stock, quotation, category_id, seller_id) VALUES
('S23FE', '256GB 8GB', 50, 1799.99, 1, 1),
('Camiseta NIKE', 'M', 30, 120.99, 2, 2);

INSERT INTO product_purchase_order (purchase_order_id, product_id, price, quantity) VALUES
(1, 1, 2099.99, 1),
(2, 1, 2099.99, 1),
(3, 2, 149.99, 3);
```

- ##### Consulta

```sql
SELECT
    client.id AS client_id,
    client.name AS client_name,
    purchase_order.id AS order_id,
    purchase_order.purchase AS order_purchase_date,
    COALESCE(purchase_order.settlement, 'Not Settled') AS order_settlement_date,
    COALESCE(purchase_order.receipt,'Not issued') AS order_receipt
FROM
    client
INNER JOIN
    purchase_order ON client.id = purchase_order.client_id
WHERE
    MONTH(purchase_order.purchase) = 1 
    AND 
    client.seller_id = 1
ORDER BY
    client.id ASC, 
    purchase_order.id ASC;
```

## Calcular giro de estoque de um produto em um mês
