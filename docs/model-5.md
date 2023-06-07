<div style="float: right;">

[>](./model-5.1.md)

</div>
<div style="float: left;">

[<](./model-4.md)

</div>

<center>

Model
=====

Battle of the DBALS: Doctrine & Eloquent
----------------------------------------

</center>

Doctrine | Eloquent
:---:|:---:
Models are [Entities](https://github.com/greenhollow/symfony-demo/commit/2638abf362da1e1ea0045f4a22163da95b5b8f59) | Models are [Queries](https://github.com/greenhollow/laravel-demo/commit/01ece0b499119d0c174d1436d741c2a68d5fa036) Unmapped to [Schema Changes](https://github.com/greenhollow/laravel-demo/commit/e2f3680c75f1dca89026c880bfa9e991fe7d57b8)
[Schema is Mapped](https://github.com/greenhollow/symfony-demo/commit/9fcd5d3318dd13bd1efd356382895148e4ca187f) | [Attributes are Defined](https://github.com/greenhollow/laravel-demo/commit/c7f47784e8bd5c61f8bb4dea1c9baf4289230cae)
[Entity Manager](https://github.com/greenhollow/symfony-demo/commit/5bf8938fc2577fe54282bf04295c648e68d653f5) | [Active Record](https://github.com/greenhollow/laravel-demo/commit/00d819b79067e018d1e85c1cdc8431e13ca0a721)
[Lazy Loading](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/advanced-configuration#proxy-objects) | [Eager Loading](https://laravel.com/docs/10.x/eloquent-relationships#eager-loading)

Doctrine
--------

A proxy object is an object that is put in place or used instead of the real object. A proxy object can add behavior to the object being proxied without that object being aware of it. In ORM, proxy objects are used to realize several features but mainly for transparent lazy-loading. ... Here [is] an instance of the proxy class that was generated ... but your code does not need to care. In fact it **should not care**. Proxy objects should be transparent to your code.

Eloquent
--------

When accessing Eloquent relationships as properties, the related models are "lazy loaded". This means the relationship data is not actually loaded until you first access the property. However, Eloquent can "eager load" relationships at the time you query the parent model. Eager loading alleviates the "N + 1" query problem.
