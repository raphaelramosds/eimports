<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;

/**
 * This is the model class for table "category".
 *
 * @property int $id
 * @property string|null $description
 * @property int $seller_id
 *
 * @property Product[] $products
 * @property Seller $seller
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'category';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description'], 'required'],
            [['seller_id'], 'integer'],
            [['description'], 'string', 'max' => 50],
        ];
    }

    /**
     * @return array[]
     */
    public function behaviors()
    {
        return [
            // Fill seller identifier on category table
            [
                'class' => BlameableBehavior::class,
                'createdByAttribute' => 'seller_id',
                'updatedByAttribute' => false
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'description' => 'Description',
            'seller_id' => 'Seller ID',
        ];
    }
}
