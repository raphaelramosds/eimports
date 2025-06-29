<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%category}}`.
 */
class m250629_180638_create_category_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%category}}', [
            'id' => $this->primaryKey(),
            'description' => $this->string(50)->null(),
            'seller_id' => $this->integer()->notNull(),
        ]);

        $this->createIndex(
            'idx-category-seller_id',
            '{{%category}}',
            'seller_id'
        );

        $this->addForeignKey(
            'fk-category-seller_id',
            '{{%category}}',
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
            'fk-category-seller_id',
            '{{%category}}'
        );

        $this->dropIndex(
            'idx-category-seller_id',
            '{{%category}}'
        );

        $this->dropTable('{{%category}}');
    }
}
