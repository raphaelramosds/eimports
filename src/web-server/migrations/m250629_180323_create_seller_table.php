<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%seller}}`.
 */
class m250629_180323_create_seller_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%seller}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull(),
            'login' => $this->string(25)->notNull()->unique(),
            'password' => $this->string(255)->notNull(),
            'access_token' => $this->string(512)->unique()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%seller}}');
    }
}
