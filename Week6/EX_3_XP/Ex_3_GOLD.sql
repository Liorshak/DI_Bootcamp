-- Database: bootcamp

-- DROP DATABASE bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
	
-- CREATE TABLE students (
-- id SERIAL PRIMARY KEY,
-- last_name VARCHAR(20) NOT NULL,
-- first_name VARCHAR(20) NOT NULL,
-- birth_date DATE NOT NULL);

-- show datestyle

-- INSERT INTO students (first_name,last_name,birth_date)
-- VALUES
-- ('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','27/07/1987'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','14/06/2003'),
-- ('Omer','Simpson','03/10/1980');


-- GOLD EX_3

-- 1. SELECT * FROM students ORDER BY last_name asc LIMIT 4
-- 2. SELECT * FROM students ORDER BY birth_date DESC LIMIT 1
-- 3. SELECT * FROM students WHERE id >2 limit 3






