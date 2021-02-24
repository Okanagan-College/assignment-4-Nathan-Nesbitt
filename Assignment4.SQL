/* Create the database */
CREATE DATABASE IF NOT EXISTS contacts;

/* Create a new user */

CREATE USER IF NOT EXISTS 'contacts'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'contacts'@'localhost' IDENTIFIED WITH mysql_native_password BY "password";
GRANT ALL ON contacts.* TO 'contacts'@'localhost';
FLUSH PRIVILEGES;

/* Create the contacts table */

CREATE TABLE IF NOT EXISTS contacts.people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    email VARCHAR(100),
    phone VARCHAR(11),
    notes TEXT
);