<?php

namespace app\controllers;

use app\models\Seller;
use yii\filters\auth\HttpBasicAuth;
use yii\rest\ActiveController;

class SellersController extends ActiveController
{
   public $modelClass = 'app\models\Seller';

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

   public function actionLogin()
   {
      return \Yii::$app->user->identity;
   }
}
