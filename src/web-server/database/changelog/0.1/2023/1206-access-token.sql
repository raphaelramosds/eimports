--liquibase formatted sql

--changeset raphael:20231206:01
ALTER TABLE seller
ADD COLUMN access_token VARCHAR(512) UNIQUE;