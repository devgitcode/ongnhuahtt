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
-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 29, 2017 at 06:24 PM
-- Server version: 8.0.0-dmr
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ongnhuahtt`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `title` varchar(250) DEFAULT NULL COMMENT 'Tên của catalog. \nVD: \n+ Bảng giá Joint cao su các loại\n+ Catalogue ống u.PVC cứng hệ mét (ISO 4422:1990)',
  `url` text COMMENT 'Link download bảng giá hoặc catalog',
  `type` int(1) DEFAULT '1' COMMENT '1: Bảng giá\n2: Catalog',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(45) DEFAULT NULL,
  `description` text,
  `order` int(11) DEFAULT NULL COMMENT 'Trình tự sắp xếp của CATEGORY trên Website',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `description`, `order`, `active`, `created_date`, `updated_date`) VALUES
(1, 'Ống nhựa HDPE', '<section class=\"feature\"><article class=\"feature-heading\"><h1><strong><span style=\"font-family:times new roman,times,serif;\"><span style=\"color:#FFC000;\">ỐNG NHỰA</span> <span style=\"color:#0000FF;\">HDPE</span></span></strong></h1><span style=\"color:#ffc000;\"><strong>Ống Nhựa HDPE</strong></span><span style=\"color:#0000FF;\"> Do Hoàn Tuấn Thành Cung Cấp Trên Thị Trường Được Sản Xuất Tại Việt Nam Theo Tiêu Chuẩn Châu Âu Chất Lượng Cao, Giá Rẻ</span></article><div class=\"row\"><section class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"Ống Nhựa HDPE PN6\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/ong-nhua-hdpe-home-phukiennganhnuoc_net.jpg\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/ong-nhua-hdpe-pn6\">Ống Nhựa HDPE PN6</a></h3></article></section><section class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Ống Nhựa HDPE PN8\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/ong-nhua-hdpe-home-phukiennganhnuoc_net.jpg\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/ong-nhua-hdpe-pn8\">Ống Nhựa HDPE PN8</a></h3><h3 class=\"trans-hover\">&nbsp;</h3></article></section><section class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Ống Nhựa HDPE PN10\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/ong-nhua-hdpe-home-phukiennganhnuoc_net.jpg\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/ong-nhua-hdpe-pn10\">Ống Nhựa HDPE PN10</a></h3><h3 class=\"trans-hover\">&nbsp;</h3></article></section><section class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Ống Nhựa HDPE PN12,5\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/ong-nhua-hdpe-home-phukiennganhnuoc_net.jpg\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/ong-nhua-hdpe-pn12-5\">Ống Nhựa HDPE PN12,5</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\">Trong các loại ống nhựa,</span><span style=\"color:#FFC000;\"><strong>ống nhựa HDPE</strong></span><span style=\"color:#0000FF;\"> ngày càng được sử dụng nhiều do những đặc tính quý báu của nó hơn hẳn tính chất của các loại ống nhựa khác: - Nhẹ nhàng,dễ vận chuyển. - Mặt trong,ngoài ống bóng,hệ số ma sát nhỏ. - Có hệ số chuyền nhiệt thấp (nước không bị đông lạnh). - Độ bền cơ học và độ chịu va đập cao. - Sử dụng đúng yêu cầu kỹ thuật độ bền không dưới 50 năm… - Giá thành rẻ, chi phí lắp đặt thấp so với các loại ống khác.</span></article></section>', 3, 1, '2017-02-19 01:00:01', '2017-02-19 12:02:30'),
(2, 'Ống nhựa PVC', '<section class=\"feature\"><article class=\"feature-heading\"><h1>ĐAI SỬA CHỮA VỠ ỐNG</h1><span style=\"color:#ffc000;\"><strong>Đai sửa chữa vỡ ống</strong></span> <span style=\"color:#0000FF;\">được sử dụng đấu nối đường ống mới và tiện dụng trong việc sửa chữa sử lý sự cố ống</span></article><div class=\"row\"><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"đai sửa chữa vỡ ống\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai%20sua%20chua%20inox%201%20thumb%20phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-1-manh\">Đai Sửa Chữa Inox 1</a></h3></article></section><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Tê Thu\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai-sua-chua-vo-ong-home-phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-2-manh\">Đai Sửa Chữa Inox 2</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\"><strong>Đai sửa chữa,chữa vỡ, măng sông inox</strong> được sử dụng đấu nối đường ống mới và đặc biệt tiện dụng trong việc sửa chữa các lỗi đường ống như: ống thủng, ống nứt, ống bị dập, các mối hàn bị hỏng... <strong>Sử dụng Đai sửa chữa,chữa vỡ, măng sông inox</strong> dễ quản lý vật tư, rút ngắn thời gian thi công, thời gian sửa chữa, giảm thất thoát, giảm chi phí nhân công. </span></article></section>', 1, NULL, '2017-02-19 01:00:01', NULL),
(3, 'Ống thép', '<section class=\"feature\"><article class=\"feature-heading\"><h1>ĐAI SỬA CHỮA VỠ ỐNG</h1><span style=\"color:#ffc000;\"><strong>Đai sửa chữa vỡ ống</strong></span> <span style=\"color:#0000FF;\">được sử dụng đấu nối đường ống mới và tiện dụng trong việc sửa chữa sử lý sự cố ống</span></article><div class=\"row\"><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"đai sửa chữa vỡ ống\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai%20sua%20chua%20inox%201%20thumb%20phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-1-manh\">Đai Sửa Chữa Inox 1</a></h3></article></section><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Tê Thu\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai-sua-chua-vo-ong-home-phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-2-manh\">Đai Sửa Chữa Inox 2</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\"><strong>Đai sửa chữa,chữa vỡ, măng sông inox</strong> được sử dụng đấu nối đường ống mới và đặc biệt tiện dụng trong việc sửa chữa các lỗi đường ống như: ống thủng, ống nứt, ống bị dập, các mối hàn bị hỏng... <strong>Sử dụng Đai sửa chữa,chữa vỡ, măng sông inox</strong> dễ quản lý vật tư, rút ngắn thời gian thi công, thời gian sửa chữa, giảm thất thoát, giảm chi phí nhân công. </span></article></section>', 3, NULL, '2017-02-19 01:00:01', NULL),
(4, 'Ống gang', '<section class=\"feature\"><article class=\"feature-heading\"><h1>ĐAI SỬA CHỮA VỠ ỐNG</h1><span style=\"color:#ffc000;\"><strong>Đai sửa chữa vỡ ống</strong></span> <span style=\"color:#0000FF;\">được sử dụng đấu nối đường ống mới và tiện dụng trong việc sửa chữa sử lý sự cố ống</span></article><div class=\"row\"><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"đai sửa chữa vỡ ống\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai%20sua%20chua%20inox%201%20thumb%20phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-1-manh\">Đai Sửa Chữa Inox 1</a></h3></article></section><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Tê Thu\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai-sua-chua-vo-ong-home-phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-2-manh\">Đai Sửa Chữa Inox 2</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\"><strong>Đai sửa chữa,chữa vỡ, măng sông inox</strong> được sử dụng đấu nối đường ống mới và đặc biệt tiện dụng trong việc sửa chữa các lỗi đường ống như: ống thủng, ống nứt, ống bị dập, các mối hàn bị hỏng... <strong>Sử dụng Đai sửa chữa,chữa vỡ, măng sông inox</strong> dễ quản lý vật tư, rút ngắn thời gian thi công, thời gian sửa chữa, giảm thất thoát, giảm chi phí nhân công. </span></article></section>', 1, 0, '2017-02-19 01:00:01', NULL),
(5, 'Đai khởi thủy', '<section class=\"feature\"><article class=\"feature-heading\"><h1>ĐAI SỬA CHỮA VỠ ỐNG</h1><span style=\"color:#ffc000;\"><strong>Đai sửa chữa vỡ ống</strong></span> <span style=\"color:#0000FF;\">được sử dụng đấu nối đường ống mới và tiện dụng trong việc sửa chữa sử lý sự cố ống</span></article><div class=\"row\"><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"đai sửa chữa vỡ ống\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai%20sua%20chua%20inox%201%20thumb%20phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-1-manh\">Đai Sửa Chữa Inox 1</a></h3></article></section><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Tê Thu\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai-sua-chua-vo-ong-home-phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-2-manh\">Đai Sửa Chữa Inox 2</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\"><strong>Đai sửa chữa,chữa vỡ, măng sông inox</strong> được sử dụng đấu nối đường ống mới và đặc biệt tiện dụng trong việc sửa chữa các lỗi đường ống như: ống thủng, ống nứt, ống bị dập, các mối hàn bị hỏng... <strong>Sử dụng Đai sửa chữa,chữa vỡ, măng sông inox</strong> dễ quản lý vật tư, rút ngắn thời gian thi công, thời gian sửa chữa, giảm thất thoát, giảm chi phí nhân công. </span></article></section>', 3, 0, '2017-02-19 01:00:01', NULL),
(6, 'Đồng hồ đo nước', '<section class=\"feature\"><article class=\"feature-heading\"><h1>ĐAI SỬA CHỮA VỠ ỐNG</h1><span style=\"color:#ffc000;\"><strong>Đai sửa chữa vỡ ống</strong></span> <span style=\"color:#0000FF;\">được sử dụng đấu nối đường ống mới và tiện dụng trong việc sửa chữa sử lý sự cố ống</span></article><div class=\"row\"><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Máy Hàn Ống Nhựa\"><img alt=\"đai sửa chữa vỡ ống\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai%20sua%20chua%20inox%201%20thumb%20phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"> </a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div><div><!--span class=\"product-label-special-left label\">NEW</span--></div></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-1-manh\">Đai Sửa Chữa Inox 1</a></h3></article></section><section class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><article class=\"block\"><div class=\"product\"><div class=\"image\"><div class=\"img-overflow\"><div><a href=\"#\" title=\"Đai Sửa Chữa Vỡ Ống\"><img alt=\"Tê Thu\" src=\"http://phukiennganhnuoc.net/profiles/phukiennganhnuocnet/uploads/attach/post/images/dai-sua-chua-vo-ong-home-phukiennganhnuoc_net.jpg\" style=\"width: 188px; height: 125px;\"></a></div><div class=\"ImageOverlayBe\">&nbsp;</div><div class=\"CStyle\"><ul class=\"function\"></ul></div></div></div></div><div class=\"product\"><div class=\"image\"><a href=\"te-thu-hdpe\"><!--span class=\"product-label-special-left label\">NEW</span--></a></div></div><h3 class=\"trans-hover\"><a href=\"http://phukiennganhnuoc.net/dai-sua-chua-inox-2-manh\">Đai Sửa Chữa Inox 2</a></h3></article></section></div><article class=\"feature-heading\"><span style=\"color:#0000FF;\"><strong>Đai sửa chữa,chữa vỡ, măng sông inox</strong> được sử dụng đấu nối đường ống mới và đặc biệt tiện dụng trong việc sửa chữa các lỗi đường ống như: ống thủng, ống nứt, ống bị dập, các mối hàn bị hỏng... <strong>Sử dụng Đai sửa chữa,chữa vỡ, măng sông inox</strong> dễ quản lý vật tư, rút ngắn thời gian thi công, thời gian sửa chữa, giảm thất thoát, giảm chi phí nhân công. </span></article></section>', 2, 1, '2017-02-19 01:04:17', NULL),
(7, 'Van Gang', 'Van Gang mô tả', 2, 1, '2017-02-19 12:02:04', NULL),
(8, 'asdf', '', 1, 1, '2017-03-24 17:49:08', NULL),
(9, 'Test', '<p><strong>sdfdf</strong></p>\n', 1, 1, '2017-03-24 17:50:20', NULL),
(10, 'df', '<p><strong>dfs</strong></p>\n', 1, 1, '2017-03-26 11:11:35', NULL),
(11, 'df tét', '<p><strong>dfs</strong></p>\n', 1, 0, '2017-03-26 11:11:50', NULL),
(12, 'TEST 33333', '<p>DDD</p>\n', 1, 1, '2017-03-26 12:50:34', NULL),
(13, '1af', '<p><strong>sdfdf</strong></p>\n', 2, 0, '2017-03-26 12:56:29', NULL),
(14, '', '', 2, 0, '2017-03-26 15:01:11', NULL),
(15, '1', '', 2, 0, '2017-03-26 15:01:34', NULL),
(16, '1', '', 2, 0, '2017-03-26 15:04:00', NULL),
(17, '1', '', 2, 0, '2017-03-26 15:04:00', NULL),
(18, '2', '', 2, 0, '2017-03-26 15:04:38', NULL),
(19, '2', '', 2, 0, '2017-03-26 15:04:38', NULL),
(20, '1', '', 1, 0, '2017-03-26 15:08:52', NULL),
(21, '1', '<p>d</p>\n', 2, 0, '2017-03-26 15:09:21', NULL),
(22, 'dddd', '', 1, 0, '2017-03-26 15:11:00', NULL),
(23, '234324', '', 22, 0, '2017-03-26 15:11:12', NULL),
(24, '2', '', 2, 0, '2017-03-26 15:19:32', NULL),
(25, '2', '', 2, 0, '2017-03-26 15:20:13', NULL),
(26, '3', '', 2, 0, '2017-03-26 15:21:03', NULL),
(27, '234', '', 1, 0, '2017-03-26 15:22:42', NULL),
(28, '', '', 1, 0, '2017-03-26 15:22:45', NULL),
(29, '234', '', 23, 0, '2017-03-26 15:22:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `content` text,
  `google_map` text COMMENT 'Link google map'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `company_name` varchar(200) DEFAULT NULL COMMENT 'Content',
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `fax` varchar(50) DEFAULT NULL,
  `hotline` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `introduction`
--

CREATE TABLE `introduction` (
  `id` int(11) NOT NULL,
  `content` text COMMENT 'Nội dung ',
  `image` varchar(200) DEFAULT NULL COMMENT 'LInk hình',
  `updated_date` datetime DEFAULT NULL COMMENT 'Ngày update',
  `google_map` text COMMENT 'Link google map'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `menu` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `parameter` varchar(45) DEFAULT NULL,
  `menu_type` int(1) DEFAULT NULL COMMENT '0: Dùng cho ecommerce \n1: Dùng cho admin',
  `order` int(2) DEFAULT NULL,
  `active` int(1) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `menu`, `label`, `parameter`, `menu_type`, `order`, `active`, `icon`) VALUES
(1, 'homepage', 'TRANG CHỦ', NULL, 0, 0, 1, NULL),
(2, 'intro', 'GIỚI THIỆU', NULL, 0, 1, 1, NULL),
(3, 'products', 'SẢN PHẨM', '({cid: \'init\'})', 0, 2, 1, NULL),
(4, 'catalogue', 'CATALOG', NULL, 0, 3, 1, NULL),
(5, 'project', 'DỰ ÁN', NULL, 0, 4, 0, NULL),
(6, 'recruitment', 'TUYỂN DỤNG', NULL, 0, 5, 0, NULL),
(7, 'news', 'TIN TỨC', NULL, 0, 6, 1, NULL),
(8, 'contact', 'LIÊN HỆ', NULL, 0, 7, 1, NULL),
(9, 'manage_product', 'QUẢN LÝ SẢN PHẨM', NULL, 1, 1, 1, 'fa fa-shopping-cart'),
(10, 'manage_news', 'QUẢN LÝ TIN TỨC', NULL, 1, 4, 1, 'fa fa-newspaper-o'),
(11, 'manage_contact', 'QUẢN LÝ LIÊN HỆ', NULL, 1, 5, 1, 'fa fa-phone'),
(12, 'manage_catalog', 'QUẢN LÝ CATALOG', NULL, 1, 3, 1, 'fa fa-file-pdf-o'),
(13, 'manage_footer', 'QUẢN LÝ FOOTER', NULL, 1, 6, 1, 'fa fa-home'),
(14, 'manage_introduction', 'QUẢN LÝ GIỚI THIỆU', NULL, 1, 2, 1, 'fa fa-info-circle'),
(15, 'category', 'QUẢN LÝ DANH MỤC', NULL, 1, 0, 1, 'fa fa-bars');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL COMMENT 'Tiêu đề của: Tin tức, giới thiệu công ty,  thông tin liên hệ',
  `short_content` varchar(500) DEFAULT NULL COMMENT 'Nội dung ngắn hiển thị tại lưới tin tức',
  `long_content` longtext COMMENT 'Nội dung tin tức, thông tin công ty, thông tin liên hệ',
  `image` varchar(200) DEFAULT NULL COMMENT 'Hình ảnh ban đầu',
  `type` int(1) DEFAULT '1' COMMENT '1: TIN TỨC\n2: THÔNG TIN CÔNG TY\n',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `short_content`, `long_content`, `image`, `type`, `active`, `created_date`, `updated_date`) VALUES
(1, 'Triển lãm Quốc tế Vietbuild Cần Thơ 2016', 'Từ ngày 12/10 đến ngày 16/10/2016, Công ty CP Nhựa Bình Minh đã tham gia Triển lãm Quốc tế Vietbuild tại thành phố Cần Thơ. Triển lãm diễn ra với sự góp mặt của 550 gian hàng của 9 quốc gia. Công ty vinh dự được Ban tổ chức trao tặng danh hiệu: “Gian hàng quy mô – Thiết kế đẹp & ấn tượng”.', '<div>                            <div class=\"tieude\">                                <h1> Triển lãm Quốc tế Vietbuild Cần Thơ 2016</h1>                            </div>                            <div class=\"luotxem\">                                Ngày: 22/10/2016                            </div>                                                            <div class=\"chudenthuong\">                                Từ ngày 12/10 đến ngày 16/10/2016, Công ty CP Nhựa Bình Minh đã tham gia Triển lãm Quốc tế Vietbuild tại thành phố Cần Thơ. Triển lãm diễn ra với sự góp mặt của 550 gian hàng của 9 quốc gia. Công ty vinh dự được Ban tổ chức trao tặng danh hiệu: “Gian hàng quy mô – Thiết kế đẹp &amp; ấn tượng”.                            </div>                            <div class=\"chudenthuong\">                                <p>&nbsp;Từ ngày 12/10 đến ngày 16/10/2016, Công ty CP Nhựa Bình Minh đã tham gia Triển lãm Quốc tế Vietbuild tại thành phố Cần Thơ. Triển lãm diễn ra với sự góp mặt của 550 gian hàng của 9 quốc gia. Công ty vinh dự được Ban tổ chức trao tặng danh hiệu: “Gian hàng quy mô – Thiết kế đẹp &amp; ấn tượng”.</p><p>&nbsp;</p><p><img src=\"/uploadwb/image/le-khai-mac-trien-lam-quoc-te-vietbuild.jpg\" width=\"700\" height=\"394\" alt=\"\"></p><p style=\"text-align: center;\">&nbsp;</p><p style=\"text-align: center;\">Lễ khai mạc Triển lãm Quốc tế Vietbuild Cần Thơ 2016.</p><p style=\"text-align: left;\">&nbsp;</p><p style=\"text-align: left;\"><img src=\"/uploadwb/image/2016/nhua-binh-minh-vinh-du-nhan-danh-hieu.jpg\" width=\"700\" height=\"394\" alt=\"\"></p><p style=\"text-align: left;\">&nbsp;</p><p style=\"text-align: left;\">&nbsp;</p><p style=\"text-align: center;\">Nhựa Bình Minh vinh dự nhận danh hiệu “Gian hàng quy mô – Thiết kế đẹp &amp; ấn tượng”.</p><p style=\"text-align: center;\">&nbsp;</p><p style=\"text-align: left;\">Tham gia Triển lãm lần này, Nhựa Bình Minh tiếp tục chú trọng công tác tư vấn quy chế mở cửa hàng, giới thiệu và tư vấn sử dụng sản phẩm, ghi nhận ý kiến đóng góp, phản hồi của khách hàng về sản phẩm, dịch vụ, đồng thời tiếp tục khẳng định vị thế hàng đầu trong ngành nhựa vật liệu xây dựng tại Cần Thơ và các tỉnh miền Tây.</p><p style=\"text-align: left;\">&nbsp;</p><p style=\"text-align: left;\"><img src=\"/uploadwb/image/2016/tiep-don-can-bo-lanh-dao.jpg\" width=\"700\" height=\"394\" alt=\"\"></p><p style=\"text-align: left;\">&nbsp;</p><div style=\"text-align: center;\">Ông Nguyễn Thanh Hải – Trưởng phòng Tiếp thị</div><div style=\"text-align: center;\">&nbsp;</div><div style=\"text-align: center;\">tiếp đón Đoàn Cán bộ Lãnh đạo thành phố Cần Thơ và</div><div style=\"text-align: center;\">&nbsp;</div><div style=\"text-align: center;\">đại diện Hiệp hội Xây dựng Viêt Nam ghé thăm gian hàng.</div><div><img src=\"/uploadwb/image/2016/tu-van-hanh-san%20pham.jpg\" width=\"700\" height=\"394\" alt=\"\"></div><div>&nbsp;</div><div><div style=\"text-align: center;\">Tư vấn quy chế mở cửa hàng bán sản phẩm và cung cấp catalogue,</div><div style=\"text-align: center;\">bảng giá, danh sách cửa hàng cho khách hàng.</div><div style=\"text-align: center;\">&nbsp;</div></div><div style=\"text-align: center;\">&nbsp;</div><div>&nbsp;</div><p style=\"text-align: left;\">&nbsp;</p><div>&nbsp;</div><div>&nbsp;</div>                            </div>                        </div>', 'http://lanthanh.com.vn/uploadwb/image/le-khai-mac-trien-lam-quoc-te-vietbuild.jpg', 1, 1, '2017-03-10 00:00:00', NULL),
(2, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/2.jpg', 1, 1, '2017-03-25 05:15:00', NULL),
(3, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/2.jpg', 1, 1, '2017-03-25 05:15:00', NULL),
(4, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/3.jpg', 1, 1, '2017-03-25 05:15:00', NULL),
(5, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/1.jpg', 1, 1, '2017-03-25 05:15:00', NULL),
(6, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/6.jpg', 1, 1, '2017-03-25 05:19:00', NULL),
(7, 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất', 'Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…', 'Mách bạn những cách sửa ống nước tiết kiệm tiền nhất\r\nNếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu tiên nên làm là phải tự sửa chữa ống nước.\r\n\r\nDưới đây là những cách sửa ống nước tiết kiệm tiền nhất mà bạn nên biết\r\n\r\n5 cách sửa ống nước thông dụng tiết kiệm nhất\r\n\r\n\r\nCách 1\r\nTìm hiểu về chức năng làm việc của hệ thống ống nước và các vật sử dụng nước.\r\n\r\nBằng  cách hiểu rõ về càng nhiều càng tốt về sửa chữa hệ thống ống nước nói chung để bạn không bị lừa bởi các chuyên gia hệ thống ống nước.\r\n\r\nMặc dù bạn có thể không làm việc trên các sửa chữa chính mình, đó là một việc tốt giúp bạn biết vấn đề gì để bạn không bị tính phí cho các vấn đề thậm chí là không xay ra.\r\n\r\nNên học hỏi cách sửa chữa từ sách, internet để bạn giám sát các thợ sửa ống nước mà bạn đã thuê cho công việc của bạn.\r\n\r\nCách 2\r\n\r\n\r\nTìm những nhà cung cấp dịch vụ sửa ống nước có phiếu giảm giá hoặc giá rẻ.\r\n\r\nHiện nay thường có một số doanh nghiệp đường ống dẫn nước cung cấp giao dịch đặc biệt và chiết khấu để họ có thể tạo ra nhiều khách hàng hơn và cũng cung cấp cho khách hàng hiện tại của họ một giao dịch có giảm giá.\r\n\r\nCách 3\r\nNên bảo trì thường xuyên hệ thống ống nước của bạn.\r\n\r\nĐây là một trong những cách tốt nhất để tiết kiệm tiền bằng cách thường xuyên duy trì hệ thống ống nước của bạn.\r\n\r\nThuê người làm một kiểm tra hàng tháng cho hệ thống ống nước chẳng hạn như áp lực nước, thoát nước chậm, rò rỉ, nhỏ giọt, các vết nứt và các vấn đề nhiệt độ và nhận biết được chúng ngay lập tức để nó không trở nên hư hỏng nằng nề hơn.\r\n\r\nCách 4\r\n\r\n\r\nThay thế các thiết bị hệ thống ống nước và phụ kiện cũ và mòn\r\n\r\nHãy xem tất cả các thiết bị hệ thống ống nước và đồ đạc để xem nếu có bất kỳ vật gì đã cũ hoặc mòn khi được sử dụng.\r\n\r\nNên thay thế những cái này với những cái mới để bạn có thể tiết kiệm tiền trong tương lai vào việc sửa chữa.\r\n\r\nCách 5\r\nHãy thuê một thợ sửa ống nước chuyên nghiệp và hiệu quả.\r\n\r\nKhi bắt đầu lắp đặt hệ thống ống nước hoặc khi sự cố ống nước gặp vấn đề quá nặng bạn nên thuê các thợ sửa ống nước chuyên nghiệp phù hợp với nhà của bạn.\r\n\r\nBên cạnh đó hãy tìm hiểu thông tin để chắc chắn rằng các công ty thợ sửa ống nước được cấp phép và yêu cầu tài liệu tham khảo.', '/news-images/7.jpg', 1, 1, '2017-03-25 05:19:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL COMMENT 'Link ảnh chính',
  `image_list` text COMMENT 'Link ảnh ở Detail screen với format sau\nLink Ảnh 1|Link ảnh 2|link ảnh 3|link ảnh 4',
  `description` longtext COMMENT 'Mô tả chi tiết về sản phẩm ở định dạng HTML',
  `price` double DEFAULT '0' COMMENT 'Nếu giá bằng không là LIÊN HỆ\nNếu giá > 0 thì để giá',
  `active` int(1) DEFAULT '0' COMMENT '0: Không hiển thị trên public website.\n1: Hiển thị trên public website.',
  `display_mode` int(1) DEFAULT '0' COMMENT '1: Hiển thị ở cả TRANG CHỦ và SẢN PHẨM\n0: Chỉ hiển thị ở trang SẢN PHẨM',
  `category_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `image`, `image_list`, `description`, `price`, `active`, `display_mode`, `category_id`, `created_date`, `updated_date`) VALUES
