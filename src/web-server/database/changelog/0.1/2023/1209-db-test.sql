--liquibase formatted sql

--changeset franklin:20231209:01
CREATE TABLE seller (
    id INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL
);

--changeset poliana:20231209:02
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255),
    seller_id INT NOT NULL,
    CONSTRAINT fk_category_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

--changeset franklin:20231209:03
CREATE TABLE client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    phone_num VARCHAR(20) NOT NULL,
    name VARCHAR(50) NOT NULL,
    seller_id INT NOT NULL,
    CONSTRAINT fk_client_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

--changeset franklin:20231209:04
CREATE TABLE purchase_order (
    id INT PRIMARY KEY AUTO_INCREMENT,
    purchase DATE NOT NULL,
    settlement DATE,
    receipt VARCHAR(255),
    client_id INT NOT NULL,
    seller_id INT NOT NULL,
    CONSTRAINT fk_purchase_order_client
        FOREIGN KEY (client_id) REFERENCES client (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_purchase_order_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

--changeset franklin:20231209:05
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    stock SMALLINT UNSIGNED,
    quotation DECIMAL(6,2),
    category_id INT,
    seller_id INT NOT NULL,
    CONSTRAINT fk_product_category
        FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT fk_product_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

--changeset poliana:20231209:06
CREATE TABLE product_purchase_order (
    purchase_order_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (purchase_order_id, product_id),
    CONSTRAINT fk_product_purchase_order_purchase_order
        FOREIGN KEY (purchase_order_id) REFERENCES purchase_order (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_product_purchase_order_product
        FOREIGN KEY (product_id) REFERENCES product (id)
);
