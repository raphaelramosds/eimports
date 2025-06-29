<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%product_purchase_order}}`.
 */
class m250629_181211_create_product_purchase_order_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%product_purchase_order}}', [
            'purchase_order_id' => $this->integer()->notNull(),
            'product_id' => $this->integer()->notNull(),
            'price' => $this->decimal(6, 2)->notNull(),
            'quantity' => $this->integer()->notNull(),
            'PRIMARY KEY(purchase_order_id, product_id)',
        ]);

        $this->createIndex(
            'idx-product_purchase_order-purchase_order_id',
            '{{%product_purchase_order}}',
            'purchase_order_id'
        );

        $this->createIndex(
            'idx-product_purchase_order-product_id',
            '{{%product_purchase_order}}',
            'product_id'
        );

        $this->addForeignKey(
            'fk-product_purchase_order-purchase_order_id',
            '{{%product_purchase_order}}',
            'purchase_order_id',
            '{{%purchase_order}}',
            'id',
            'CASCADE'
        );

        $this->addForeignKey(
            'fk-product_purchase_order-product_id',
            '{{%product_purchase_order}}',
            'product_id',
            '{{%product}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-product_purchase_order-purchase_order_id', '{{%product_purchase_order}}');
        $this->dropForeignKey('fk-product_purchase_order-product_id', '{{%product_purchase_order}}');

        $this->dropIndex('idx-product_purchase_order-purchase_order_id', '{{%product_purchase_order}}');
        $this->dropIndex('idx-product_purchase_order-product_id', '{{%product_purchase_order}}');

        $this->dropTable('{{%product_purchase_order}}');
    }
}
