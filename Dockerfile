# Use the official PHP image as the base image
FROM php:8.1-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the application files
COPY . .

# Install application dependencies
RUN composer install --optimize-autoloader --no-dev

# Generate the application key
RUN php artisan key:generate

# Set the Apache document root
RUN sed -i -e 's/html/html\/public/g' /etc/apache2/sites-available/000-default.conf

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Expose port 80
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
