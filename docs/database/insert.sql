-- Inserir vendedores
INSERT INTO seller (id, login, password, name) VALUES
(1, 'admin', 'root', 'Admin'),
(2, 'visitante', 'root', 'Visitante');

-- Inserir categorias
INSERT INTO category (id, description, seller_id) VALUES
(1, 'Calçados', 1),
(2, 'Celulares', 2),
(3, 'Roupas', 1),
(4, 'Eletrônicos', 2),
(5, 'Acessórios', 1);

-- Inserir clientes
INSERT INTO client (id, phone_num, name, seller_id) VALUES
(1, '986314164', 'Daniel', 2),
(2, '987654321', 'Ada', 1),
(3, '999888777', 'Agostinho', 2),
(4, '955443322', 'Samuel', 1),
(5, '933221100', 'Kleiton', 2);

-- Inserir pedidos
INSERT INTO purchase_order (id, purchase, settlement, receipt, client_id, seller_id) VALUES
(1, '2023-01-15', '2023-01-20', 'Receipt_001', 1, 1),
(2, '2023-02-10', '2023-02-15', 'Receipt_002', 2, 2),
(3, '2023-03-05', '2023-03-10', 'Receipt_003', 3, 1),
(4, '2023-04-20', '2023-04-25', 'Receipt_004', 4, 2),
(5, '2023-05-15', '2023-05-20', 'Receipt_005', 5, 1);

-- Inserir produtos
INSERT INTO product (id, name, description, stock, quotation, category_id, seller_id) VALUES
(1, 'Apple iPhone 11 (64 GB) Preto', 'Tela LCD Liquid Retina HD de 6,1 polegadas', 10, 2516, 2, 1),
(2, 'Nike Air Max 270', 'Tênis esportivo confortável e leve', 15, 399, 1, 1),
(3, 'Adidas Ultraboost 21', 'Tênis de corrida responsivo e leve', 20, 499, 1, 1),
(4, 'Camiseta Polo Ralph Lauren', 'Camiseta polo de algodão', 30, 129, 3, 1),
(5, 'Calça Jeans Skinny', 'Calça jeans ajustada ao corpo', 25, 89, 3, 1),
(6, 'Samsung Galaxy S20', 'Smartphone com tela de alta resolução', 12, 1899, 4, 2),
(7, 'Sony PlayStation 5', 'Console de videogame de última geração', 5, 2999, 4, 2),
(8, 'Bolsa de Couro', 'Bolsa elegante e espaçosa', 18, 299, 5, 1),
(9, 'Óculos de Sol Ray-Ban', 'Óculos de sol clássicos e estilosos', 22, 199, 5, 1),
(10, 'Nike Air Force 1', 'Tênis clássico e estiloso', 20, 299, 1, 1),
(11, 'Vestido Floral', 'Vestido elegante com estampa floral', 15, 179, 3, 1),
(12, 'Xiaomi Redmi Note 10', 'Smartphone com excelente custo-benefício', 18, 899, 2, 2),
(13, 'Fone de Ouvido Bluetooth JBL', 'Fones de ouvido sem fio de alta qualidade', 25, 149, 4, 2),
(14, 'Bolsa de Viagem', 'Bolsa espaçosa para viagens', 12, 249, 5, 1),
(15, 'Samsung Galaxy A52', 'Smartphone com câmera versátil e bom desempenho', 22, 1199, 2, 2),
(16, 'Monitor Gamer Acer', 'Monitor de alta taxa de atualização para jogos', 8, 1599, 4, 2),
(17, 'Sony WH-1000XM4', 'Fone de ouvido com cancelamento de ruído', 15, 1299, 4, 2),
(18, 'Xbox Series X', 'Console de videogame de próxima geração', 6, 3499, 4, 2),
(19, 'Mochila Executiva', 'Mochila resistente para uso profissional', 20, 299, 5, 1),
(20, 'Câmera Sony Alpha 7 III', 'Câmera mirrorless de alta performance', 10, 2999, 4, 2),
(21, 'iPad Pro 12.9 polegadas', 'Tablet potente com tela Liquid Retina XDR', 12, 3499, 4, 2),
(22, 'Impressora HP LaserJet Pro', 'Impressora laser de alta velocidade', 18, 799, 4, 2),
(23, 'Aspirador de Pó Robô Xiaomi', 'Aspirador inteligente controlado por app', 14, 699, 4, 2),
(24, 'Smartwatch Garmin Forerunner', 'Relógio inteligente para monitoramento esportivo', 25, 899, 4, 2);

-- Inserir relações entre produtos e pedidos
INSERT INTO product_purchase_order (purchase_order_id, product_id, price, quantity) VALUES
(1, 1, 2516, 3),
(1, 2, 399, 5),
(2, 3, 499, 2),
(2, 4, 129, 10),
(3, 5, 89, 8),
(3, 6, 1899, 2),
(3, 1, 2516, 2),
(4, 7, 2999, 1),
(4, 8, 299, 4),
(5, 9, 199, 7),
(5, 10, 299, 5);
