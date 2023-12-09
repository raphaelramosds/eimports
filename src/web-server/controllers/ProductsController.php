<?php

namespace app\controllers;

use app\components\SellerOwnedRecordsTrait;
use app\models\Product;
use yii\web\Response;

class ProductsController extends ActiveController
{
    use SellerOwnedRecordsTrait;
    public $modelClass = 'app\models\Product';

    /**
     * @throws ForbiddenHttpException
     */
    public function actionIndex()
    {
        return $this->getSellerOwnedRecords(new Product());
    }

    /**
     * Calculate the turn over of a specific product over the months
     *
     * @param mixed $id
     * 
     * @return [type]
     * 
     */
    public function actionTurnover($id)
    {
        $db = \Yii::$app->db;

        $sql = <<<SQL
            SELECT 
                DATE_FORMAT(po.purchase, '%Y-%m') AS month_year,
                SUM(CASE WHEN ppo.product_id = :id THEN ppo.quantity ELSE 0 END) as qt,
                SUM(ppo.quantity) AS total_quantity,
                SUM(CASE WHEN ppo.product_id = :id THEN ppo.quantity ELSE 0 END) / SUM(ppo.quantity) AS ratio
            FROM 
                product_purchase_order AS ppo
            JOIN 
                purchase_order AS po ON ppo.purchase_order_id = po.id
            WHERE
                po.seller_id = :seller_id AND po.settlement IS NOT NULL
            GROUP BY 
                month_year;
        SQL;

        $command = $db->createCommand($sql);
        $command->bindValue(':id', $id);
        $command->bindValue(':seller_id', \Yii::$app->user->getId());
        $result = $command->queryAll();

        \Yii::$app->response->format = Response::FORMAT_JSON;
        return $result;
    }
}
