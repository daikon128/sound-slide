DROP TABLE IF EXISTS `sound`;

CREATE TABLE `sound`
(
    id  INT(20) AUTO_INCREMENT,
    user_id  INT(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) DEFAULT '',
    path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;