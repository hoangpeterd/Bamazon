USE Bamazon;

DELETE FROM products;

ALTER TABLE products AUTO_INCREMENT = 1;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Inception', 'Movies', 10, 100)
, ('The Departed', 'Movies', 8, 100)
, ('The Dark Knight Returns', 'Books', 13, 100)
, ('Watchmen', 'Books', 17, 100)
, ('Wolfenstein: The New Order', 'Games', 20, 100)
, ('Wolfenstein: The Old Blood', 'Games', 20, 100)
, ('Narwhal', 'Animals', 100000, 2);
