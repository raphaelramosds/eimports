<?php

namespace app\controllers;

use app\models\Category;
use app\models\Seller;
use yii\filters\auth\HttpBasicAuth;
use yii\rest\ActiveController;

class CategoriesController extends ActiveController
{
    public $modelClass = 'app\models\Category';

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBasicAuth::class,
            'auth' => function ($username, $password) {
                $seller = Seller::find()->where(['login' => $username])->one();
                if ($seller && $seller->validatePassword($password)) {
                    return $seller;
                }
                return null;
            },
        ];
        return $behaviors;
    }
}
