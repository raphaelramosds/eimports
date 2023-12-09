<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product_purchase_order".
 *
 * @property int $purchase_order_id
 * @property int $product_id
 * @property float $price
 * @property int $quantity
 *
 * @property Product $product
 * @property PurchaseOrder $purchaseOrder
 */
class ProductPurchaseOrder extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product_purchase_order';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['purchase_order_id', 'product_id', 'price', 'quantity'], 'required'],
            [['purchase_order_id', 'product_id', 'quantity'], 'integer'],
            [['price'], 'number'],
            [['purchase_order_id', 'product_id'], 'unique', 'targetAttribute' => ['purchase_order_id', 'product_id']],
            [['product_id'], 'exist', 'skipOnError' => true, 'targetClass' => Product::class, 'targetAttribute' => ['product_id' => 'id']],
            [['purchase_order_id'], 'exist', 'skipOnError' => true, 'targetClass' => PurchaseOrder::class, 'targetAttribute' => ['purchase_order_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'purchase_order_id' => 'Purchase Order ID',
            'product_id' => 'Product ID',
            'price' => 'Price',
            'quantity' => 'Quantity',
        ];
    }

    /**
     * Gets query for [[Product]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProduct()
    {
        return $this->hasOne(Product::class, ['id' => 'product_id']);
    }

    /**
     * Gets query for [[PurchaseOrder]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getPurchaseOrder()
    {
        return $this->hasOne(PurchaseOrder::class, ['id' => 'purchase_order_id']);
    }
}
