<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%product}}`.
 */
class m250629_180752_create_product_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%product}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull(),
            'description' => $this->string(255)->null(),
            'stock' => $this->smallInteger()->unsigned()->null(),
            'quotation' => $this->decimal(6, 2)->null(),
            'category_id' => $this->integer()->null(),
            'seller_id' => $this->integer()->notNull(),
        ]);

        $this->createIndex(
            'idx-product-category_id',
            '{{%product}}',
            'category_id'
        );

        $this->createIndex(
            'idx-product-seller_id',
            '{{%product}}',
            'seller_id'
        );

        $this->addForeignKey(
            'fk-product-category_id',
            '{{%product}}',
            'category_id',
            '{{%category}}',
            'id',
            'SET NULL'
        );

        $this->addForeignKey(
            'fk-product-seller_id',
            '{{%product}}',
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
        $this->dropForeignKey(
            'fk-product-seller_id',
            '{{%product}}'
        );

        $this->dropForeignKey(
            'fk-product-category_id',
            '{{%product}}'
        );

        $this->dropIndex('idx-product-seller_id', '{{%product}}');
        $this->dropIndex('idx-product-category_id', '{{%product}}');

        $this->dropTable('{{%product}}');
    }
}
