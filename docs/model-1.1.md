<div style="float: right;">

[>](./model-1.2.md)

</div>
<div style="float: left;">

[<](./model-1.md)

</div>

<center>

Model
=====

Battle of the DBALS: Doctrine & Eloquent
----------------------------------------

</center>

```
➜  symfony-demo git:(2023-06-austin-php) docker exec -it symfony-demo-php-1 bin/console make:entity

 Class name of the entity to create or update (e.g. DeliciousPizza):
 > Pet

 Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
 > yes

 created: src/Entity/Pet.php
 created: src/Repository/PetRepository.php

 Entity generated! Now let's add some fields!
 You can always add more fields later manually or by re-running this command.

 New property name (press <return> to stop adding fields):
 > uuid

 Field type (enter ? to see all types) [guid]:
 > ?

Main Types
  * string
  * text
  * boolean
  * integer (or smallint, bigint)
  * float

Relationships/Associations
  * relation (a wizard 🧙 will help you build the relation)
  * ManyToOne
  * OneToMany
  * ManyToMany
  * OneToOne

Array/Object Types
  * array (or simple_array)
  * json
  * object
  * binary
  * blob

Date/Time Types
  * datetime (or datetime_immutable)
  * datetimetz (or datetimetz_immutable)
  * date (or date_immutable)
  * time (or time_immutable)
  * dateinterval

Other Types
  * ascii_string
  * decimal
  * guid


 Field type (enter ? to see all types) [guid]:
 > guid

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Pet.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 > name

 Field type (enter ? to see all types) [string]:
 >

 Field length [255]:
 >

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Pet.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 > date_of_birth

 Field type (enter ? to see all types) [string]:
 > date_immutable

 Can this field be null in the database (nullable) (yes/no) [no]:
 > yes

 updated: src/Entity/Pet.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 >



  Success!


 Next: When you're ready, create a migration with php bin/console make:migration

➜  symfony-demo git:(2023-06-austin-php) docker exec -it symfony-demo-php-1 bin/console make:entity

 Class name of the entity to create or update (e.g. VictoriousKangaroo):
 > Human

 Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
 > yes

 created: src/Entity/Human.php
 created: src/Repository/HumanRepository.php

 Entity generated! Now let's add some fields!
 You can always add more fields later manually or by re-running this command.

 New property name (press <return> to stop adding fields):
 > uuid

 Field type (enter ? to see all types) [guid]:
 >

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Human.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 > name

 Field type (enter ? to see all types) [string]:
 >

 Field length [255]:
 >

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Human.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 > pets

 Field type (enter ? to see all types) [string]:
 > ManyToMany

 What class should this entity be related to?:
 > Pet

 Do you want to add a new property to Pet so that you can access/update Human objects from it - e.g. $pet->getHumans()? (yes/no) [yes]:
 >

 A new property will also be added to the Pet class so that you can access the related Human objects from it.

 New field name inside Pet [humans]:
 >

 updated: src/Entity/Human.php
 updated: src/Entity/Pet.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 >



  Success!


 Next: When you're ready, create a migration with php bin/console make:migration

➜  symfony-demo git:(2023-06-austin-php) docker exec -it symfony-demo-php-1 bin/console make:migration



  Success!


 Next: Review the new migration "migrations/Version20230521213018.php"
 Then: Run the migration with php bin/console doctrine:migrations:migrate
 See https://symfony.com/doc/current/bundles/DoctrineMigrationsBundle/index.html
➜  symfony-demo git:(2023-06-austin-php) docker exec -it symfony-demo-php-1 bin/console doctrine:migrations:migrate

 WARNING! You are about to execute a migration in database "app" that could result in schema changes and data loss. Are you sure you wish to continue? (yes/no) [yes]:
 >

[notice] Migrating up to DoctrineMigrations\Version20230521213018
[notice] finished in 50.6ms, used 16M memory, 1 migrations executed, 10 sql queries

 [OK] Successfully migrated to version :
      DoctrineMigrations\Version20230521213018
```