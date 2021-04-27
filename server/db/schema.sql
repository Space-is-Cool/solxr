DROP DATABASE IF EXISTS soldb;

CREATE DATABASE soldb;

USE soldb;

CREATE TABLE users (
username VARCHAR(50),
email VARCHAR(50),
user_id int NOT NULL,
accessibility boolean,
subscribed boolean,
);

CREATE TABLE users_iotd (
user_id int NOT Null,
date_taken VARCHAR,
FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE imageFeed (
picture_id int NOT NULL,
created_at VARCHAR(50),
user_id int NOT NULL,
PRIMARY KEY (picture_id),
FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE emoji (
user_id int NOT NULL,
emoji_id int NOT NULL,
emoji_type VARCHAR(50),
picture_id int NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(user_id)
);