--liquibase formatted sql

--changeset raphael:20231110:00
create table user (
    user_id int primary key,
    login varchar(50) not null,
    password varchar(50) not null
);