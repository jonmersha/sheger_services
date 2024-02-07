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
create table service_order(
    id int primary key auto_Increment,
    order_id int,
    product_id int,
    product_price double,
    order_date date,
    isPaymentDone boolean,
    isDelivered boolean,
    delivery_status_history int,
)
create table shoping_cart(
    
)
create table shiping(
    id int primary key auto_Increment,
    orderId int,
    shipping_status varchar(),
    current_location varchar(),
    loc_latitude varchar(40),
    loc_longitude varchar(40),
    carrier_id int,
    start_time date,
    delivered_time int,
)
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
create table non_compliance_type(
    id int primary key auto_Increment,
    non_compliance_name varchar(100) unique,
    siverity_level varchar(100),
    related_measures vachar(100),
    length_of_disconnect varchar(100)
);
create table service_consumer_non_confirmity_report_by_provider(
    id int primary key auto_Increment,
    reporting_provider_id int,
    consumer_id int,
    non_complianc_type
    report_description varchar(2000),
    reporting_date date
    
)
create table service_deliverer_non_confirmity_report_consumer(
     id int primary key auto_Increment,
    reporting_consumer_id int,
    provider_id int,
    non_complianc_type
    report_description varchar(2000),
    reporting_date date
    
)
create table referal_program(
    id int primary key auto_Increment,
    referal_key varchar(100),
    referal_date varchar(100)
    refered_by varchar(100)
    referStatus varchar(100)
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

-- Payment methods used to pay for the ordered product should be govrened 
-- during order time and the users can choos among the playment methods 
create table payment_setting(
    id int primary key auto_Increment,
    user_id int,
    source_account varchar(100) unique,
    payment_accou 
    account_verified boolean,
    date_created date

)

create table offilines_payment_confirmation(

)
-- payment infomations for products are ready from the hira system and the amount should be payed from the banks mobile app
-- the system should expose the amount from 

--the other options is paying the using Code form any applications 
-- and the pyament infomations shuld be sent to the system from the bank and 
-- the informations abou the payemnts should be acisisble form banks sytem  

create table payment_local_banks(
    id int primary key auto_Increment,
    order_number int,
    payment_status boolean,
    payment_transaction_number varchar(400), 
);
create table financial_institutions(
    id int primary key auto_Increment,
    org_name varchar(100),
    logo_path varchar(100)
)

==========================Additional database Storage for============
-- table for adevertisment
-- Table for Reward


