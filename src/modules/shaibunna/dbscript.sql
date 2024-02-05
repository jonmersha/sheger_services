create database beshegercom_shaibuna_service
use beshegercom_shaibuna_service
create table consumers(
    int id primary key auto_Increment,
    full_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    loc_latitude varchar(30),
    loc_longitude varchar(30)
)
create table product(
    id int primary key auto_Increment,
    productName varchar(),
    productDescription varchar(),
    common_image_path varchar(200), 
)
create table product_cat(
    id int primary key auto_Increment,
    category_name varchar(1000),
    category_description varchar(2000)
)
create table services()
create table service_order()
create table service_providers(
    int id primary key auto_Increment,
    full_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    service_provider_dscription varchar(5000),
    service_descriptions varchar(5000),
    isFlagedForNonConfirmity boolean,
)
create table service_provider_non_confirmity_report(
    provider_id int,
    reporter_id int,
    report_description varchar(300),
    report_date date

)
create table service_consumer_non_confirmity_report(
    
)
create table service_deliverer_non_confirmity_report(
    
)
create table service_providers(
    id int primary key auto_Increment,
    full_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    service_provider_dscription varchar(5000),
    service_descriptions varchar(5000),
    provider_logo varchar(100),
    provider_banner varchar(100),
    isFlagedForNonConfirmity boolean
);

===========================================
create table consumers(
    id int primary key auto_Increment,
    full_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    loc_latitude varchar(30),
    loc_longitude varchar(30)
);

create table product(
    id int primary key auto_Increment,
    productName varchar(100),
    productDescription varchar(100),
    common_image_path varchar(200)
);
create table product_cat(
    id int primary key auto_Increment,
    category_name varchar(1000),
    category_description varchar(2000)
);
create table bussiness_owner(
    id int primary key auto_Increment,
    full_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    email_confirmed boolean,
    phone_confirmed boolean,
    locations_descriotion varchar(100)
);

create table service_centers(
    id int primary key auto_Increment,
    owner_id int,
    bussiness_name varchar(200),
    email varchar(100),
    mobile_number varchar(100),
    service_provider_dscription varchar(5000),
    service_descriptions varchar(5000),
    bussiness_address varchar(200),
    provider_logo varchar(100),
    provider_banner varchar(100),
    email_confirmed boolean,
    phone_confirmed boolean,
    locations_descriotion varchar(100),
    providerType int,
    have_licence boolean,
    license_path varchar(100),
	loc_latitude varchar(30),
    loc_longitude varchar(30),
    delivery_avilable boolean,
    service_delivery_range_KM int
);
create table providers_service(
    id int primary key auto_Increment,
    provider_id int,
    service_id int,
    service_description varchar(1000),
    product_price double,
    is_avilable_now boolean,  
    cat_take_away boolean,
    heme_delivery boolean,
    available_amount int,
    tresh_hold_amount int
);

