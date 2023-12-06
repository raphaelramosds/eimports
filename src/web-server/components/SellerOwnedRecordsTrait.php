<?php

namespace app\components;

use yii\web\ForbiddenHttpException;

trait SellerOwnedRecordsTrait
{
    /**
     * Returns only the records owned by a seller
     * @param $modelClass
     * @return mixed
     * @throws ForbiddenHttpException
     */
    public function getSellerOwnedRecords($modelClass)
    {
        $userId = \Yii::$app->user->getId();

        if ($userId !== null) {
            $records = $modelClass::find()
                ->where(['seller_id' => $userId])
                ->all();

            return $records;
        } else {
            throw new \yii\web\ForbiddenHttpException('You are not authorized to access this record');
        }
    }
}