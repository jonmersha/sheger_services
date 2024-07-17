-- create database beshegercom_my_stock;
-- product_line
-- procuts
-- Stocks
-- sales_table
create table category(
	id int primary key auto_increment,
    name varchar(200),
	merchant_id int references users(user_id),
    description varchar(500),
	status int
);

insert into category(name,merchant_id,description,status) values('wearble',1,'pants',1);
create table users(
	user_id int primary key auto_increment,
	login_token varchar(200),
	user_email varchar(100) unique,
	full_name varchar(200),
	user_type int
	);
insert into users(login_token,user_email,full_name,user_type) values('123wwqwe','jonmersha@gmail.com','Yohannes Mitike Mersha',0);
create table product(
	id int primary key auto_increment,
	category int references product_line(product_line_id),
	descriptions varchar(500),
	merchant_id int references product_line(product_line_id),
	quantity int,
	units_of_measure varchar(30),
	unit_price double,
	min_treshhold int,
    profit_margin double,
    discounted_percentage double,
	image_path varchar(100)
);

INSERT INTO `beshegercom_my_stock`.`product`
(
`category`,
`descriptions`,
`merchant_id`,
`quantity`,
`units_of_measure`,
`unit_price`,
`min_treshhold`,
`profit_margin`,
`discounted_percentage`,
`image_path`)
VALUES
(
1,
'Belt',
1,
13,
'ps',
456,
7,
15,
0,
'no image');



create table stock_bin(
	id int primary Key auto_increment,
    product_id int references products(product_id),
	prev_quaitity int,
    cur_quaitity int,
	merchant_id int  references users(user_id),
	store_id int  references merchant_store(id),
	pre_price double,
    cur_price double,
	reg_date datetime,
	registered_by int
);

create table merchant_store(
	id int primary key auto_increment,
	name varchar(100),
	owner int references users(user_id),
	adress varchar(200),
	geo_lat varchar(30),
	geo_long varchar(30)

);

INSERT INTO `beshegercom_my_stock`.`merchant_store`
(
`name`,
`owner`,
`adress`,
`geo_lat`,
`geo_long`)
VALUES
(
'Suluta shop',
1,
'sululuta',
'213123123',
'123123123');


create table product_selles(
order_id int 
	
);
create table product_order(
	product_id int,
	urder_date int,
	order_quantity int,
	unit_price int,
	order_status int,
	order_by int,
);





