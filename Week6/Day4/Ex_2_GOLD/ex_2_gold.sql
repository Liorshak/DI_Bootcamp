-- Database: hr

-- DROP DATABASE hr;

-- CREATE DATABASE hr
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- Update Statement
-- Write a SQL statement to change the following details belonging all employes who’s department_id is 110:
-- email column should be: ‘not available’
-- commission_pct column should be: 0.10

-- ALTER TABLE employees add column commission_pct decimal;

-- UPDATE employees
-- SET email = 'not available',
-- 	commission_pct=0.10
-- where department_id = 110



-- Write a SQL statement which will change the email column of all employees to ‘available’ whom work in the ‘Accounting’ department.

-- UPDATE employees
-- SET email = 'available'
-- From departments
-- where departments.department_id=employees.department_id and department_name ='Accounting'
-- returning *


-- Write a SQL statement to change the salary of the employee whose ID is 105. If the existing salary is less than 5000, change it to 8000.

-- UPDATE employees
-- set salary=8000
-- where employee_id=105 and salary <5000
-- returning *


-- Aggregate Functions
-- Write a query to find the number of jobs available in the employees table.
-- select count(*) from employees
-- Write a query to get the number of employees working in each post.

-- select department_id, count (employee_id) from employees group by department_id
-- Write a query to get the difference between the highest and lowest salaries.

-- select max(salary),min(salary), (max(salary)-min(salary)) as diffrence from employees


-- Write a query to find a manager ID and the salary of the lowest-paid employee under that manager.

-- select manager_id , min(salary) from employees group by manager_id

-- Write a query to get the average salary for each post excluding programmer.


-- SELECT job_title , round(avg(salary),2) from employees
-- join jobs on employees.job_id = jobs.job_id
-- where job_title != 'Programmer'
-- group by job_title


-- Write a query to get the average salary for all departments that employ more than 10 employees.

-- SELECT department_name, round(avg(salary),2) , count(employee_id) from employees
-- join departments on departments.department_id= employees.department_id
-- Group by department_name
-- having count(employees) > 10


-- Alter Table Statement
-- Write a SQL statement to change the name of the column “state_province” to “state” in the locations table, keeping the same data type and size.
-- ALTER TABLE locations RENAME COLUMN state_province TO state

-- Write a SQL statement to add a primary key to the “location_id” column in the locations table.

-- ALTER TABLE locations ADD primary key (location_id)


-- Write a SQL statement to create a simple table “new_countries” including columns country_id and country_name.
-- make sure that no duplicate data is added to the country_id column (which data type should you use for the column country_id ?)
-- make sure that no countries except Italy, India and China will be entered in the table.

-- CREATE TABLE new_countries (
-- country_id serial primary key,
-- 	country_name varchar(15) check(country_name in('Italy','India','China'))
-- );



-- Write a SQL statement to create a duplicate copy of the “new_countries” table including the structure and the data of the “new_countries” table.

-- create table duplicate_new_countries as (select * from new_countries);


-- Write a SQL statement to create a table named “new_jobs” including columns job_id, job_title, min_salary, max_salary

-- CREATE TABLE new_jobs (
-- job_id serial primary key,
-- 	job_title varchar(25) default '',
-- 	min_salary integer default 8000,
-- 	max_salary integer check (max_salary<=25000)
-- );


-- make sure that the max_salary column won’t exceed 25000.
-- make sure that job_title, min_salary and max_salary have the following default values:
-- job_title is blank
-- min_salary is 8000
-- max_salary is NULL.

-- Write an SQL statement to create a table called “new_employees” the table should include the following columns: employee_id, first_name, last_name, email, phone_number hire_date, job_id and salary.
-- make sure that, the employee_id column does not contain any duplicate value at the time of insertion,
-- make sure that the foreign key column job_id, references the column job_id in the “new_jobs” table.
-- CREATE TABLE new_employees (
-- employee_id integer unique, 
-- 	first_name varchar(20) not null, 
-- 	last_name varchar(20) not null, 
-- 	email varchar(50) not null, 
-- 	phone_number integer not null, 
-- 	hire_date date default current_date, 
-- 	job_id integer References new_jobs(job_id), 
-- 	salary integer not null
-- );




-- Write a SQL statement to create a table called “new_job_history” the table should include the following columns: employee_id, start_date, end_date, job_id
-- make sure that the foreign key employee_id references the column employee_id in the “new_employees” table.
-- make sure that the foreign key job_id is equal to an id that exists in the “new_jobs” table.

-- CREATE TABLE new_job_history (
-- 	employee_id integer References new_employees(employee_id),
-- 	start_date date not null,
-- 	end_date date default current_date,
-- 	job_id integer References new_jobs(job_id)
-- );

-- Insert
-- Write a SQL statement to insert a record with your own value into the “new_countries” table.
-- INSERT INTO new_countries (country_name) Values ('Italy'), ('China'),('India');


-- Using only one insert statement insert 3 row of data to the “new_countries” table



-- Write a SQL statement to insert the rows whithin the “new_countries” table to a duplicate table.
-- insert into duplicate_new_countries (country_name) select country_name from new_countries 


-- Write a SQL statement to insert data into the “new_employees” table, the job_id column must contain values which exist in the “new_jobs” table.

-- insert into new_jobs ( job_title) values ('killer')
-- select * from new_jobs


insert into new_employees (first_name , last_name, email, phone_number,job_id,salary) 
values ('jhon','mambo','mambojhon@gmail.com',555555,(select job_id from new_jobs where job_title ilike 'k%'),(select min_salary from new_jobs where job_title ilike 'k%'));
