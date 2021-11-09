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

-- select * from students

--1. UPDATE students
-- SET birth_date='1998-11-02'
-- where last_name='Benichou'
-- returning *

--2. Update students
-- Set last_name='Guez'
-- Where 
-- first_name='David' and last_name='Grez'
-- returning *


--1. Delete from students where first_name='Lea' and last_name='Benichou' 

-- 1.Select count(id) from students //5

-- Select count (id) from students where birth_date<'1/01/2000' //3

-- 1. ALTER TABLE students add column math_grade smallint;

-- 2. update students set math_grade=80 where id=1 returning*

-- 3. update students set math_grade=90 where id in(2,4) returning*

-- 4. update students set math_grade=40 where id=6 returning*

-- 5. select count (id ) from students where math_grade >83

-- 6. insert into students (last_name,first_name,birth_date,math_grade) values('Simpson','Omer',(select birth_date from students where last_name='Simpson'),70)

-- 7. select (first_name,last_name) as full_name, count(math_grade) from students group by full_name

-- 8. select sum (math_grade), round(avg(math_grade),2) from students 

