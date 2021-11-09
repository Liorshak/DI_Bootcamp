-- Database: Excel_Database

-- DROP DATABASE "Excel_Database";

-- CREATE DATABASE "Excel_Database"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE city_info (event_datetime timestamp NOT NULL,
-- 			  city VARCHAR(20) NOT NULL,
-- 			  temperature DECIMAL NOT NULL,
-- 			  light REAL NOT NULL,
-- 			  airquality_raw DECIMAL NOT NULL,
-- 			  sound REAL NOT NULL,
-- 			  humidity DECIMAL NOT NULL,
--  			  dust REAL NOT NULL);

-- COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
-- FROM 'D:\public\users\city_info.csv'
-- DELIMITER ','
-- CSV HEADER;

-- 1.SELECT * FROM city_info /1000
-- SELECT temperature FROM city_info WHERE city='Boston' AND event_datetime='01/03/2015 11:00' //3.08167688589856

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.

-- 10. Add to the table, todays information in Israel - of this very hour. 
-- (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted: 


-- SELECT event_datetime FROM city_info WHERE city='San Francisco' AND temperature>=28 AND temperature<=30 // "2015-03-05 22:00:00"
-- "2015-03-07 21:00:00"
-- "2015-03-07 23:00:00"
-- "2015-03-12 21:00:00"
-- "2015-03-13 20:00:00"
-- "2015-03-13 21:00:00"
-- "2015-03-13 22:00:00"
-- "2015-03-13 23:00:00"
-- "2015-03-14 20:00:00"
-- "2015-03-15 01:00:00"
-- "2015-03-19 20:00:00"
-- "2015-03-19 22:00:00"

-- Select city,sound, event_datetime FROM city_info ORDER BY sound DESC Limit 1  //"Geneva"	2144.3938	"2015-03-14 17:00:00"
-- Select city,sound, event_datetime FROM city_info ORDER BY sound Limit 1 // "Boston"	938.1968	"2015-03-07 08:00:00"

-- SELECT dust FROM city_info Where city='San Francisco' and event_datetime >'26/03/2015 20:00' and event_datetime<'27/03/2015 00:00' // 
-- 788.2898
-- 783.2477
-- 792.9629

-- SELECT event_datetime, humidity FROM city_info WHERE city ='Geneva' AND humidity<40 OR humidity>60

