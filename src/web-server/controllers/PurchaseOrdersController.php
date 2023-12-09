<?php

namespace app\controllers;

use app\components\SellerOwnedRecordsTrait;
use app\models\Product;
use app\models\PurchaseOrder;

class PurchaseOrdersController extends ActiveController
{
    use SellerOwnedRecordsTrait;
    public $modelClass = 'app\models\PurchaseOrder';

    /**
     * @throws ForbiddenHttpException
     */
    public function actionIndex()
    {
        return $this->getSellerOwnedRecords(new PurchaseOrder());
    }

    /**
     * Create purchase order with products attached to it
     *
     * @return [type]
     * 
     */
    public function actionCreateOrderWithProducts()
    {
        $request = \Yii::$app->request;
        $transaction = \Yii::$app->db->beginTransaction();

        try {
            // Dados da ordem de compra
            $orderData = $request->post('orderData');

            // Crie e salve a ordem de compra
            $order = new PurchaseOrder();
            $order->attributes = $orderData;

            if (!$order->save()) {
                throw new \Exception('Erro ao salvar a ordem de compra.');
            }

            // Dados dos produtos relacionados
            $productsData = $request->post('productsData');

            // Vincule os produtos à ordem de compra
            foreach ($productsData as $productData) {
                $product = Product::find()->where(['id' => $productData['id']])->one();
                $order->link('products', $product, ['price' => $productData['price'], 'quantity' => $productData['quantity']]);
            }

            $transaction->commit();

            return ['success' => true, 'message' => 'Ordem de compra e produtos cadastrados com sucesso.'];
        } catch (\Exception $e) {
            $transaction->rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
