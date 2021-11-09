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


-- 1. select * from customer

-- 2. SELECT (first_name, last_name) as full_name from customer

-- 3. Select DISTINCT create_date from customer

-- 4. SELECT * FROM customer ORDER BY first_name DESC

-- 5. SELECT film_id, title, description,release_year, rental_rate from film ORDER BY rental_rate

-- 6. SELECT address,phone from address where district ='Texas' 

-- 7. SELECT * FROM film where film_id in (15,150)

-- 8. SELECT film_id, title, description, length,rental_rate from film where title='Star Wars' /// star wars

-- 9. SELECT film_id, title, description, length,rental_rate from film where title ilike 'st%' /// star wars

-- 10. Select title,replacement_cost from film ORDER BY replacement_cost limit 10

-- 11. SELECT title,replacement_cost FROM film ORDER BY replacement_cost offset 10 FETCH FIRST 10 ROWS ONLY

-- 12. SELECT first_name, customer.customer_id, amount, payment_date FROM customer
-- inner JOIN payment 
-- on customer.customer_id=payment.customer_id

-- 13.
-- SELECT film.title , film.film_id , inventory.inventory_id from film
-- full join inventory on film.film_id= inventory.film_id
-- full join rental on inventory.inventory_id=rental.inventory_id
-- where return_date is null

-- 14.
-- SELECT country, city distinct from city 
-- join country
-- on city.country_id=country.country_id
-- order by country 

-- 15.
-- select customer.customer_id, first_name, last_name ,amount,payment_date, staff_id from customer
-- join payment on customer.customer_id = payment.customer_id
-- order by staff_id

-- 16. what the real querey on question 15 needed to be

-- select (staff.first_name,staff.last_name) as s_name , sum(amount),count(payment_id) from staff
-- left join payment on staff.staff_id= payment.staff_id
-- Group by s_name
-- order by sum(amount)

