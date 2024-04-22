CREATE TABLE P_LOCATION(
 ID INT PRIMARY KEY auto_increment,
    DEVCIE_ID INT,
 LOCATIONS_NAME VARCHAR(200),
 LATITUDE VARCHAR(100),
 LOBGITUDE VARCHAR(100)
);
CREATE TABLE PRICE_BY_CAR(
 ID INT PRIMARY KEY auto_increment,
    LOC_ID INT,
    CAR_TYPE INT,
    LENG_OF_TIME_MAX int,
    PRICE DOUBLE
);

alter table PRICE_BY_CAR 
add constraint fk_location_to_price 
foreign key (LOC_ID)
references P_LOCATION(ID);

CREATE TABLE CAP_BY_CAR_SIZE(
    LOC_ID INT,
    SIZE_ID INT,
    CAPACITY INT
);

alter table CAP_BY_CAR_SIZE 
add constraint fk_location_to_side 
foreign key (LOC_ID)
references P_LOCATION(ID);

alter table CAP_BY_CAR_SIZE 
add constraint fk_size_to_car_size_to_size 
foreign key (SIZE_ID)
references CAR_SIZE(ID);

-- drop table CAR_SIZE;

CREATE TABLE CAR_SIZE(
ID INT primary key auto_increment,
SIZE_DESC varchar(100),
LENGHTH DOUBLE,
WIDTH DOUBLE
);

-- drop table PARKED;

CREATE TABLE PARKED(
 ID INT primary key auto_increment,
    PARKING_ID int,
    DRIVER_ID INT,
    START_TIME datetime,
    END_TIME datetime,
    AMOUNT_DUE DOUBLE
);

create table DRIVER(
ID int  primary key auto_increment,
DeviceId varchar(100),
full_name varchar(150)
);

create table DRIVER_CAR(
ID int primary key auto_increment,
driver_id int,
car_id int
);

alter table PARKED 
add constraint fk_location_parked
foreign key (PARKING_ID)
references P_LOCATION(ID);

alter table PARKED 
add constraint fk_drver_parked
foreign key (DRIVER_ID)
references DRIVER(ID);

alter table DRIVER_CAR 
add constraint fk_driver_car
foreign key (driver_id)
references DRIVER(ID);

alter table DRIVER_CAR 
add constraint fk_driver_car_SIZE
foreign key (car_id)
references CAR_SIZE(ID);