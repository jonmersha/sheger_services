create database beshegercom_kids_service
create table videos(
	id int primary key auto_Increment,
    channel_id int,
    title varchar(100),
    deacription varchar(500),
    image_url varchar(100),
    video_url varchar(100),
    video_source_type varchar(30),
    is_enabled boolean,
    upload_date date,
    video_length double,
    video_uploder int,
    video_type varchar(50),
    video_language varchar(50),
    video_view int,
    video_likes int,
    is_free bool,
    access_type varchar(200),
    video_cost double
);
INSERT videos(channel_id,title) values('1','ABC');
create table uploader(
	id int primary key auto_Increment,
    username varchar(100) unique,
    full_name varchar(100) ,
    mobile_number varchar(20) unique,
    email varchar(100) unique
);


create table users(
	id int primary key auto_increment,
    mobile_number varchar(20) unique,
    email varchar(100) unique
);

create table user_view_history(
	video_id int,
    user_id int,
    is_liked bool,
    primary key(video_id,user_id)
);
create table channels(
	id int primary key auto_increment,
    channel_owner int,
    channel_name varchar(200),
    creation_date date,
    is_active bool,
    is_banned bool
);
create table channel_subscription(
	channel_id int,
    user_id int,
    subscription_date int,
    is_active bool,
    primary key(channel_id,user_id)

);
create table play_list(
	id int primary key auto_increment,
    play_list_name varchar(200),
    user_id int
);
create table play_list_video(
	id int primary key auto_increment,
    play_list_id varchar(200),
    video_id int,
    channel_id int,
    unique(play_list_id,video_id)
);
create table video_group(
	id int primary key auto_increment,
    group_name varchar(60)
);