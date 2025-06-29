CREATE TABLE seller
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(50)  NOT NULL,
    login        VARCHAR(25)  NOT NULL UNIQUE,
    password     VARCHAR(255) NOT NULL,
    access_token VARCHAR(512) UNIQUE
);

CREATE TABLE category
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(50),
    seller_id   INT NOT NULL,
    INDEX       idx_category_seller_id (seller_id),
    CONSTRAINT fk_category_seller FOREIGN KEY (seller_id) REFERENCES seller (id) ON DELETE CASCADE
);

CREATE TABLE product
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    stock       SMALLINT UNSIGNED,
    quotation   DECIMAL(6, 2),
    category_id INT,
    seller_id   INT         NOT NULL,
    INDEX       idx_product_category_id (category_id),
    INDEX       idx_product_seller_id (seller_id),
    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE SET NULL,
    CONSTRAINT fk_product_seller FOREIGN KEY (seller_id) REFERENCES seller (id) ON DELETE CASCADE
);

CREATE TABLE client
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    phone_num VARCHAR(20) NOT NULL,
    name      VARCHAR(50) NOT NULL,
    seller_id INT         NOT NULL,
    INDEX     idx_client_seller_id (seller_id),
    CONSTRAINT fk_client_seller FOREIGN KEY (seller_id) REFERENCES seller (id) ON DELETE CASCADE
);

CREATE TABLE purchase_order
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    purchase   DATE NOT NULL,
    settlement DATE,
    receipt    VARCHAR(255),
    client_id  INT  NOT NULL,
    seller_id  INT  NOT NULL,
    INDEX      idx_purchase_order_client_id (client_id),
    INDEX      idx_purchase_order_seller_id (seller_id),
    CONSTRAINT fk_purchase_order_client FOREIGN KEY (client_id) REFERENCES client (id) ON DELETE CASCADE,
    CONSTRAINT fk_purchase_order_seller FOREIGN KEY (seller_id) REFERENCES seller (id) ON DELETE CASCADE
);

CREATE TABLE product_purchase_order
(
    purchase_order_id INT           NOT NULL,
    product_id        INT           NOT NULL,
    price             DECIMAL(6, 2) NOT NULL,
    quantity          INT           NOT NULL,
    PRIMARY KEY (purchase_order_id, product_id),
    INDEX             idx_product_purchase_order_purchase_order_id (purchase_order_id),
    INDEX             idx_product_purchase_order_product_id (product_id),
    CONSTRAINT fk_product_purchase_order_purchase_order FOREIGN KEY (purchase_order_id) REFERENCES purchase_order (id) ON DELETE CASCADE,
    CONSTRAINT fk_product_purchase_order_product FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
);
