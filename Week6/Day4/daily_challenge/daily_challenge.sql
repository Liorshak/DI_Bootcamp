-- Database: Orders

-- DROP DATABASE "Orders";

-- CREATE DATABASE "Orders"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
-- Drop table orders

-- CREATE TABLE orders ( 
-- id serial Primary key,
-- client_id integer references users(client_id),
-- 	item1_id integer unique references items(id), 
-- 	item2_id integer unique references items(id)
-- );

-- CREATE TABLE items(
-- id serial primary key,
-- 	item_name varchar (25) not null,
-- 	price smallint not null,
-- 	order_id integer);


-- CREATE FUNCTION price_per_order (id integer)
-- RETURNS int AS $order_price$
-- declare
-- order_price integer;
-- BEGIN
-- order_price := ISNULL( select price from items join order on item1_id=items.id,0)+ ISNULL(select price from items join order on item2_id=items.id,0)
-- RETURN order_price
-- END;
-- $order_price$ LANGUAGE plpgsql;		

-- There should be a one to many relationship between the orders table and the items table. An order can have many items, but an item can belong to only one order.



-- insert into items (item_name,price) values ('box',50), ( 'chair',70), ('lamp',30), ('robot',200);
-- insert into orders (client_name,item1_id,item2_id) values ('roei',1,2), ('sara',3,null), ('Jhosh',4,null);


-- UPDATE items SET order_id =1 where id in(1,2)

-- SELECT SUM(price) from orders
-- join items on items.id=orders.item1_id and items.id= orders.item2_id





-- Create a function that returns the total price for a given order.

-- Bonus :
-- Create a table called users.

-- CREATE TABLE users (
-- client_id serial primary key,
-- 	client_name varchar(25) not null,
-- 	order_id integer not null
-- );


-- There should be a one to many relationship between the users table and the orders table.
-- Create a function that returns the total price for a given order of a given user.