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


-- Create Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    -- Add other user fields as needed
    UNIQUE(Email)
);

-- Create ParkingLocation table
CREATE TABLE ParkingLocation (
    LocationID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Latitude DECIMAL(10, 8) NOT NULL,
    Longitude DECIMAL(11, 8) NOT NULL,
    Type VARCHAR(50) NOT NULL,
    Capacity INT NOT NULL,
    Availability INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Rating DECIMAL(3, 2),
    Accessibility VARCHAR(100),
    OwnerID INT,
    CompactCapacity INT DEFAULT 0,
    SedanCapacity INT DEFAULT 0,
    SUVCapacity INT DEFAULT 0,
    LargeCarCapacity INT DEFAULT 0,
    FOREIGN KEY (OwnerID) REFERENCES Users(UserID)
);

-- Create Reviews table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ParkingLocationID INT,
    Rating DECIMAL(3, 2) NOT NULL,
    Comment TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ParkingLocationID) REFERENCES ParkingLocation(LocationID)
);

-- Create Reservations table
CREATE TABLE Reservations (
    ReservationID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ParkingLocationID INT,
    StartTime DATETIME NOT NULL,
    EndTime DATETIME NOT NULL,
    Status VARCHAR(20) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ParkingLocationID) REFERENCES ParkingLocation(LocationID)
);

-- Create UserCars table
CREATE TABLE UserCars (
    UserCarID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    CarType VARCHAR(50) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
