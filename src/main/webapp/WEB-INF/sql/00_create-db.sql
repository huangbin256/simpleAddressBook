DROP DATABASE IF EXISTS sab_db;
DROP USER IF EXISTS sab_user;
CREATE USER sab_user PASSWORD 'welcome';
CREATE DATABASE sab_db owner sab_user ENCODING = 'UTF-8';


