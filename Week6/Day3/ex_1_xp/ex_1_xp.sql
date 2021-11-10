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

-- Exercise 1: DVD Rental
-- Instructions
-- Get a list of all film languages.

-- select name distinct from language



-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:

-- Select title, description,name from film
-- join language on language.language_id=film.language_id



-- Select title, description, name from film
-- full join language on language.language_id=film.language_id


-- Get all films, even if they don’t have languages.

-- Select title, description, name from film
-- left join language on language.language_id=film.language_id

-- Get all languages, even if there are no films in those languages.

-- Select title, description, name from film
-- right join language on language.language_id=film.language_id



-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_films (
-- 	id serial primary KEY,
-- 	name varchar(25) not null
-- );

-- INSERT INTO new_films (name) VALUES ('Star Wars'),('Fight Club'),('Deep Blue Sea'), ('Harry Potter')


-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE films_review (
-- 	review_id serial primary key,
-- 	score smallint not null,
-- 	title varchar(50) not null,
-- 	review_text text,
-- 	last_update date not null default CURRENT_DATE,
-- 	film_id integer REFERENCES new_films(id) ON DELETE CASCADE,
-- 	language_id integer REFERENCES language(language_id)
-- );

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.


-- Insert into films_review (score,title,review_text,film_id,language_id)
-- 			Values (10,'best movie ever','this movie was so good changed my life forever, you must watch it!',(select id from new_films where name ilike 'star%'),(select language_id from language where name ilike 'eng%') ),
-- 					(10,'such a great movier','unexpected very good fighting scences loved it',(select id from new_films where name ilike 'fight%'),(select language_id from language where name ilike 'eng%') );

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- Delete from new_films where name ilike 'figh%'

-- select * from films_review


-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.


-- select * from language

-- update films_review      
-- set language_id = (select language_id from language where name ilike 'ger')
-- where film_id =1


-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- address_id // we must enter a valid address id we cannot enter a customer with no address


-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- drop table customer_review  // as it not connected to any other table its very easy

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- select count(rental_id) from rental where return_date is null /183

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- select title,replacement_cost from film 
-- join inventory on film.film_id=inventory.film_id
-- join rental on rental.inventory_id=inventory.inventory_id
-- where return_date is null 
-- order by replacement_cost DESC limit 30

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- select distinct title,description ,actor.first_name,actor.last_name from film 
-- join film_actor on film.film_id = film.film_id
-- join actor on actor.actor_id=film_actor.actor_id
-- where actor.first_name ='Penelope' and actor.last_name='Monroe' and description ilike '%sumo wrestler%'


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.


-- SELECT distinct title, description , length, rating from film
-- join film_category on film.film_id=film_category.film_id
-- join category on category.category_id=film_category.category_id
-- where category.name='Documentary' and length<60 and rating='R'


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT distinct title,amount from film
-- join inventory on inventory.film_id=film.film_id
-- join rental on inventory.inventory_id= rental.inventory_id
-- join customer on rental.customer_id = customer.customer_id
-- join payment on payment.customer_id = customer.customer_id
-- where customer.first_name='Matthew' and customer.last_name='Mahan' and amount > 4 and return_date between '2005-07-28' and '2005-08-01'



-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

-- SELECT distinct title,description,replacement_cost from film
-- join inventory on inventory.film_id=film.film_id
-- join rental on inventory.inventory_id= rental.inventory_id
-- join customer on rental.customer_id = customer.customer_id
-- where customer.first_name='Matthew' and customer.last_name='Mahan' and 
-- (title ilike '%boat%' or description ilike '%boat')
-- order BY replacement_cost desc

