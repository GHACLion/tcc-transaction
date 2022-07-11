CREATE
DATABASE `TCC` /*!40100 DEFAULT CHARACTER SET utf8 */;

use
TCC;

CREATE TABLE `TCC_TRANSACTION_CAP`
(
    `TRANSACTION_ID`   int(11) NOT NULL AUTO_INCREMENT,
    `DOMAIN`           varchar(100) DEFAULT NULL,
    `GLOBAL_TX_ID`     varbinary(32) NOT NULL,
    `BRANCH_QUALIFIER` varbinary(32) NOT NULL,
    `CONTENT`          varbinary(8000) DEFAULT NULL,
    `STATUS`           int(11) DEFAULT NULL,
    `TRANSACTION_TYPE` int(11) DEFAULT NULL,
    `RETRIED_COUNT`    int(11) DEFAULT NULL,
    `CREATE_TIME`      datetime     DEFAULT NULL,
    `LAST_UPDATE_TIME` datetime     DEFAULT NULL,
    `VERSION`          int(11) DEFAULT NULL,
    PRIMARY KEY (`TRANSACTION_ID`),
    UNIQUE KEY `UX_TX_BQ` (`GLOBAL_TX_ID`,`BRANCH_QUALIFIER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `TCC_TRANSACTION_ORD`
(
    `TRANSACTION_ID`   int(11) NOT NULL AUTO_INCREMENT,
    `DOMAIN`           varchar(100) DEFAULT NULL,
    `GLOBAL_TX_ID`     varbinary(32) NOT NULL,
    `BRANCH_QUALIFIER` varbinary(32) NOT NULL,
    `CONTENT`          varbinary(8000) DEFAULT NULL,
    `STATUS`           int(11) DEFAULT NULL,
    `TRANSACTION_TYPE` int(11) DEFAULT NULL,
    `RETRIED_COUNT`    int(11) DEFAULT NULL,
    `CREATE_TIME`      datetime     DEFAULT NULL,
    `LAST_UPDATE_TIME` datetime     DEFAULT NULL,
    `VERSION`          int(11) DEFAULT NULL,
    PRIMARY KEY (`TRANSACTION_ID`),
    UNIQUE KEY `UX_TX_BQ` (`GLOBAL_TX_ID`,`BRANCH_QUALIFIER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `TCC_TRANSACTION_RED`
(
    `TRANSACTION_ID`   int(11) NOT NULL AUTO_INCREMENT,
    `DOMAIN`           varchar(100) DEFAULT NULL,
    `GLOBAL_TX_ID`     varbinary(32) NOT NULL,
    `BRANCH_QUALIFIER` varbinary(32) NOT NULL,
    `CONTENT`          varbinary(8000) DEFAULT NULL,
    `STATUS`           int(11) DEFAULT NULL,
    `TRANSACTION_TYPE` int(11) DEFAULT NULL,
    `RETRIED_COUNT`    int(11) DEFAULT NULL,
    `CREATE_TIME`      datetime     DEFAULT NULL,
    `LAST_UPDATE_TIME` datetime     DEFAULT NULL,
    `VERSION`          int(11) DEFAULT NULL,
    PRIMARY KEY (`TRANSACTION_ID`),
    UNIQUE KEY `UX_TX_BQ` (`GLOBAL_TX_ID`,`BRANCH_QUALIFIER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `TCC_TRANSACTION_UT`
(
    `TRANSACTION_ID`   int(11) NOT NULL AUTO_INCREMENT,
    `DOMAIN`           varchar(100) DEFAULT NULL,
    `GLOBAL_TX_ID`     varbinary(32) NOT NULL,
    `BRANCH_QUALIFIER` varbinary(32) NOT NULL,
    `CONTENT`          varbinary(8000) DEFAULT NULL,
    `STATUS`           int(11) DEFAULT NULL,
    `TRANSACTION_TYPE` int(11) DEFAULT NULL,
    `RETRIED_COUNT`    int(11) DEFAULT NULL,
    `CREATE_TIME`      datetime     DEFAULT NULL,
    `LAST_UPDATE_TIME` datetime     DEFAULT NULL,
    `VERSION`          int(11) DEFAULT NULL,
    PRIMARY KEY (`TRANSACTION_ID`),
    UNIQUE KEY `UX_TX_BQ` (`GLOBAL_TX_ID`,`BRANCH_QUALIFIER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;