CREATE DATABASE  IF NOT EXISTS `ongnhuahtt` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ongnhuahtt`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: ongnhuahtt
-- ------------------------------------------------------
-- Server version	5.7.17-log

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
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `title` varchar(500) DEFAULT NULL COMMENT 'Tên của catalog. \nVD: \n+ Bảng giá Joint cao su các loại\n+ Catalogue ống u.PVC cứng hệ mét (ISO 4422:1990)',
  `url` varchar(250) DEFAULT NULL COMMENT 'Link download bảng giá hoặc catalog',
  `type` int(1) DEFAULT '1' COMMENT '1: Bảng giá\n2: Catalog',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) DEFAULT NULL,
  `order` int(11) DEFAULT NULL COMMENT 'Trình tự sắp xếp của CATEGORY trên Website',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Ống CPVC',0,NULL,NULL,NULL),(2,'Ống Nhôm',1,NULL,NULL,NULL),(3,'Ống PVC',3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `content` text,
  `google_map` text COMMENT 'Link google map',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer`
--

DROP TABLE IF EXISTS `footer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(200) DEFAULT NULL COMMENT 'Content',
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `fax` varchar(50) DEFAULT NULL,
  `hotline` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer`
--

LOCK TABLES `footer` WRITE;
/*!40000 ALTER TABLE `footer` DISABLE KEYS */;
/*!40000 ALTER TABLE `footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduction`
--

DROP TABLE IF EXISTS `introduction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `introduction` (
  `id` int(11) NOT NULL,
  `content` text COMMENT 'Nội dung ',
  `image` varchar(200) DEFAULT NULL COMMENT 'LInk hình',
  `updated_date` datetime DEFAULT NULL COMMENT 'Ngày update',
  `google_map` text COMMENT 'Link google map',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduction`
--

LOCK TABLES `introduction` WRITE;
/*!40000 ALTER TABLE `introduction` DISABLE KEYS */;
/*!40000 ALTER TABLE `introduction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL COMMENT 'Tiêu đề của: Tin tức, giới thiệu công ty,  thông tin liên hệ',
  `content` longtext COMMENT 'Nội dung tin tức, thông tin công ty, thông tin liên hệ',
  `type` int(1) DEFAULT '1' COMMENT '1: TIN TỨC\n2: THÔNG TIN CÔNG TY\n',
  `active` int(1) DEFAULT NULL COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL COMMENT 'Link ảnh chính',
  `image_list` text COMMENT 'Link ảnh ở Detail screen với format sau\nLink Ảnh 1|Link ảnh 2|link ảnh 3|link ảnh 4',
  `description` longtext COMMENT 'Mô tả chi tiết về sản phẩm ở định dạng HTML',
  `price` double DEFAULT '0' COMMENT 'Nếu giá bằng không là LIÊN HỆ\nNếu giá > 0 thì để giá',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `display_mode` int(1) DEFAULT NULL COMMENT '1: Hiển thị ở cả TRANG CHỦ và SẢN PHẨM\n0: Chỉ hiển thị ở trang SẢN PHẨM',
  `category_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sanr pham1','products-images/p1.jpg',NULL,'asfsdf',0,NULL,NULL,1,NULL,NULL),(2,'sdfsdf2','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(4,'Sanr pham3','products-images/p1.jpg',NULL,'asfsdf',0,NULL,NULL,1,NULL,NULL),(5,'sdfsdf4','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(6,'sdfsdf5','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(7,'Sanr pham6','products-images/p1.jpg',NULL,'asfsdf',0,NULL,NULL,1,NULL,NULL),(8,'sdfsdf7','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(9,'sdfsdf8','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(10,'sdfsdf9','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(11,'sdfsdf10','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(12,'Sanr pham11','products-images/p1.jpg',NULL,'asfsdf',0,NULL,NULL,1,NULL,NULL),(13,'sdfsdf12','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(14,'sdfsdf13','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(15,'sdfsdf14','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,1,NULL,NULL),(16,'sdfsdf15','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,2,NULL,NULL),(17,'sdfsdf16','products-images/p1.jpg',NULL,'ggg',0,NULL,NULL,2,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(30) NOT NULL,
  `password` text,
  `fullname` varchar(50) DEFAULT NULL,
  `active` int(1) DEFAULT NULL COMMENT '0: No\n1: Yes',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-19  0:01:15
