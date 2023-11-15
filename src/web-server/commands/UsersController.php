<?php

namespace app\commands;

use app\models\User;

use yii\console\Controller;
use yii\console\ExitCode;
use yii\helpers\Console;

class UsersController extends Controller
{
    public function actionCreate($login, $password)
    {
        $user = new User([
            'login' => $login,
            'password' => $password
        ]);
        if ($user->save()) {
            $this->stdout("Usuário criado. ID: {$user->id}.\n", Console::FG_GREEN);
            return ExitCode::OK;
        } else {
            $this->stderr("Erro ao criar usuario: \n", Console::FG_GREEN);
        }
    }
}
