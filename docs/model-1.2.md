<div style="float: right;">

[>](./model-2.md)

</div>
<div style="float: left;">

[<](./model-1.1.md)

</div>

<center>

Model
=====

Battle of the DBALS: Doctrine & Eloquent
----------------------------------------

</center>

```
➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan make:model

  What should the model be named?
❯ Pet

  Would you like any of the following? [none]
  none ..................................................................... 0
  all ...................................................................... 1
  factory .................................................................. 2
  form requests ............................................................ 3
  migration ................................................................ 4
  policy ................................................................... 5
  resource controller ...................................................... 6
  seed ..................................................................... 7
❯ all

   INFO  Model [app/Models/Pet.php] created successfully.

   INFO  Factory [database/factories/PetFactory.php] created successfully.

   INFO  Migration [database/migrations/2023_05_21_214145_create_pets_table.php] created successfully.

   INFO  Seeder [database/seeders/PetSeeder.php] created successfully.

   INFO  Request [app/Http/Requests/StorePetRequest.php] created successfully.

   INFO  Request [app/Http/Requests/UpdatePetRequest.php] created successfully.

   INFO  Controller [app/Http/Controllers/PetController.php] created successfully.

   INFO  Policy [app/Policies/PetPolicy.php] created successfully.

➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan make:model

  What should the model be named?
❯ Human

  Would you like any of the following? [none]
  none ..................................................................... 0
  all ...................................................................... 1
  factory .................................................................. 2
  form requests ............................................................ 3
  migration ................................................................ 4
  policy ................................................................... 5
  resource controller ...................................................... 6
  seed ..................................................................... 7
❯ all

   INFO  Model [app/Models/Human.php] created successfully.

   INFO  Factory [database/factories/HumanFactory.php] created successfully.

   INFO  Migration [database/migrations/2023_05_21_214159_create_humans_table.php] created successfully.

   INFO  Seeder [database/seeders/HumanSeeder.php] created successfully.

   INFO  Request [app/Http/Requests/StoreHumanRequest.php] created successfully.

   INFO  Request [app/Http/Requests/UpdateHumanRequest.php] created successfully.

   INFO  Controller [app/Http/Controllers/HumanController.php] created successfully.

   INFO  Policy [app/Policies/HumanPolicy.php] created successfully.

➜  laravel-demo git:(2023-06-austin-php) docker exec -it laravel-demo-laravel.test-1 php artisan migrate

   INFO  Preparing database.

  Creating migration table ......................................... 19ms DONE

   INFO  Running migrations.

  2014_10_12_000000_create_users_table ............................. 21ms DONE
  2014_10_12_100000_create_password_reset_tokens_table ............. 21ms DONE
  2019_08_19_000000_create_failed_jobs_table ....................... 18ms DONE
  2019_12_14_000001_create_personal_access_tokens_table ............ 19ms DONE
  2023_05_21_214145_create_pets_table ............................... 6ms DONE
  2023_05_21_214159_create_humans_table ............................. 7ms DONE
```
