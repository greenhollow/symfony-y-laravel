<div style="float: right;">

[>](./model-3.md)

</div>
<div style="float: left;">

[<](./model-2.md)

</div>

<center>

Model
=====

Battle of the DBALS: Doctrine & Eloquent
----------------------------------------

</center>

```
➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan make:migration

  What should the migration be named?
❯ alter_pets_add_uuid_name_and_dob_columns

   INFO  Migration [database/migrations/2023_05_21_222438_alter_pets_add_uuid_name_and_dob_columns.php] created successfully.

➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan make:migration

  What should the migration be named?
❯ alter_humans_add_uuid_and_name_columns

   INFO  Migration [database/migrations/2023_05_21_222546_alter_humans_add_uuid_and_name_columns.php] created successfully.

➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan make:migration

  What should the migration be named?
❯ create_humans_pets_table

   INFO  Migration [database/migrations/2023_05_21_223918_create_humans_pets_table.php] created successfully.

➜  laravel-demo git:(2023-06-austin-php) ✗ docker exec -it laravel-demo-laravel.test-1 php artisan migrate

   INFO  Running migrations.

  2023_05_21_222438_alter_pets_add_uuid_name_and_dob_columns ....... 30ms DONE
  2023_05_21_222546_alter_humans_add_uuid_and_name_columns .......... 7ms DONE
  2023_05_21_223918_create_humans_pets_table ....................... 45ms DONE
```
