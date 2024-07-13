create db gojo_service
CREATE TABLE SERVICE_PROVIDER(
	providerId int,
    serviceId int,
    productImagePath varchar(2000),
    serviceDescription varchar(1000),
    detailedDescription varchar(5000),
    areasUnderCoverage varchar(5000),
    meanseOfDelivery varchar(200),
    unitPrice double,
    primary key(providerId,serviceId)
);

CREATE TABLE USER_PROFILE(
	userId INT AUTO_INCREMENT PRIMARY KEY,
    userCode varchar(200) unique,
    fullName varchar(200),
    gender varchar(3),
    country varchar(30),
    ciry varchar(40),
    serviGeolocation varchar(70),
    emailId varchar(100) unique,
    mobileNumber varchar(20) unique
    );
CREATE TABLE USER_SERVICE_INTERATION 


CREATE TABLE SERVICE(
serviceId int AUTO_INCREMENT primary key,
serviceName varchar(200),
servieDescriprion varchar(500)
);

CREATE TABLE SERVICE_ORDER(
	orderId int auto_Increment primary key,
);


CREATE TABLE SERVICE_TYPE();
CREATE TABLE PRODUCT_LINE();


insert into SERVICE(serviceName,servieDescriprion) values('yebanitina witetoch','Prepartions of Food ingreadint')
