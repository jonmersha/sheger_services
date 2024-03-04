create database beshegercom_movie_service
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

create table movies(
ID int primary key auto_Increment,
titile varchar(100),
movie_description varchar(500),
view_number int,
likes_number int,
rating double,
image_url varchar(500),
video_url varchar(500),
is_series boolean 
);

create table user_view_history(
ID int primary key auto_Increment,
user_id int,
movie_id int,
isLiked boolean,
Rating float
);
create table series(
ID int primary key auto_Increment,
Parent_ID int,
titile varchar(100),
movie_description varchar(500),
image_url varchar(500),
video_url varchar(500),
epsode_ int,
season_ int
);

insert into movies(movie_title,movie_desc,movie_path) values('Found','Pilot','/movie/video/Found/Found S1, E1 - Pilot.mp4');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Sinning','/movie/video/Found/Found S1, E2 - Missing While Sinning');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Widowed','/movie/video/Found/Found S1, E3 - Missing While Widowed');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While a Pawn','/movie/video/Found/Found S1, E4 - Missing While a Pawn.mp4');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Undocumented','/movie/video/Found/Found S1, E5 - Missing While Undocumented.mp4');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Undocumented','/movie/video/Found/Found S1, E5 - Missing While Undocumented.mp4');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Indigenous','/movie/video/Found/Found S1, E7 - Missing While Indigenous.mp4');
insert into movies(movie_title,movie_desc,movie_path) values('Found','Missing While Homeless','/movie/video/Found/Found S1, E8 - Missing While Homeless.mp4');



INSERT INTO movies(
titile,
movie_description,
view_number,
likes_number,
rating,
image_url,
video_url,
is_series)
VALUES(
	'Tewilign Amharic Movies',
    'Tewilign Amharic Movies are romantic movies ',
    1000,
    20,
    5,
    'http://192.168.0.3:3000/movie/image/tewilign.png',
    'https://go.wootly.ch/dash?source=web&id=d2b8ac5ed84dc6ab92b5db460575dc157ed41b4a&sig=HbFOr6udHRLkNmW_5o7v-w&expire=1709470714&ofs=11&usr=180566',
    false
);

update movies set video_url='/movie/Video/Found/Found S1, E1 - Pilot.mp4' where ID>2