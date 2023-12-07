
CREATE TABLE seller (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    login VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    seller_id INT NOT NULL,
    CONSTRAINT fk_category_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

CREATE TABLE client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    phone_num INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    seller_id INT NOT NULL,
    CONSTRAINT fk_client_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

CREATE TABLE order_management (
    id INT PRIMARY KEY AUTO_INCREMENT,
    purchase VARCHAR(255) NOT NULL,
    low VARCHAR(255) NOT NULL,
    receipt VARCHAR(255) NOT NULL,
    client_id INT NOT NULL,
    seller_id INT NOT NULL,
    CONSTRAINT fk_order_client
        FOREIGN KEY (client_id) REFERENCES client (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_order_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    stock SMALLINT UNSIGNED,
    quotation DECIMAL(6,2),
    category_id INT,
    seller_id INT NOT NULL,
    CONSTRAINT fk_product_category
        FOREIGN KEY (category_id) REFERENCES category (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_product_seller
        FOREIGN KEY (seller_id) REFERENCES seller (id)
        ON DELETE CASCADE
);

CREATE TABLE product_order (
    order_management_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    quantity INT NOT NULL,
    CONSTRAINT fk_order_product
        FOREIGN KEY (order_management_id) REFERENCES order_management (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_product_order
        FOREIGN KEY (product_id) REFERENCES product (id)
        ON DELETE CASCADE
);