# Web server

O web server deste projeto consiste em uma API desenvolvida pelo [Yii framework](https://www.yiiframework.com/). Este documento possui os pré requisitos para criar o ambiente de desenvolvimento dessa API e a configuração do ambiente propriamente dita.

## Pré requisitos

### Instale o PHP

- Visite [PHP](https://windows.php.net/download#php-8.2)
- Baixe o arquivo Zip que está dentro de VS16 x64 Non Thread Safe (2023-Oct-24 21:53:18)
- Crie uma pasta `php` dentro de `C:\`
- Extraia os arquivos do zip nessa pasta `php`

É necessário habilitar a extensão ZIP para o Composer poder descompactar os pacotes

- Dentro da pasta `C:\php`, abra o arquivo `php` no bloco de notas
- procure pela linha `;extension=zip`
- Apague o caractere `;`

### Instale o Composer

- Visite [Composer](https://getcomposer.org/download/)
- Baixe e instale o arquivo Composer-Setup.exe 

### Instale o Liquibase

- Visite [Liquibase](https://www.liquibase.com/download?_ga=2.145749556.1694703356.1699633086-22718613.1699633086#download-liquibase)
- Baixe e instale o executável Installer for Windows


### Instale o MariaDB Server

-  Visite [MariaDB](https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.3.0)

> Na instalação do MariaDB, coloque a porta do TCP para 3360

## Configuração do ambiente

Vá até a pasta da API

```
cd src/web-server
```

Utilize as credenciais de usuário USER e senha PASSWORD que você criou durante a instalação do MariaDB para acessar o servidor dele

```
mariadb USER -p
```

Crie a base de dados

```
CREATE DATABASE eimports
```

Crie um arquivo chamado `liquibase.properties` e coloque as seguinte linhas

```
changeLogFile=database/changelog/db-changelog-master.xml
url=jdbc:mariadb://localhost:3360/eimports
username=USER
password=PASSWORD
logLevel=severe
liquibase.hub.mode=off
```

> Substitua USER e PASSWORD pelo usuário e senha que você criou na instalação do MariaDB

Instale as dependências do composer

```
composer update
```

> O composer vai interromper a instalação e te pedir um access token. Você pode criá-lo rapidamente visitando [Github - personal acess tokens](https://github.com/settings/tokens), e acessando Generate new tokens > Generate new token (classic). Não selecione nada em Select scopes.

Inicie o liquibase

```
liquibase update
```

Inicie a aplicação Yii

```
php -S localhost:8080 -t web
```

### Populando o sistema

Para popular o banco de dados com vários registros pré-definidos

```
.\yii batch/seed
```

Para deletar todos os registros do banco de dados

```
.\yii batch/fresh
```

## Acesse o sistema

Você pode acessar o sistema com as credenciais

- Login: admin
- Senha: root