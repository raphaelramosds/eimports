<?php

namespace app\controllers;

use app\components\SellerOwnedRecordsTrait;
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
}
