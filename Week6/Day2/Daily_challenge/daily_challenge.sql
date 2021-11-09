-- Database: Day2_dailychallenge

-- DROP DATABASE "Day2_dailychallenge";

-- CREATE DATABASE "Day2_dailychallenge"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab


-- SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )  / 0
-- SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) /2 


--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) / 0

--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ) /2


