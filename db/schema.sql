DROP database IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN Default FALSE,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Bacon Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Chipotle Ranch Burger');
INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');

SELECT * FROM burgers;