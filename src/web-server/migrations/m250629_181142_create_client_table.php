<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%client}}`.
 */
class m250629_181142_create_client_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%client}}', [
            'id' => $this->primaryKey(),
            'phone_num' => $this->string(20)->notNull(),
            'name' => $this->string(50)->notNull(),
            'seller_id' => $this->integer()->notNull(),
        ]);

        $this->createIndex(
            'idx-client-seller_id',
            '{{%client}}',
            'seller_id'
        );

        $this->addForeignKey(
            'fk-client-seller_id',
            '{{%client}}',
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
// remove foreign key
        $this->dropForeignKey(
            'fk-client-seller_id',
            '{{%client}}'
        );

        // remove índice
        $this->dropIndex(
            'idx-client-seller_id',
            '{{%client}}'
        );

        $this->dropTable('{{%client}}');
    }
}
