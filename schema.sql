DROP DATABASE IF EXISTS burger_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table plans.
CREATE TABLE plans (
  id int NOT NULL AUTO_INCREMENT,
  plan varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
