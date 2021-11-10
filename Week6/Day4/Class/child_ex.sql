

-- Create TABLE child (
-- id serial primary key,
-- name varchar(25) NOT NULL UNIQUE,
-- 	age smallint check(age<10)
-- );
	
-- Create Table book (
-- id serial primary key,
-- 	title varchar(30) not null,
-- 	author varchar(30) not null
-- );

-- 	Create table borrow_history (
-- 		child_id integer REFERENCES child(id) on delete cascade on update cascade,
-- 		book_id integer  REFERENCES book(id) on delete cascade on update cascade,
-- 		borrow_date timestamp  not null,
-- 		primary key (child_id,book_id)
-- 							);
	
-- insert into child (name,age) values 
-- 						('Robie',8),
-- 						('Dan',6),
-- 						('Yael', 5),
-- 						('Sara', 7)
-- returning *;


-- insert into book (title,author)
-- values ('Alice In Wonderland',  'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')

-- Returning *;

-- show datestyle
-- insert into borrow_history (child_id,book_id,borrow_date)
-- values ( 1,3,'3/10/2021 10:00'),
-- 		(2,1,'28/8/2021 16:00'),
-- 		(4,2,'7/7/2021 15:00'),
-- 		(3,2,'10/10/2021 14:00');


-- select * from borrow_history

-- SELECT title ,author from book

-- SELECT name,title from child
-- full join borrow_history on borrow_history.child_id=child.id
-- full join book on borrow_history.book_id = book.id

-- SELECT round(avg(age),2) from child
--  join borrow_history on borrow_history.child_id=child.id
--  join book on borrow_history.book_id = book.id
-- where title ilike 'harry%'



-- delete from child where name='Sara'


-- select * from borrow_history

-- I. Part

-- 1. child
-- id, name NOT NULL UNIQUE, age

-- 2. book
-- id, title NOT NULL, author NOT NULL

-- A child can borrow many books
-- A book can be borrowed by many children
-- ==> Junction table
-- Add a column, for the date and time of the borrowing

-- 3. Add 4 children  in the child table and 3 books in the book table
-- 4. Add 2 records in the junction table. For example, the child named John, borrowed Alice in Wonderland
-- 5. Select everything from the junction table
-- 6. Select the name and title of the borrowed books
-- 7. Select the name, and title of all the children and all the books
-- 8. What is the average age of the children, that borrowed harry potter
-- 9. Delete a child from the child table, what happened in the junction table

-- II. Part
-- 1. Make sure that the age is never bigger than 10 (do it when you create the table);