(1, 'Ống nhựa PPR', 'products-images/1.jpg', NULL, 'asfsdf', 0, 1, 0, 1, '2017-02-19 01:00:01', NULL),
(2, 'Ống PVC Loại 1', 'products-images/2.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(4, 'Ống PVC loại 2', 'products-images/3.jpg', NULL, 'asfsdf', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(5, 'Ống PVC loại 3', 'products-images/4.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(6, 'Dây điện', 'products-images/5.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(7, 'Ống nhựa PPR B1341', 'products-images/6.jpg', NULL, 'asfsdf', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(8, 'Ống PVC 2756', 'products-images/7.jpeg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(9, 'Dây điện H726', 'products-images/8.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(10, 'Ống H75', 'products-images/9.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(11, 'Ống nhựa PPR I82I', 'products-images/10.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(12, 'Dây điện H73Y', 'products-images/11.jpg', NULL, 'asfsdf', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(13, 'Dây điện VINA82', 'products-images/12.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(14, 'Ống nước BU2', 'products-images/13.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(15, 'Ống PVC G763', 'products-images/14.jpg', NULL, 'ggg', 0, 1, 1, 1, '2017-02-19 01:00:01', NULL),
(16, 'Đai thép B7633', 'products-images/15.jpg', NULL, 'ggg', 0, 1, 1, 2, '2017-02-19 01:00:01', NULL),
(17, 'Ống nhựa PPR', 'products-images/16.png', NULL, 'ggg', 0, 1, 1, 2, '2017-02-19 01:00:01', NULL),
(18, 'Ống PVC loại 4', 'products-images/17.png', NULL, 'ggg', 0, 1, 1, 2, '2017-02-19 01:00:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `submenu`
--

CREATE TABLE `submenu` (
  `id` int(11) NOT NULL,
  `submenu` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `param` varchar(45) DEFAULT NULL,
  `menu_type` int(1) DEFAULT NULL COMMENT '0: Dùng cho ecommerce \n1: Dùng cho admin',
  `order` int(2) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `active` int(1) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `submenu`
--

INSERT INTO `submenu` (`id`, `submenu`, `label`, `param`, `menu_type`, `order`, `menu_id`, `active`, `icon`) VALUES
(1, 'category_add', 'Thêm danh mục', NULL, 1, 0, 15, 1, NULL),
(3, 'category', 'Tìm kiếm danh mục', NULL, 1, 1, 15, 1, NULL),
(4, 'product_search', 'Tìm kiếm sản phẩm', NULL, 1, 1, 9, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(30) NOT NULL,
  `password` text,
  `fullname` varchar(50) DEFAULT NULL,
  `active` int(1) DEFAULT NULL COMMENT '0: No\n1: Yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `introduction`
--
ALTER TABLE `introduction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `submenu`
--
ALTER TABLE `submenu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `submenu`
--
ALTER TABLE `submenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
