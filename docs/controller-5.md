<div style="float: right;">

[>](./index-4.md)

</div>
<div style="float: left;">

[<](./controller-4.md)

</div>

<center>

Controller
==========

Welcome to the Matrix
---------------------

</center>

&nbsp; | Symfony | Laravel
:---:|:---:|:---:
The Container | [Dependency Injection](https://github.com/symfony/symfony/blob/6.4/src/Symfony/Component/HttpKernel/Kernel.php#L503) and [Autowiring](https://symfony.com/doc/current/service_container/autowiring.html) | [Facades](https://laravel.com/docs/10.x/facades#when-to-use-facades) vs. [Automatic Injection](https://laravel.com/docs/10.x/container#automatic-injection)
The Request | [Request](https://symfony.com/doc/current/components/http_foundation.html#request) | [Request](https://laravel.com/docs/10.x/requests#accessing-the-request) - [get()](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Http/Request.php#L382) vs. [input()](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Http/Concerns/InteractsWithInput.php#L294)
Access Control | [Voters](https://symfony.com/doc/current/security/voters.html#setup-checking-for-access-in-a-controller) | [Policies](https://laravel.com/docs/10.x/authorization#via-controller-helpers)
Hooking In | [Events](https://symfony.com/doc/current/event_dispatcher.html) | [Middleware](https://laravel.com/docs/10.x/middleware#registering-middleware) and [Events](https://laravel.com/docs/10.x/events#registering-events-and-listeners)
