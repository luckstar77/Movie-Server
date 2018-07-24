-- 创建数据库 
DROP database IF EXISTS `docker_database`;
create database `docker_database` default character set utf8 collate utf8_general_ci; 
-- 切换到test_data数据库
use docker_database; 
-- 建表 
DROP TABLE IF EXISTS `person`; 
CREATE TABLE `person` ( 
	`id` bigint(20) NOT NULL, 
	`name` varchar(255) DEFAULT NULL, 
	`age` bigint(20) NOT NULL,
	PRIMARY KEY (`id`) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 
-- 插入数据 
INSERT INTO `person` (`id`,`name`,`age` ) 
VALUES 
   (0,'Tom',18);