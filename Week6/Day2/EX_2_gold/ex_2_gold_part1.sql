-- Database: dvdrental

-- DROP DATABASE dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.	
-- select rating, count(film_id) from film group by rating

-- 2.select title,rating, length from film
-- where length<120 and rental_rate<3 and rating in ('G','PG-13')

-- SELECT * from customer ORDER BY customer_id desc

-- 3.UPDATE customer
-- SET first_name='Lior',
--  	Last_name ='Shaked',
-- 	email='liorshak1986@gmail.com'
-- where customer_id = 599
-- returning *

-- UPDATE address
-- SET address = 'Kibutz Manara P.O box 85'
-- where address_id= 605
-- returning*


-- UPDATE address
-- SET district = 'Manara',
-- 	postal_code=1216500,
-- 	phone=972545584414
	
-- where address_id= 605
-- returning*


