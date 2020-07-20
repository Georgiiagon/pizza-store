pizza-store - project for test assigment
========================================================
This project has: 
* registration
* authorization
* order history
* main page with menu
* grocery basket

Requirements:

* php 7.2.2+ with following extensions (mysqli, pdo, pdo_mysql, zip, bcmath, pcntl, sockets, gd, xml) and composer
* a webserver (you can use `php artisan serve`)
* nodejs 10+, npm 6.5+
* mysql 5.6+

Installation
------------
1. Make sure the required services are up and running;
2. Clone this repository and checkout needed branch;
3. Create MySQL database;
4. Install required dependencies: `composer install` for development environment or `composer install --no-dev` for staging/production environment;
5. Configure webserver to pass all requests to the `public/index.php` file.
 In dev environment you can just run Laravel's webserver via `php artisan serve` console command;
6. Build frontend: `npm install` and `npm run dev` (or `npm run prod` in staging/production). Re-run `npm run dev` after making changes to frontend to reflect them in your local webserver;
7. Check if everything's up by visiting your page in the web browser, and you are done!

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
database_host: http://db:3306 # We are replacing actual ip with a service alias `db`
```

### Usage:

1. Run `docker-compose up -d` to setup a services cluster in background, if you would like to see logs output then start it with `docker-compose up`.
2. Wait until all services aren't started  (!!!)
3. Run `docker-compose up php-fpm php artisan migrate` (may by you need `docker-compose up php-fpm php artisan db:seed` too)
4. Check panel with docker-machine ip (127.0.0.1:8090)
5. For checking logs type `docker-compose logs` in your repository folder , also you can see available containers with `docker-compose ps` ,
to check logs of specific container run `sudo docker logs container_name` where container_name is one of available containers 
or `docker-compose logs service_name` where service_name is one of available services which are described in `docker-compose.yml` 
6. To stop services if they are running in foreground mode type `ctrl+c` or `docker-compose down` for background mode
