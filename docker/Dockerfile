FROM php:8.1-fpm-buster

ENV PATH="./vendor/bin:${PATH}" \
    NGINX_SERVER_NAME="_" \
    PHP_OPCACHE_VALIDATE_TIMESTAMPS="0" \
    PHP_OPCACHE_MAX_ACCELERATED_FILES="6000" \
    PHP_OPCACHE_MEMORY_CONSUMPTION="128"

RUN apt-get -yqq update \
    && apt-get -yqq install --no-install-recommends zip unzip \
        procps \
        supervisor \
        sqlite3 \
        nginx \
        git \
        libonig-dev \
    && docker-php-ext-install mbstring pdo pdo_mysql opcache \
    && pecl install apcu xdebug redis \
    && docker-php-ext-enable apcu xdebug redis

COPY docker/php/php-fpm.d/docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf
COPY docker/php/conf.d/*.ini /usr/local/etc/php/conf.d/
COPY docker/php/php.ini /usr/local/etc/php/php.ini

COPY docker/nginx/h5bp /etc/nginx/h5bp

COPY docker/supervisor/supervisord.conf /etc/supervisor/supervisord.conf
COPY docker/supervisor/conf.d/*.conf /etc/supervisor/conf.d-available/

COPY docker/run-app.sh /usr/local/bin/run-app
COPY docker/php/composer-installer.sh /usr/local/bin/composer-installer

ADD https://github.com/kelseyhightower/confd/releases/download/v0.11.0/confd-0.11.0-linux-amd64 /usr/local/bin/confd
COPY docker/confd/conf.d/ /etc/confd/conf.d/
COPY docker/confd/templates/ /etc/confd/templates/

RUN chmod +x /usr/local/bin/confd \
    && chmod +x /usr/local/bin/run-app \
    && chmod +x /usr/local/bin/composer-installer \
    && /usr/local/bin/composer-installer \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer \
    && composer --version

# https://github.com/nodesource/distributions/blob/master/README.md#debinstall
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && node --version \
    && npm --version

# Caching Composer Dependencies
WORKDIR /tmp
COPY composer.json composer.lock auth.json /tmp/
RUN mkdir -p database/seeds/ database/factories/ \
    &&  composer install \
        --no-interaction \
        --no-plugins \
        --no-scripts \
        --prefer-dist \
    && rm -rf composer.json composer.lock auth.json vendor/ database/

WORKDIR /var/www/html

COPY . /var/www/html

RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

RUN npm install

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 777 storage bootstrap

EXPOSE 80

CMD ["/usr/local/bin/run-app"]
