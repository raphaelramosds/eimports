<?php

namespace app\controllers;

use app\models\Category;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\Cors;
use yii\web\ForbiddenHttpException;

class ActiveController extends  \yii\rest\ActiveController
{
    public function actions()
    {
        $actions = parent::actions();
        // Disable the default index action
        unset($actions['index']);
        return $actions;
    }
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator']['authMethods'] = [
            HttpBearerAuth::class
        ];
        $behaviors['corsFilter'] = [
            'class' => Cors::class
        ];
        return $behaviors;
    }

    /**
     * @param $action
     * @param Category $model
     * @param $params
     * @return void
     * @throws ForbiddenHttpException
     */
    public function checkAccess($action, $model = null, $params = [])
    {
        if (in_array($action, ['delete', 'update']) && $model->seller_id !== \Yii::$app->user->id) {
            throw new ForbiddenHttpException("You do not have permission to change this record");
        }
    }
}