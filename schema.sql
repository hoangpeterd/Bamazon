CREATE DATABASE IF NOT EXISTS Bamazon;

USE Bamazon;

CREATE TABLE IF NOT EXISTS products (
item_id INT NOT NULL AUTO_INCREMENT
, product_name VARCHAR (100) NOT NULL
, department_name VARCHAR (100) NOT NULL
, price NUMERIC (15,2) NOT NULL
, stock_quantity INT UNSIGNED NOT NULL
, PRIMARY KEY (item_id) 
);

CREATE TABLE IF NOT EXISTS departments (
department_id INT NOT NULL AUTO_INCREMENT
, department_name VARCHAR (100) NOT NULL
, over_head_costs NUMERIC (15,2) NOT NULL
, total_sales NUMERIC (15,2) NOT NULL
, PRIMARY KEY (department_id)
);