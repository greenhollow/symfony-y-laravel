<div style="float: right;">

[>](./engineering-2.md)

</div>
<div style="float: left;">

[<](./engineering-1.1.md)

</div>

<center>

Engineering
===========

</center>

&bull; Align with your purpose
-------
* Startup speed or critical stability?

<center>

SYMFONY: Install
================

</center>

```
mkdir symfony-demo
cd symfony-demo
composer create-project symfony/skeleton .
composer config extra.allow-contrib true
composer require symfony/orm-pack
composer require api
composer require --dev symfony/test-pack
composer require --dev symfony/maker-bundle
composer dump-env dev
```
* mushed together with https://github.com/dunglas/symfony-docker
* removed Mercurial and Vulcain build and config references
* updated `docker-compose.yml` to use bind-mounted host directory for db
* added db mounted directory to `.gitignore`
* added `pdo_pgsql` PHP extension to `app_php` build steps in `Dockerfile`
* updated `.env` to explicitly define postgres and http env variable defaults
```
docker login -u greenhollow
docker compose build --pull --no-cache
docker compose up -d
```

<center>

Add test db and UUID
=======

</center>

* see https://symfony.com/doc/current/testing.html
* added alternate `DATABASE_URL` definition to `.env.test`
```
docker exec -it symfony-demo-php-1 bin/console --env=test doctrine:database:create
docker exec -it symfony-demo-php-1 php bin/console --env=test doctrine:schema:create
docker exec -it symfony-demo-php-1 composer require --dev dama/doctrine-test-bundle
docker exec -it symfony-demo-php-1 composer require --dev doctrine/doctrine-fixtures-bundle
```
* added PHPUnit test bundle extension to `phpunit.xml.dist`
```
docker exec -it symfony-demo-php-1 composer require symfony/uid
```

<center>

Add API test case dependencies
=======

</center>

```
docker exec -it symfony-demo-php-1 composer require --dev symfony/http-client
```
