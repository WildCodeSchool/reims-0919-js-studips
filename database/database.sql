drop database if exists studips;
create database studips;
use studips;
create table city
(
    id int auto_increment primary key,
    city_name varchar(30) not null
);

create table user 
(
    id int auto_increment  primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    password varchar(30) not null,
    email varchar(30) not null,
    birthday date not null,
    hobbies varchar(100) null,
    study varchar(50) not null,
    bio varchar(250) null,
    city_id int not null,
    foreign key (city_id) references city(id)  
);
create table post
(
    id int auto_increment primary key,
    user_id int null,
    title varchar(30) not null,
    category enum('Cours','Logement','Fournitures','Job','Event'),
    content varchar(300) not null,
    foreign key (user_id) references user(id),
    city_id int not null,
    foreign key (city_id) references city(id)
);
create table event
(
    id int not null primary key,
    day date not null,
    foreign key (id) references post(id)
);
create table dipser 
(
    user_dipser1 int not null,
    user_dipser2 int not null,
    foreign key (user_dipser1) references user(id),
    foreign key (user_dipser2) references user(id)
);
