<?php

namespace app\commands;

use app\models\Seller;

use yii\console\Controller;
use yii\console\ExitCode;
use yii\helpers\Console;

class SellersController extends Controller
{
    public function actionCreate($name, $login, $password)
    {
        $seller = new Seller([
            'name' => $name,
            'login' => $login,
            'password' => $password
        ]);
        if ($seller->save()) {
            $this->stdout("Usuário criado. ID: {$seller->id}.\n", Console::FG_GREEN);
            return ExitCode::OK;
        } else {
            $this->stderr("Erro ao criar usuario: \n", Console::FG_GREEN);
        }
    }
}
