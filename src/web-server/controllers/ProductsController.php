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
        $product = new Product();

        $result = $product->calcTurnover($id);

        \Yii::$app->response->format = Response::FORMAT_JSON;
        
        return $result;
    }
}
