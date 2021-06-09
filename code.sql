-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 05:31 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `code`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_id` bigint(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `firstName`, `lastName`, `address`, `phoneNumber`, `email`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Rj', 'Fajardo', '821 Englis V.Rama Avenue Cebu City', '09334799418', 'rjjfajardo@gmail.com', '$2b$10$g3AnwwMLiZxoSW9UtrmhPeEiIxA6twUayUJ3bVJfMFzErqbxI6dSu', '2021-06-08 10:42:33', '2021-06-08 10:42:33', NULL),
(2, 'Mary', 'Alegre', '4719, Sitio Gumamela, Locatha', '09478619973', 'marytheresealegre@gmail.com', '$2b$10$qJqa2xcoVXKVb/Mp/LQ7iOgJ3AjsR9o2HNYYnzhiviZtUzhFEOvtq', '2021-06-08 21:49:16', '2021-06-08 21:49:16', NULL),
(3, 'Mary', 'Alegre', '4719, Sitio Gumamela, Locatha', '09478619933', 'mae@gmail.com', '$2b$10$XV1DW9BlKNUD2tRTwpiHJuj1Db5.DgY1.c8w9svhYeIbLv.MXOldC', '2021-06-08 21:50:46', '2021-06-08 21:50:46', NULL),
(4, 'Mary', 'Alegre', '4719, Sitio Gumamela, Locatha', '09478619943', 'ms@gmail.com', '$2b$10$LhNIxtMOOINiDGDcmcf5SOOHON4AKQd1zbZWNehbAiW1oWu/0orfq', '2021-06-08 21:51:48', '2021-06-08 21:51:48', NULL),
(5, 'John', 'Alegre', '4719, Sitio Gumamela, Locatha', '09478613973', 'j@gmail.com', '$2b$10$0FXoUy/68/nUv0rQ2exPf.R0sNLTY42EtfQ/doUv/TTP8gomA.ZpW', '2021-06-08 22:14:06', '2021-06-08 22:14:06', NULL),
(7, 's', 's', '4719, Sitio Gumamela, Locatha', '09478619972', 's@gmail.com', '$2b$10$V8hSFx9ycRDfVM4ofyn5re0kg49UBiACZUsybd7c9akSCbJHC9Yn2', '2021-06-09 09:14:25', '2021-06-09 09:14:25', NULL),
(8, 'Rj', 'Fajardo', 'Vrama', '09171637474', 'ryan@gmail.com', '$2b$10$nzC9fk0J/iTUvQo4tekzT.wbEUx/vIksQL7aQFczjJKXr0HRmXisu', '2021-06-09 12:55:14', '2021-06-09 12:55:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` bigint(20) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Tigerhoods', '0000-00-00 00:00:00', NULL, NULL),
(2, 'Code', '0000-00-00 00:00:00', NULL, NULL),
(3, 'HoneyCo', '0000-00-00 00:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `account_id` bigint(20) NOT NULL,
  `size` enum('XS','S','M','L','XL') NOT NULL,
  `qty` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `checkouts`
--

CREATE TABLE `checkouts` (
  `checkout_id` bigint(20) NOT NULL,
  `account_id` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` bigint(20) NOT NULL,
  `brand_id` bigint(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `type` enum('Hoodie','Shirt') NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `brand_id`, `image`, `name`, `desc`, `type`, `unit_price`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'https://mms-images.out.customink.com/mms/images/catalog/styles/175800/catalog_detail_image_medium.jpg?digest=1621604739', 'Embroidered FKG (WHITE)', 'asdadasdasdasd', 'Shirt', '600.00', '0000-00-00 00:00:00', NULL, NULL),
(8, 2, 'https://mms-images.out.customink.com/mms/images/catalog/styles/125000/catalog_detail_image_medium.jpg?digest=1618321171', 'Embroidered FKG (RED)', 'asdasdas', 'Hoodie', '500.00', '0000-00-00 00:00:00', NULL, NULL),
(11, 3, 'https://mms-images-prod.imgix.net/mms/images/catalog/b514e0f66ff205753fe387aa57e0fa2d/styles/116200/catalog_detail_image_large.jpg?ixlib=rails-2.1.4&w=700&h=700&fit=fill&bg=ffffff&dpr=1&q=60&fm=pjpg&auto=compress&trim=auto&trimmd=0', 'Embroidered FKG (BLACK)', 'asd', 'Shirt', '1000.00', '0000-00-00 00:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210521051955-create_accounts_table.js'),
('20210608093414-create_product.js'),
('20210608094021-create_brands.js'),
('20210608095211-create_stocks.js'),
('20210608170540-create_cart_table.js'),
('20210609092918-create_checkout_table.js');

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `stock_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `size` enum('XS','S','M','L','XL') NOT NULL,
  `availableStocks` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`stock_id`, `product_id`, `size`, `availableStocks`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 1, 'XS', 2, '2021-06-09 21:42:50', NULL, NULL),
(4, 8, 'S', 2, '2021-06-09 21:43:26', NULL, NULL),
(5, 11, 'M', 2, '2021-06-09 21:43:39', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `stock_id` (`account_id`);

--
-- Indexes for table `checkouts`
--
ALTER TABLE `checkouts`
  ADD PRIMARY KEY (`checkout_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`stock_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `checkouts`
--
ALTER TABLE `checkouts`
  MODIFY `checkout_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `stock_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
