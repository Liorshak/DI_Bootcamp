-- Database: public

-- DROP DATABASE public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.
-- SELECT * FROM items ORDER BY price
-- SELECT * FROM items WHERE price>80 ORDER BY price
-- SELECT first_name, last_name FROM customers ORDER BY last_name LIMIT 3
-- SELECT first_name, last_name FROM customers ORDER BY last_name DESC

-- SELECT * FROM customers
-- -- SELECT * FROM items

-- 2.
-- CREATE TABLE purchases (
-- 	customer_id smallint,
-- 	item_id smallint,
-- FOREIGN KEY (customer_id) REFERENCES customers(id),
-- FOREIGN KEY	(item_id) REFERENCES items (item_number));

-- INSERT INTO purchases ( customer_id) VALUES (1) // worked for some reason as it except NULL
-- SELECT * FROM purchases

-- Delete from purchases


-- INSERT INTO purchases (customer_id,item_id) 
-- VALUES (1,3),
-- 			(1,2),
-- 			(2,3),
-- 			(4,1),
-- 			(5,2);
			
			
-- 3.		
-- Select * FROM purchases //not helping at all 
-- SELECT first_name, last_name, item_id
-- From customers
-- JOIN purchases
-- ON id=customer_id

-- SELECT first_name, last_name, item_id
-- From customers
-- JOIN purchases
-- ON id=customer_id
-- WHERE id=4


-- SELECT first_name, last_name, item_id
-- From customers
-- JOIN purchases
-- ON id=customer_id
-- WHERE id=4

-- SELECT *
-- FROM items
-- JOIN purchases
-- on item_number=item_id
-- WHERE name Ilike '%desk'

-- 4.
-- insert into customers (last_name,first_name) Values ('Scott', 'Scott');
-- insert into items (name,price) Values ('Hard Drive', 120)

-- DELETE FROM customers WHERE id =3

-- INSERT INTO purchases (customer_id, item_id) Values((select id from customers where first_name='Scott' AND last_name='Scott'),(select item_number from items WHERE name ilike 'hard%'));

-- 5.
-- SELECT first_name, last_name,name
-- from  customers
-- join purchases on customers.id=purchases.customer_id 
-- join items on items.item_number=purchases.item_id



