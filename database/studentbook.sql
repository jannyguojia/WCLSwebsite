-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2024 at 06:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentbook`
--

CREATE TABLE `studentbook` (
  `bookname` text NOT NULL,
  `year` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `studentbook`
--

INSERT INTO `studentbook` (`bookname`, `year`) VALUES
('text1', '1'),
('text2', '2'),
('text3', '3'),
('text4', '4'),
('text5', '5'),
('text6', '6'),
('text7', '7'),
('text8', '8'),
('text9', '9'),
('text10', '10'),
('text11', '11'),
('text12', '12'),
('exercise1A', '1'),
('exercise2A', '2'),
('exercise3A', '3'),
('exercise4A', '4'),
('exercise5A', '5'),
('exercise6A', '6'),
('exercise7A', '7'),
('exercise8A', '8'),
('exercise9A', '9'),
('exercise10A', '10'),
('exercise11A', '11'),
('exercise12A', '12'),
('exercise1B', '1'),
('exercise2B', '2'),
('exercise3B', '3'),
('exercise4B', '4'),
('exercise5B', '5'),
('exercise6B', '6'),
('exercise7B', '7'),
('exercise8B', '8'),
('exercise9B', '9'),
('exercise10B', '10'),
('exercise11B', '11'),
('exercise12B', '12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
