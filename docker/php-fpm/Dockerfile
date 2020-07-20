FROM php:7.2-fpm

RUN apt-get update

# Install Postgre PDO
RUN apt-get install -y libpq-dev
RUN docker-php-ext-install pdo pdo_mysql mysqli

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

WORKDIR /var/www/pizza

RUN npm install
#CMD ["npm", "run", "dev"]
