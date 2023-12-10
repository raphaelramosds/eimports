<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

/**
 * This is the model class for table "purchase_order".
 *
 * @property int $id
 * @property string $purchase
 * @property string|null $settlement
 * @property string|null $receipt
 * @property int $client_id
 * @property int $seller_id
 *
 * @property Client $client
 * @property ProductPurchaseOrder[] $productPurchaseOrders
 * @property Product[] $products
 * @property Seller $seller
 */
class PurchaseOrder extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'purchase_order';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['client_id'], 'required'],
            [['purchase', 'settlement'], 'safe'],
            [['client_id', 'seller_id'], 'integer'],
            [['receipt'], 'string', 'max' => 255],
            [['client_id'], 'exist', 'skipOnError' => true, 'targetClass' => Client::class, 'targetAttribute' => ['client_id' => 'id']],
            [['seller_id'], 'exist', 'skipOnError' => true, 'targetClass' => Seller::class, 'targetAttribute' => ['seller_id' => 'id']],
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
            // Fill purchase timestamp
            [
                'class' => TimestampBehavior::class,
                'createdAtAttribute' => 'purchase',
                'updatedAtAttribute' => false,
                'value' => new Expression('NOW()'),
            ]
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'purchase' => 'Purchase',
            'settlement' => 'Settlement',
            'receipt' => 'Receipt',
            'client_id' => 'Client ID',
            'seller_id' => 'Seller ID',
        ];
    }

    /**
     * Fields of purchase orders visible on response
     *
     * @return [type]
     * 
     */
    public function fields()
    {
        return ['id', 'purchase', 'settlement', 'client'];
    }

    /**
     * Fields visible via expand parameter
     *
     * @return [type]
     * 
     */
    public function extraFields()
    {
        return ['products'];
    }

    /**
     * Gets query for [[Client]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::class, ['id' => 'client_id']);
    }

    /**
     * Gets query for [[ProductPurchaseOrders]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProductPurchaseOrders()
    {
        return $this->hasMany(ProductPurchaseOrder::class, ['purchase_order_id' => 'id']);
    }

    /**
     * Gets query for [[Products]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProducts()
    {
        return $this->hasMany(Product::class, ['id' => 'product_id'])->viaTable('product_purchase_order', ['purchase_order_id' => 'id']);
    }

    /**
     * Gets query for [[Seller]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getSeller()
    {
        return $this->hasOne(Seller::class, ['id' => 'seller_id']);
    }
}
