<?php

namespace app\commands;

use app\models\Category;
use app\models\Client;
use app\models\Product;
use app\models\ProductPurchaseOrder;
use app\models\PurchaseOrder;
use app\models\Seller;
use yii\console\Controller;

class BatchController extends Controller
{
    /**
     * Insert random record into the database
     *
     * @return void
     * 
     */
    public function actionSeed()
    {
        // Populate sellers
        $sellers = [
            new Seller(['id' => 1, 'name' => 'Admin', 'login' => 'admin', 'password' => 'root']),
            new Seller(['id' => 2, 'name' => 'Visitante', 'login' => 'visitante', 'password' => 'vis']),
        ];

        foreach ($sellers as $seller) {
            $seller->save();
        }

        // Populate categories
        $categories = [
            ['id' => 1, 'description' => 'Calçados', 'seller_id' => '1'],
            ['id' => 2, 'description' => 'Celulares', 'seller_id' => '2'],
            ['id' => 3, 'description' => 'Roupas', 'seller_id' => '1'],
            ['id' => 4, 'description' => 'Eletrônicos', 'seller_id' => '2'],
            ['id' => 5, 'description' => 'Acessórios', 'seller_id' => '1'],
        ];

        \Yii::$app->db->createCommand()
            ->batchInsert(Category::tableName(), array_keys($categories[0]), $categories)
            ->execute();

        // Populate products
        $products = [
            ['id' => 1, 'name' => 'Apple iPhone 11 (64 GB) Preto', 'description' => 'Tela LCD Liquid Retina HD de 6,1 polegadas', 'stock' => 10, 'quotation' => 2516, 'category_id' => 2, 'seller_id' => 1],
            ['id' => 2, 'name' => 'Nike Air Max 270', 'description' => 'Tênis esportivo confortável e leve', 'stock' => 15, 'quotation' => 399, 'category_id' => 1, 'seller_id' => 1],
            ['id' => 3, 'name' => 'Adidas Ultraboost 21', 'description' => 'Tênis de corrida responsivo e leve', 'stock' => 20, 'quotation' => 499, 'category_id' => 1, 'seller_id' => 1],
            ['id' => 4, 'name' => 'Camiseta Polo Ralph Lauren', 'description' => 'Camiseta polo de algodão', 'stock' => 30, 'quotation' => 129, 'category_id' => 3, 'seller_id' => 1],
            ['id' => 5, 'name' => 'Calça Jeans Skinny', 'description' => 'Calça jeans ajustada ao corpo', 'stock' => 25, 'quotation' => 89, 'category_id' => 3, 'seller_id' => 1],
            ['id' => 6, 'name' => 'Samsung Galaxy S20', 'description' => 'Smartphone com tela de alta resolução', 'stock' => 12, 'quotation' => 1899, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 7, 'name' => 'Sony PlayStation 5', 'description' => 'Console de videogame de última geração', 'stock' => 5, 'quotation' => 2999, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 8, 'name' => 'Bolsa de Couro', 'description' => 'Bolsa elegante e espaçosa', 'stock' => 18, 'quotation' => 299, 'category_id' => 5, 'seller_id' => 1],
            ['id' => 9, 'name' => 'Óculos de Sol Ray-Ban', 'description' => 'Óculos de sol clássicos e estilosos', 'stock' => 22, 'quotation' => 199, 'category_id' => 5, 'seller_id' => 1],
            ['id' => 10, 'name' => 'Nike Air Force 1', 'description' => 'Tênis clássico e estiloso', 'stock' => 20, 'quotation' => 299, 'category_id' => 1, 'seller_id' => 1],
            ['id' => 11, 'name' => 'Vestido Floral', 'description' => 'Vestido elegante com estampa floral', 'stock' => 15, 'quotation' => 179, 'category_id' => 3, 'seller_id' => 1],
            ['id' => 12, 'name' => 'Xiaomi Redmi Note 10', 'description' => 'Smartphone com excelente custo-benefício', 'stock' => 18, 'quotation' => 899, 'category_id' => 2, 'seller_id' => 2],
            ['id' => 13, 'name' => 'Fone de Ouvido Bluetooth JBL', 'description' => 'Fones de ouvido sem fio de alta qualidade', 'stock' => 25, 'quotation' => 149, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 14, 'name' => 'Bolsa de Viagem', 'description' => 'Bolsa espaçosa para viagens', 'stock' => 12, 'quotation' => 249, 'category_id' => 5, 'seller_id' => 1],
            ['id' => 15, 'name' => 'Samsung Galaxy A52', 'description' => 'Smartphone com câmera versátil e bom desempenho', 'stock' => 22, 'quotation' => 1199, 'category_id' => 2, 'seller_id' => 2],
            ['id' => 16, 'name' => 'Monitor Gamer Acer', 'description' => 'Monitor de alta taxa de atualização para jogos', 'stock' => 8, 'quotation' => 1599, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 17, 'name' => 'Sony WH-1000XM4', 'description' => 'Fone de ouvido com cancelamento de ruído', 'stock' => 15, 'quotation' => 1299, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 18, 'name' => 'Xbox Series X', 'description' => 'Console de videogame de próxima geração', 'stock' => 6, 'quotation' => 3499, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 19, 'name' => 'Mochila Executiva', 'description' => 'Mochila resistente para uso profissional', 'stock' => 20, 'quotation' => 299, 'category_id' => 5, 'seller_id' => 1],
            ['id' => 20, 'name' => 'Câmera Sony Alpha 7 III', 'description' => 'Câmera mirrorless de alta performance', 'stock' => 10, 'quotation' => 2999, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 21, 'name' => 'iPad Pro 12.9 polegadas', 'description' => 'Tablet potente com tela Liquid Retina XDR', 'stock' => 12, 'quotation' => 3499, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 22, 'name' => 'Impressora HP LaserJet Pro', 'description' => 'Impressora laser de alta velocidade', 'stock' => 18, 'quotation' => 799, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 23, 'name' => 'Aspirador de Pó Robô Xiaomi', 'description' => 'Aspirador inteligente controlado por app', 'stock' => 14, 'quotation' => 699, 'category_id' => 4, 'seller_id' => 2],
            ['id' => 24, 'name' => 'Smartwatch Garmin Forerunner', 'description' => 'Relógio inteligente para monitoramento esportivo', 'stock' => 25, 'quotation' => 899, 'category_id' => 4, 'seller_id' => 2],
        ];
        \Yii::$app->db->createCommand()
            ->batchInsert(Product::tableName(), array_keys($products[1]), $products)
            ->execute();

        // Populate clients
        $clients = [
            ['id' => 1, 'phone_num' => '986314164', 'name' => 'Daniel', 'seller_id' => '2'],
            ['id' => 2, 'phone_num' => '987654321', 'name' => 'Ada', 'seller_id' => '1'],
            ['id' => 3, 'phone_num' => '999888777', 'name' => 'Agostinho', 'seller_id' => '2'],
            ['id' => 4, 'phone_num' => '955443322', 'name' => 'Samuel', 'seller_id' => '1'],
            ['id' => 5, 'phone_num' => '933221100', 'name' => 'Kleiton', 'seller_id' => '2'],
        ];
        \Yii::$app->db->createCommand()
            ->batchInsert(Client::tableName(), array_keys($clients[1]), $clients)
            ->execute();

        // Populate purchase orders
        $purchase_orders = [
            ['id' => 1, 'purchase' => '2023-01-15', 'settlement' => '2023-01-15', 'receipt' => 'Receipt_001', 'client_id' => 1, 'seller_id' => 1],
            ['id' => 2, 'purchase' => '2023-01-10', 'settlement' => '2023-01-10', 'receipt' => 'Receipt_002', 'client_id' => 2, 'seller_id' => 2],
            ['id' => 3, 'purchase' => '2023-02-05', 'settlement' => '2023-02-06', 'receipt' => 'Receipt_003', 'client_id' => 3, 'seller_id' => 1],
            ['id' => 4, 'purchase' => '2023-02-20', 'settlement' => '2023-02-21', 'receipt' => 'Receipt_004', 'client_id' => 4, 'seller_id' => 2],
            ['id' => 5, 'purchase' => '2023-02-15', 'settlement' => '2023-02-16', 'receipt' => 'Receipt_005', 'client_id' => 5, 'seller_id' => 1],
        ];
        \Yii::$app->db->createCommand()
            ->batchInsert(PurchaseOrder::tableName(), array_keys($purchase_orders[1]), $purchase_orders)
            ->execute();

        // Populate product in purchase orders
        $products_purchase_order = [
            ['purchase_order_id' => 1, 'product_id' => 1, 'price' => 2516, 'quantity' => 3],
            ['purchase_order_id' => 1, 'product_id' => 2, 'price' => 399, 'quantity' => 5],
            ['purchase_order_id' => 2, 'product_id' => 3, 'price' => 499, 'quantity' => 2],
            ['purchase_order_id' => 2, 'product_id' => 4, 'price' => 129, 'quantity' => 10],
            ['purchase_order_id' => 3, 'product_id' => 5, 'price' => 89, 'quantity' => 8],
            ['purchase_order_id' => 3, 'product_id' => 6, 'price' => 1889, 'quantity' => 2],
            ['purchase_order_id' => 3, 'product_id' => 1, 'price' => 2516, 'quantity' => 2],
            ['purchase_order_id' => 4, 'product_id' => 7, 'price' => 2999, 'quantity' => 1],
            ['purchase_order_id' => 4, 'product_id' => 8, 'price' => 299, 'quantity' => 4],
            ['purchase_order_id' => 5, 'product_id' => 9, 'price' => 199, 'quantity' => 7],
            ['purchase_order_id' => 5, 'product_id' => 10, 'price' => 299, 'quantity' => 5],
        ];

        $columns = ['purchase_order_id', 'product_id', 'price', 'quantity'];

        \Yii::$app->db->createCommand()
            ->batchInsert(ProductPurchaseOrder::tableName(), $columns, $products_purchase_order)
            ->execute();
    }

    /**
     * Delete all recors from database
     *
     * @return void
     * 
     */
    public function actionFresh()
    {
        \Yii::$app->db->createCommand('DELETE FROM product_purchase_order')
            ->execute();
        \Yii::$app->db->createCommand('DELETE FROM purchase_order')
            ->execute();
        \Yii::$app->db->createCommand('DELETE FROM product')
            ->execute();
        \Yii::$app->db->createCommand('DELETE FROM category')
            ->execute();
        \Yii::$app->db->createCommand('DELETE FROM client')
            ->execute();
    }
}
