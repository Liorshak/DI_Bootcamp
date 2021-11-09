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


-- 1. SELECT * FROM students
-- 2. SELECT (first_name , last_name) FROM students
-- 3.a SELECT (first_name , last_name) FROM students WHERE id=2
-- 3.b SELECT (first_name , last_name) FROM students WHERE (last_name='Benichou' AND first_name='Marc')
-- 3.c SELECT (first_name , last_name) FROM students WHERE (last_name='Benichou' OR first_name='Marc')
-- 3.d SELECT (first_name , last_name) FROM students WHERE first_name LIKE '%a%'
-- 3.e SELECT (first_name , last_name) FROM students WHERE first_name LIKE 'a%'
-- 3.f SELECT (first_name , last_name) FROM students WHERE first_name LIKE '%a'
--  3.g SELECT (first_name , last_name) FROM students WHERE first_name LIKE '%a_'
-- SELECT (first_name , last_name) FROM students WHERE id in (1,3)
-- 4.SELECT (first_name , last_name) FROM students WHERE birth_date >= '2000-01-01'





