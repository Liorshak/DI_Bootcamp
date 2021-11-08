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
	

-- CREATE TABLE items (
--  item_number SERIAL PRIMARY KEY,
--  name varchar(25) not null,
--  price smallint not null);


-- CREATE TABLE customers (
--  id SERIAL PRIMARY KEY,
-- first_name varchar(15) not null,
-- last_name varchar(15) not null);

-- insert into items(name,price) 
-- values ('Small Desk',100),
-- 		('Large desk',300),
-- 		('Fan',80);
		
-- INSERT INTO customers ( first_name, last_name)
-- VALUES ('Greg', 'Jones'),
-- 		('Sandra', 'Jones'),
-- 		('Scott', 'Scott'),
-- 		('Trevor', 'Green'),
-- 		('Melanie', 'Johnson');
		
		
-- 1. SELECT * FROM items;
--    SELECT * FROM customers;
-- 

-- 2. SELECT * FROM items WHERE price > 80;
-- 3. SELECT * FROM items WHERE price<300;
-- 4. SELECT * FROM customers WHERE last_name='Smith'    // EMPTY
-- 5. SELECT * FROM customers WHERE last_name='Jones'
-- 6. SELECT * FROM customers WHERE first_name!='Scott'

		
		