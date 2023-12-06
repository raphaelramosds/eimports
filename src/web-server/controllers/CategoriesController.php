<?php

namespace app\controllers;

use app\models\Category;
use app\components\SellerOwnedRecordsTrait;
use yii\web\ForbiddenHttpException;

class CategoriesController extends ActiveController
{
    use SellerOwnedRecordsTrait;
    public $modelClass = 'app\models\Category';

    /**
     * @throws ForbiddenHttpException
     */
    public function actionIndex()
    {
        return $this->getSellerOwnedRecords(new Category());
    }
}
