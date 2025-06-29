<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%purchase_order}}`.
 */
class m250629_181158_create_purchase_order_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%purchase_order}}', [
            'id' => $this->primaryKey(),
            'purchase' => $this->date()->notNull(),
            'settlement' => $this->date()->null(),
            'receipt' => $this->string(255)->null(),
            'client_id' => $this->integer()->notNull(),
            'seller_id' => $this->integer()->notNull(),
        ]);

        $this->createIndex(
            'idx-purchase_order-client_id',
            '{{%purchase_order}}',
            'client_id'
        );

        $this->createIndex(
            'idx-purchase_order-seller_id',
            '{{%purchase_order}}',
            'seller_id'
        );

        $this->addForeignKey(
            'fk-purchase_order-client_id',
            '{{%purchase_order}}',
            'client_id',
            '{{%client}}',
            'id',
            'CASCADE'
        );

        $this->addForeignKey(
            'fk-purchase_order-seller_id',
            '{{%purchase_order}}',
            'seller_id',
            '{{%seller}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-purchase_order-client_id', '{{%purchase_order}}');
        $this->dropForeignKey('fk-purchase_order-seller_id', '{{%purchase_order}}');

        $this->dropIndex('idx-purchase_order-client_id', '{{%purchase_order}}');
        $this->dropIndex('idx-purchase_order-seller_id', '{{%purchase_order}}');

        $this->dropTable('{{%purchase_order}}');
    }
}
