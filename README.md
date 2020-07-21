pizza-store - project for test assignment
========================================================
https://desolate-ridge-10345.herokuapp.com/
* Webserver: [Heroku](https://dashboard.heroku.com/login)
* DB host: [remotemysql](https://remotemysql.com/)
* Frontend: [Vue](https://vuejs.org/) + [Vuex](https://vuex.vuejs.org/) + [Vue-router](https://router.vuejs.org/) + [bootstrap-vue](https://bootstrap-vue.org/)
* Backend: [Laravel 7](https://laravel.com/) + [Sanctum](https://laravel.com/docs/7.x/sanctum#introduction)

This project has: 
* Registration
* Authorization
* Orders history
* Home page with menu
* Product cart
* Currency switcher


Requirements:

* php 7.2.2+ with following extensions (mysqli, pdo, pdo_mysql, zip, bcmath, pcntl, sockets, gd, xml) and composer
* a webserver (you can use php artisan serve)
* nodejs 10+, npm 6.5+
* mysql 5.6+

Installation
------------
1. Make sure the required services are up and running;
2. Clone this repository and checkout needed branch;
3. Create database;
4. Install required dependencies: `composer install` for development environment or `composer install --no-dev`;
5. Configure webserver to pass all requests to the public/index.php file.
 In dev environment you can just run Laravel's webserver via `php artisan serve` console command;
6. Build frontend: `npm install` and `npm run dev` (or `npm run prod` in production). Re-run `npm run dev` after making changes to frontend to reflect them in your local webserver or run `npm run watch`;
7. Create environment file `cp .env.example .env` and update variables inside.
8. Generate application key `php artisan key:generate`.
9. Run migrations `php artisan migrate` (you may run the `php artisan db:seed` to seed your database).
9. Check if everything's up by visiting your page in the web browser, and you are done!

Development
-----------

### Requirements:

* [Docker](https://docs.docker.com/install/#backporting) 
* [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

### Installation:

1. Clone this repository and checkout needed branch;

You may need to replace `DB_*` variables in your .env file

### Example:

```yaml
DB_HOST=db # We are replacing actual ip with a service alias `db`
```

### Usage:

1. Run `docker-compose up -d` to setup a services cluster in background, if you would like to see logs output then start it with `docker-compose up`.
2. Wait until all services aren't started  (!!!)
3. Run `docker-compose run php-fpm php artisan migrate` (you may run the `docker-compose run php-fpm php artisan db:seed` too)
4. To build frontend part run `docker-compose run php-fpm npm install` and `docker-compose run php-fpm npm run dev`
5. Check panel with docker-machine ip (127.0.0.1:8090)
6. For checking logs type `docker-compose logs` in your repository folder , also you can see available containers with `docker-compose ps` ,
to check logs of specific container run `sudo docker logs container_name` where container_name is one of available containers 
or `docker-compose logs service_name` where service_name is one of available services which are described in `docker-compose.yml` 
6. To stop services if they are running in foreground mode type `ctrl+c` or `docker-compose down` for background mode
