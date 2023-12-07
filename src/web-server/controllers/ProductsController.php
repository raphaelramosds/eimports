<?php

namespace app\controllers;

use app\components\SellerOwnedRecordsTrait;
use app\models\Product;

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
}
