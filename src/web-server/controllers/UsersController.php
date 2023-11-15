<?php

namespace app\controllers;

use yii\rest\ActiveController;

class UsersController extends ActiveController
{
   public $modelClass = 'app\models\User';
}