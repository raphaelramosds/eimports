<?php

namespace app\controllers;

use app\models\Seller;
use yii\web\HttpException;

class SellersController extends \yii\rest\ActiveController
{
   public $modelClass = 'app\models\Seller';
    public function actionLogin(): array
    {
        $bodyParams = \Yii::$app->getRequest()->getBodyParams();

        // Ensure both login and password are provided in the request
        if (!isset($bodyParams['login'], $bodyParams['password'])) {
            throw new HttpException(400, 'Login and password are required');
        }

        $login = $bodyParams['login'];
        $password = $bodyParams['password'];

        // Find the seller by login
        $seller = Seller::findOne(['login' => $login]);

        // Check if the seller exists and validate the password
        if ($seller !== null && \Yii::$app->security->validatePassword($password, $seller->password)) {
            // Remove password from response;
            unset($seller['password']);
            return [
                'msg' => 'You\'ve logged in',
                'data' => $seller
            ];
        } else {
            // Seller not found or password incorrect
            throw new HttpException(401, 'Login or password incorrect');
        }
    }
}
