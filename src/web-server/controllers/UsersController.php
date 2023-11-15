<?php

namespace app\controllers;

use app\models\User;
use yii\filters\auth\HttpBasicAuth;
use yii\rest\ActiveController;

class UsersController extends ActiveController
{
   public $modelClass = 'app\models\User';

   public function behaviors()
   {
      $behaviors = parent::behaviors();
      $behaviors['authenticator'] = [
         'class' => HttpBasicAuth::class,
         'auth' => function ($username, $password) {
            $user = User::find()->where(['login' => $username])->one();
            if ($user && $user->validatePassword($password)) {
               return $user;
            }
            return null;
         },
      ];
      return $behaviors;
   }

   // TODO login vai retornar vendedor relacionado ao usuário
   public function actionLogin()
   {
      return \Yii::$app->user->identity;
   }
}
