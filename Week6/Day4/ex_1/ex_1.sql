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


-- SELECT first_name as "First Name", last_name as "Last Name" from employees 
--  SELECT distinct department_id , first_name from employees order by first_name desc
-- SELECT first_name, last_name, salary, (salary*0.15) as PF from employees
-- select * from employees

-- SELECT employee_id,first_name, last_name, salary from employees order by salary
-- SELECT sum(salary) from employees
-- SElect max(salary), min(salary) from employees
-- SELECT count(employee_id) from employees
-- SELECT upper(first_name) from employees
-- SELECT left(first_name, 3) from employees
-- SELECT concat(first_name ,' ', last_name) as "full name" from employees

-- SELECT first_name, last_name, concat(first_name ,' ', last_name) as full_name, (char_length(first_name)+char_length(last_name)) as "Char length" from employees

--  SELECT first_name,first_name  ~ '^[0-9\.]+$' from employees

-- select * from employees order by employee_id limit 10


-- part 2


-- Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

-- SELECT first_name, last_name , salary from employees where salary between 10000 and 15000

-- select * from employees
-- Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

-- SELECT first_name, last_name , salary from employees where extract(year from hire_date )=1987

-- Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
-- SELECT first_name, last_name from employees where first_name ilike '%c%' and first_name ilike '%e%'

-- Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

-- select last_name ,job_title, salary from employees
-- join jobs on employees.job_id = jobs.job_id
-- where salary not in(4500,10000,15000)
-- 	and	job_title not in ('Programmer','Shipping Clerk')


-- Write a query to display the last names of all employees whose last name contains exactly six characters.

-- select last_name from employees where char_length(last_name)>6


-- Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.

-- select last_name from employees where last_name ilike '__e%'

-- Write a query to display the jobs/designations available in the employees table.

-- select distinct job_title, count (employees) from employees
-- join jobs on jobs.job_id= employees.job_id
-- group by job_title

-- Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.

-- SELECT * from employees where last_name in ('Jones','Blake','Scott','King','Ford')


