<?php

namespace app\controllers;

use app\models\Category;
use yii\filters\auth\HttpBearerAuth;
use yii\web\ForbiddenHttpException;

class ActiveController extends  \yii\rest\ActiveController
{
    public function actions()
    {
        $actions = parent::actions();

        unset($actions['index']);

        return $actions;
    }
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
        ];

        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::class
        ];

        $behaviors['authenticator']['except'] = ['options'];

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
