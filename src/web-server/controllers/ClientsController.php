<?php

namespace app\controllers;

use app\models\Client;
use app\components\SellerOwnedRecordsTrait;
use yii\web\ForbiddenHttpException;

class ClientsController extends ActiveController
{
    use SellerOwnedRecordsTrait;
    public $modelClass = 'app\models\Client';

    /**
     * @throws ForbiddenHttpException
     */
    public function actionIndex()
    {
        return $this->getSellerOwnedRecords(new Client());
    }
}
