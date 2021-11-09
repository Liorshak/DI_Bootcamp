-- Database: HollyWood

-- DROP DATABASE "HollyWood";

-- CREATE DATABASE "HollyWood"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- Alter table : Add 2 more rows: salary (integer), nationality (varchar)

--Update
-- Salary of 100000 for actors that have more than 2 oscars
-- Salary of 50000 for actors that have less than 2 oscars
-- Update the nb of oscar of Matt Damon to 7
-- We are in Hollywood, add to all actors a nationality "American"
-- Change the salary to proportionate to their number of oscars, for the 2 first actors (IN clause)

-- --Delete
-- Delete one actor, he is not an actor, it's a mistake
-- WITHOUT THE "WHERE" you delete everything from the table

ALTER TABLE actors ADD COLUMN salary integer , ADD COLUMN nationality varchar(20);


-- UPDATE  actors
-- SET salary = 100000
-- WHERE
-- number_oscars >2

-- select * from actors

-- UPDATE  actors
-- SET salary = 50000
-- WHERE
-- number_oscars <=2

-- UPDATE  actors
-- SET number_oscars = 7
-- WHERE
-- actor_id=1
-- returning *

-- UPDATE  actors
-- SET nationality = 'American'
-- RETURNING *

-- UPDATE  actors
-- SET salary = 100000*number_oscars
-- WHERE
-- actor_id <3
-- Returning *


-- DELETE FROM actors
-- WHERE
-- first_name = 'Jim'

