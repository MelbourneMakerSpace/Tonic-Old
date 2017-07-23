-- MySQL dump 10.13  Distrib 5.5.55, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Tonic
-- ------------------------------------------------------
-- Server version	5.5.55-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `Tonic`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `Tonic` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `Tonic`;

--
-- Table structure for table `accesslog`
--

DROP TABLE IF EXISTS `accesslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accesslog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `swipetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'timestamp when the key was scanned',
  `serial` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT 'RFID serial number scanned',
  `access` tinyint(1) NOT NULL COMMENT 'true if door was opened, false if denied',
  `reason` varchar(40) CHARACTER SET utf8 DEFAULT NULL COMMENT 'reason why key was denied',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4822 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accesslog`
--

LOCK TABLES `accesslog` WRITE;
/*!40000 ALTER TABLE `accesslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `accesslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `cid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `emergencyName` varchar(255) NOT NULL,
  `emergencyPhone` varchar(16) NOT NULL,
  `emergencyEmail` varchar(100) DEFAULT NULL,
  `paypalEmail` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=153 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (120,'kevin','','test','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(121,'test','','test','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(122,'asdasd','','guy','test@testasdasd.com','123123asdasd123','bob','123','bill@microsoft.com','elon@paypal.com'),(123,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(124,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(125,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(126,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(127,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(128,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(129,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(130,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(131,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(132,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(133,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(136,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(137,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(138,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(139,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(140,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(141,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(142,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(143,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(144,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(145,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(146,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(147,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(148,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(149,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(150,'new','','guy','test@test.com','123123123','bob','123','bill@microsoft.com','elon@paypal.com'),(151,'','','','','','','','',''),(152,'asdasd','','guy','test@testasdasd.com','123123asdasd123','bob','123','bill@microsoft.com','elon@paypal.com');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_amazon`
--

DROP TABLE IF EXISTS `contact_amazon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_amazon` (
  `cid` mediumint(8) unsigned NOT NULL,
  `amazon_name` varchar(255) NOT NULL,
  PRIMARY KEY (`amazon_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_amazon`
--

LOCK TABLES `contact_amazon` WRITE;
/*!40000 ALTER TABLE `contact_amazon` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_amazon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_paypal`
--

DROP TABLE IF EXISTS `contact_paypal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_paypal` (
  `cid` mediumint(8) unsigned NOT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_paypal`
--

LOCK TABLES `contact_paypal` WRITE;
/*!40000 ALTER TABLE `contact_paypal` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_paypal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `key`
--

DROP TABLE IF EXISTS `key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `key` (
  `kid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(8) unsigned NOT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `serial` varchar(255) NOT NULL,
  `slot` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`kid`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `key`
--

LOCK TABLES `key` WRITE;
/*!40000 ALTER TABLE `key` DISABLE KEYS */;
/*!40000 ALTER TABLE `key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member` (
  `cid` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membership` (
  `sid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(8) unsigned NOT NULL,
  `pid` mediumint(8) unsigned NOT NULL,
  `start` date NOT NULL,
  `end` date DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=123 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership`
--

LOCK TABLES `membership` WRITE;
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `module` (
  `did` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `revision` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `pmtid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `code` varchar(8) NOT NULL,
  `value` mediumint(8) NOT NULL,
  `credit` mediumint(8) unsigned NOT NULL,
  `debit` mediumint(8) unsigned NOT NULL,
  `method` varchar(255) NOT NULL,
  `confirmation` varchar(255) NOT NULL,
  `notes` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pmtid`)
) ENGINE=MyISAM AUTO_INCREMENT=3586 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_amazon`
--

DROP TABLE IF EXISTS `payment_amazon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_amazon` (
  `pmtid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `amazon_name` varchar(255) NOT NULL,
  PRIMARY KEY (`pmtid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_amazon`
--

LOCK TABLES `payment_amazon` WRITE;
/*!40000 ALTER TABLE `payment_amazon` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_amazon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_paypal`
--

DROP TABLE IF EXISTS `payment_paypal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_paypal` (
  `pmtid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pmtid`)
) ENGINE=MyISAM AUTO_INCREMENT=3586 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_paypal`
--

LOCK TABLES `payment_paypal` WRITE;
/*!40000 ALTER TABLE `payment_paypal` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_paypal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plan` (
  `pid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `voting` tinyint(1) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_picture`
--

DROP TABLE IF EXISTS `profile_picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profile_picture` (
  `cid` mediumint(8) unsigned NOT NULL,
  `filename` varchar(255) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_picture`
--

LOCK TABLES `profile_picture` WRITE;
/*!40000 ALTER TABLE `profile_picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resetPassword`
--

DROP TABLE IF EXISTS `resetPassword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resetPassword` (
  `cid` mediumint(8) unsigned NOT NULL,
  `code` varchar(40) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resetPassword`
--

LOCK TABLES `resetPassword` WRITE;
/*!40000 ALTER TABLE `resetPassword` DISABLE KEYS */;
/*!40000 ALTER TABLE `resetPassword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `rid` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (9,'webAdmin'),(10,'member');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permission`
--

DROP TABLE IF EXISTS `role_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_permission` (
  `rid` mediumint(8) unsigned NOT NULL,
  `permission` varchar(255) NOT NULL,
  PRIMARY KEY (`rid`,`permission`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permission`
--

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `cid` mediumint(11) unsigned NOT NULL,
  `username` varchar(32) NOT NULL,
  `hash` varchar(200) DEFAULT NULL,
  `salt` varchar(16) NOT NULL DEFAULT '',
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (0,'kirk','$2y$10$fkfoMbuUMCiw3CQgp3Jrs.mZq9teG/WzyWAEOl6fIOnEmO4OMDEGG','0'),(123,'test@test.com','$2y$10$ON3L3UeFrhPznsreserF6uogkJ/B2KRSEkzNyOQ47MSov4kcH7ar.',''),(151,'','$2y$10$gnfZq0XvXZQd60zYLOOa/OpNEKtA6jEan2uULgqynpaWUNkLV/fHy',''),(152,'test@testasdasd.com','0','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `cid` mediumint(8) unsigned NOT NULL,
  `rid` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`cid`,`rid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (123,9),(152,9);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variable`
--

DROP TABLE IF EXISTS `variable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variable` (
  `name` varchar(255) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variable`
--

LOCK TABLES `variable` WRITE;
/*!40000 ALTER TABLE `variable` DISABLE KEYS */;
/*!40000 ALTER TABLE `variable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-23  5:31:53
