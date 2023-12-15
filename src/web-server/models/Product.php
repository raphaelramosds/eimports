<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;

/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property int|null $stock
 * @property float|null $quotation
 * @property int|null $category_id
 * @property int $seller_id
 *
 * @property Category $category
 * @property Seller $seller
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['stock', 'category_id', 'seller_id'], 'integer'],
            [['quotation'], 'number'],
            [['name'], 'string', 'max' => 50],
            [['description'], 'string', 'max' => 255],
            [['category_id'], 'exist', 'skipOnError' => true, 'targetClass' => Category::class, 'targetAttribute' => ['category_id' => 'id']],
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
            'name' => 'Name',
            'description' => 'Description',
            'stock' => 'Stock',
            'quotation' => 'Quotation',
            'category_id' => 'Category ID',
            'seller_id' => 'Seller ID',
        ];
    }

    /**
     * Gets query for [[Category]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::class, ['id' => 'category_id']);
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

    /**
     * @param mixed $id
     * 
     * @return [type]
     * 
     */
    public function calcTurnover($id)
    {
        $db = \Yii::$app->db;

        $sql = <<<SQL
            SELECT 
                DATE_FORMAT(po.purchase, '%Y-%m') AS month_year,
                SUM(CASE WHEN ppo.product_id = :id THEN ppo.quantity ELSE 0 END) as qt,
                SUM(ppo.quantity) AS total_quantity,
                SUM(CASE WHEN ppo.product_id = :id THEN ppo.quantity ELSE 0 END) / SUM(ppo.quantity) AS ratio
            FROM 
                product_purchase_order AS ppo
            JOIN 
                purchase_order AS po ON ppo.purchase_order_id = po.id
            WHERE
                po.seller_id = :seller_id AND po.settlement IS NOT NULL
            GROUP BY 
                month_year;
        SQL;

        $command = $db->createCommand($sql);
        $command->bindValue(':id', $id);
        $command->bindValue(':seller_id', \Yii::$app->user->getId());
        $result = $command->queryAll();

        return $result;
    }
}
