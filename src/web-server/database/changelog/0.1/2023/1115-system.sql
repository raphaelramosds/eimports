--liquibase formatted sql

--changeset raphael:20231115:00
CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL
);

--changeset raphael:20231115:01
CREATE TABLE seller (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    usuario_id INT,
    CONSTRAINT `fk_seller_user`
        FOREIGN KEY (usuario_id) REFERENCES user (id)
        ON DELETE CASCADE
);

--changeset raphael:20231115:02
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    seller_id INT NOT NULL,
    CONSTRAINT `fk_category_seller`
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

--changeset raphael:20231115:03
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    stock SMALLINT UNSIGNED,
    quotation DECIMAL(6,2),
    category_id INT,
    seller_id INT NOT NULL,
    CONSTRAINT `fk_product_category`
        FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT `fk_product_seller`
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);