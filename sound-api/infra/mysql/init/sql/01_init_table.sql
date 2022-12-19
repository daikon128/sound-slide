DROP TABLE IF EXISTS `sound`;

CREATE TABLE `sound`
(
    id  INT(20) AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL ,
    description VARCHAR(100) DEFAULT '',
    data LONGBLOB,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;