# Consultas ao BD

As consultas ao BD mostradas abaixo foram feitas em cima de um banco de dados criado com o comando

```sql
CREATE DATABASE eimports
```

Além disso os comandos para criação das tabelas e inserções das tuplas estão nos seguintes links

- [Criação das tabelas](database/db.sql)
- [Inserção das tuplas](database/insert.sql)


## Listar produtos com suas categorias

```sql
SELECT 
    product.name AS product_name,
    COALESCE(category.description, 'No category') AS category_name
FROM 
    product
LEFT JOIN 
    category ON product.category_id = category.id
WHERE 
    product.seller_id = 1
ORDER BY
    COALESCE(category.description, 'No category'),
    product.name ASC;
```

## Listar clientes e suas ordens de compra em um determinado mês

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

```sql
SELECT 
    DATE_FORMAT(po.purchase, '%Y-%m') AS month_year,
    SUM(CASE WHEN ppo.product_id = 1 THEN ppo.quantity ELSE 0 END) as qt,
    SUM(ppo.quantity) AS total_quantity,
    SUM(CASE WHEN ppo.product_id = 1 THEN ppo.quantity ELSE 0 END) / SUM(ppo.quantity) AS ratio
FROM 
    product_purchase_order AS ppo
JOIN 
    purchase_order AS po ON ppo.purchase_order_id = po.id
WHERE
    po.seller_id = 1 
    AND 
    po.settlement IS NOT NULL
GROUP BY 
    month_year;
```

## Listar quantidade de produtos vendidos por categoria em um intervalo de dias

```sql

SELECT
    category.description AS category_name,
    COUNT(product_purchase_order.product_id) AS total_sold_quantity
FROM
    purchase_order
JOIN
    product_purchase_order ON purchase_order.id = product_purchase_order.purchase_order_id
JOIN
    product  ON product_purchase_order.product_id = product .id
JOIN
    category  ON product.category_id = category.id
WHERE
    purchase_order.purchase >= '2023-01-01' -- intervalos
    AND 
    purchase_order.purchase <= '2023-02-31'
GROUP BY
    category.description;
```

## Listar todas as ordens de compra em um intervalo de dias

```sql
SELECT
    purchase_order.id AS order_id,
    purchase_order.purchase AS order_purchase_date,
    purchase_order.settlement AS order_settlement_date,
    purchase_order.receipt AS order_receipt,
    client.name AS client_name,
    seller.name AS seller_name
FROM
    purchase_order
INNER JOIN
    client ON purchase_order.client_id = client.id
INNER JOIN
    seller ON purchase_order.seller_id = seller.id
WHERE
    purchase_order.purchase BETWEEN '2023-01-01' AND '2023-02-28'
ORDER BY
    purchase_order.purchase;
```

## Listar os produtos vendidos em uma ordem de compra

```sql
SELECT
    purchase_order.id AS order_id,
    product.name AS product_name,
    product_purchase_order.price AS sold_price
FROM
    purchase_order
JOIN
    product_purchase_order ON purchase_order.id = product_purchase_order.purchase_order_id
JOIN
    product ON product_purchase_order.product_id = product.id
WHERE
    purchase_order.id = 3
ORDER BY
    purchase_order.id, product.name;
```