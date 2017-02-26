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
  `title` varchar(250) DEFAULT NULL COMMENT 'Tên của catalog. \nVD: \n+ Bảng giá Joint cao su các loại\n+ Catalogue ống u.PVC cứng hệ mét (ISO 4422:1990)',
  `url` text COMMENT 'Link download bảng giá hoặc catalog',
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Ống Nhf',3,1,'2017-02-19 01:00:01','2017-02-19 12:02:30'),(2,'Ống Nhôm',1,NULL,'2017-02-19 01:00:01',NULL),(3,'Ống PVC',3,NULL,'2017-02-19 01:00:01',NULL),(4,'Ống Nhôm 1',1,0,'2017-02-19 01:00:01',NULL),(5,'Ống Nhôm 2',3,0,'2017-02-19 01:00:01',NULL),(6,'Ống Nhôm555',2,1,'2017-02-19 01:04:17',NULL),(7,'Ống Nhf',2,1,'2017-02-19 12:02:04',NULL);
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
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `parameter` varchar(45) DEFAULT NULL,
  `menu_type` int(1) DEFAULT NULL COMMENT '0: Dùng cho ecommerce \n1: Dùng cho admin',
  `order` int(2) DEFAULT NULL,
  `active` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'homepage','TRANG CHỦ',NULL,0,0,1),(2,'intro','GIỚI THIỆU',NULL,0,1,1),(3,'products','SẢN PHẨM','({cid: \'init\'})',0,2,1),(4,'catalogue','CATALOG',NULL,0,3,1),(5,'project','DỰ ÁN',NULL,0,4,1),(6,'recruitment','TUYỂN DỤNG',NULL,0,5,1),(7,'news','TIN TỨC',NULL,0,6,1),(8,'contact','LIÊN HỆ',NULL,0,7,1),(9,'manage_product','QUẢN LÝ SẢN PHẨM',NULL,1,1,1),(10,'manage_news','QUẢN LÝ TIN TỨC',NULL,1,4,1),(11,'manage_contact','QUẢN LÝ LIÊN HỆ',NULL,1,5,1),(12,'manage_catalog','QUẢN LÝ CATALOG',NULL,1,3,1),(13,'manage_footer','QUẢN LÝ FOOTER',NULL,1,6,1),(14,'manage_introduction','QUẢN LÝ GIỚI THIỆU',NULL,1,2,1),(15,'manage_category','QUẢN LÝ DANH MỤC',NULL,1,0,NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL COMMENT 'Tiêu đề của: Tin tức, giới thiệu công ty,  thông tin liên hệ',
  `short_content` varchar(250) DEFAULT NULL COMMENT 'Nội dung ngắn hiển thị tại lưới tin tức',
  `long_content` longtext COMMENT 'Nội dung tin tức, thông tin công ty, thông tin liên hệ',
  `image` varchar(200) DEFAULT NULL COMMENT 'Hình ảnh ban đầu',
  `type` int(1) DEFAULT '1' COMMENT '1: TIN TỨC\n2: THÔNG TIN CÔNG TY\n',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sanr pham1','products-images/p1.jpg',NULL,'asfsdf',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(2,'sdfsdf2','products-images/p1.jpg',NULL,'ggg',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(4,'Sanr pham3','products-images/p1.jpg',NULL,'asfsdf',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(5,'sdfsdf4','products-images/p1.jpg',NULL,'ggg',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(6,'sdfsdf5','products-images/p1.jpg',NULL,'ggg',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(7,'Sanr pham6','products-images/p1.jpg',NULL,'asfsdf',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(8,'sdfsdf7','products-images/p1.jpg',NULL,'ggg',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(9,'sdfsdf8','products-images/p1.jpg',NULL,'ggg',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(10,'sdfsdf9','products-images/p1.jpg',NULL,'ggg',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(11,'sdfsdf10','products-images/p1.jpg',NULL,'ggg',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(12,'Sanr pham11','products-images/p1.jpg',NULL,'asfsdf',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(13,'sdfsdf12','products-images/p1.jpg',NULL,'ggg',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(14,'sdfsdf13','products-images/p1.jpg',NULL,'ggg',0,1,NULL,1,'2017-02-19 01:00:01',NULL),(15,'sdfsdf14','products-images/p1.jpg',NULL,'ggg',0,0,NULL,1,'2017-02-19 01:00:01',NULL),(16,'sdfsdf15','products-images/p1.jpg',NULL,'ggg',0,1,NULL,2,'2017-02-19 01:00:01',NULL),(17,'sdfsdf16','products-images/p1.jpg',NULL,'ggg',0,1,NULL,2,'2017-02-19 01:00:01',NULL),(18,'sdfsdf167','products-images/p1.jpg',NULL,'ggg',0,1,NULL,2,'2017-02-19 01:00:01',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submenu`
--

DROP TABLE IF EXISTS `submenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `submenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submenu` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `param` varchar(45) DEFAULT NULL,
  `menu_type` int(1) DEFAULT NULL COMMENT '0: Dùng cho ecommerce \n1: Dùng cho admin',
  `order` int(2) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `active` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submenu`
--

LOCK TABLES `submenu` WRITE;
/*!40000 ALTER TABLE `submenu` DISABLE KEYS */;
INSERT INTO `submenu` VALUES (1,'category_add','Thêm danh mục',NULL,1,0,15,1),(2,'category_update','Sửa danh mục',NULL,1,2,15,1),(3,'category_search','Tìm kiếm danh mục',NULL,1,1,15,1),(4,'product_search','Tìm kiếm sản phẩm',NULL,1,1,9,1);
/*!40000 ALTER TABLE `submenu` ENABLE KEYS */;
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

-- Dump completed on 2017-02-26 10:31:35
