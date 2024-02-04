create database movie_service
create table movies(
    ID int primary key auto_Increment,
    movie_title varchar(200),
    movie_desc varchar(500),
    movie_director varchar(100),
    movie_icon_path varchar(200),
    movie_icon_large varchar(200),
    movie_triller_path varchar(200),
    movie_path varchar(200),
    movie_uploader int,
    upload_date date,
    current_status varchar(50),
    accesse_allowed boolean,
    view_count int

);

{
    ID :"",
    movie_title :"",
    movie_desc :"",
    movie_director :"",
    movie_icon_path :"",
    movie_icon_large :"",
    movie_triller_path :"",
    movie_path:"",
    movie_uploader :"",
    upload_date :"",
    current_status :"",
    accesse_allowed :"",
    view_count :""

}