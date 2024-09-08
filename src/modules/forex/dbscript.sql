-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2024 at 05:02 PM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beshegercom_forex`
--

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` int NOT NULL,
  `bank_id` int DEFAULT NULL,
  `currency_id` int DEFAULT NULL,
  `rate_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `buying_cash` double DEFAULT NULL,
  `buying_transaction` double DEFAULT NULL,
  `selling_cash` double DEFAULT NULL,
  `selling_transaction` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`id`, `bank_id`, `currency_id`, `rate_date`, `buying_cash`, `buying_transaction`, `selling_cash`, `selling_transaction`) VALUES
(1, 2, 2, '2024-08-06 14:43:55', 95, 95, 105, 102),
(2, 1, 2, '2024-08-06 14:44:02', 95, 95, 105, 102),
(3, 1, 1, '2024-08-06 14:44:19', 95, 95, 105, 102),
(4, 2, 1, '2024-08-06 14:44:24', 95, 95, 105, 102),
(5, 2, 1, '2024-08-06 15:07:23', 95, 95, 105, 102),
(6, 2, 1, '2024-08-06 15:07:25', 95, 95, 105, 102);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bank_id` (`bank_id`,`currency_id`,`rate_date`),
  ADD KEY `rate_to_currency` (`currency_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_to_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`id`),
  ADD CONSTRAINT `rate_to_currency` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`);


INSERT INTO rate (
  currency_id ,
   buying_cash , 
   selling_cash , 
   buying_transaction , 
   rate_date , 
   selling_transaction , 
   bank_id) VALUES(
    "1" , 
    "400" , 
    "100" , 
    "100" , 
    "08-30-2024" ,
     "100" ,
      "1")