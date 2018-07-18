# About

AdonisJs is a Node.js MVC framework that runs on all major operating systems. It offers a stable eco-system to write a server-side web application so that you can focus on business needs over finalizing which package to choose or not.

AdonisJs favours developer joy with consistent and expressive API to build a full-stack web application or a micro API server.


# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
npm i -g @adonisjs/cli

npm install
```

### Configuration

Database configuration can be done througth `.env` file.

```js
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
```

### Adonis make

## Controllers

Creates a complete resourced CRUD.

```bash
adonis make:controller ModelName --type http --resource
```

### Routing

## Route Resources

[Route Resources](https://adonisjs.com/docs/4.1/routing#_route_resources)

If you like building web apps around REST conventions then route resources helps you in defining conventional routes by writing less code.

```js
Route.resource('users', 'UsersController')
```

### Migrations (Database)

[Migrations](https://adonisjs.com/docs/4.1/migrations)

Migrations are mutations to your database as you keep evolving your application. Think of them as step by step screenshot of your database schema, that you can roll back at any given point of time.

Also, migrations make it easier to work as a team, where database changes from one developer are easily spotted and used by other developers in the team.

## Creating Migrations

We make use of the `adonis make:migration` command to create a schema file for us.

```bash
adonis make:migration users
```

## Migration Status

You can check the migration status by running `migration:status` command.

```bash
adonis migration:status
```

## Run Migrations

Finally, we need to call another command to run the migrations, which executes the `up` method on this class.

```bash
adonis migration:run
```

### MySql Docker

```bash
docker run --name servidor-mysql -p 3306:3306 -v D:/Docker/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=coreapp-pass -d mysql:5.7
```

`-v` For volume mounting in `D:/Docker` directory