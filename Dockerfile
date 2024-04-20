# Base image
FROM ubuntu/nginx:latest

# Install necessary packages
RUN apt-get update
RUN apt-get install -y nodejs npm

# # Copy Nginx config
COPY nginx.conf /etc/nginx/sites-available/default

COPY ./www ./var/www/html/

# # Set up Node.js apps
WORKDIR /var/www/html/cheong-in.com
RUN npm install && npm run build

WORKDIR /var/www/html/admin.cheong-in.com
RUN npm install && npm run build

WORKDIR /var/www/html

# Expose ports
EXPOSE 80
EXPOSE 443
EXPOSE 3000
EXPOSE 3001
