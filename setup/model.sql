

create database node_app;
\c node_app;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table users(
  user_id uuid default uuid_generate_v4() primary key,
  username varchar(20) not null,
  contact varchar(12) not null,
  created_at timestamp default current_timestamp,
  deleted_at timestamp default null
);

insert into users(username, contact) values ('ali', '998909007812'),('salim', '998909007878'),
('nozima', '998909001111');