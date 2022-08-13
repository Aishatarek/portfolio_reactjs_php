-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2022 at 07:35 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `photo` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `photo`, `link`, `created_at`) VALUES
(8, 'first project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '39462bdee66d787c4a6f4d9ced7_4WhistlesWinery-ShilohCreative-p-1080.jpeg', 'https://github.com/', '2022-08-12 02:13:59'),
(9, 'second project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '980629a744633cf80efdf426182_NewSongChurch-ShilohCreative-p-1080.jpeg', 'https://github.com/', '2022-08-12 02:14:14'),
(10, 'third project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '226623391a13c260eca5a41c7cc_BelloBeauty-ShilohCreative.jpg', 'https://github.com/', '2022-08-12 02:14:24'),
(11, 'fourth project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '1236233964d458d840baa74c42f_LandingPage-ShilohCreative.jpg', 'https://github.com/', '2022-08-12 02:14:36'),
(12, 'fifth project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '8166233919229ea6779ed90baf2_VanguardDesignCo-ShilohCreative.jpg', 'https://github.com/', '2022-08-12 02:14:45'),
(13, 'sixth project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vero consectetur itaque molestiae perspiciatis porro alias iure exercitationem quibusdam?\r\n', '4426233990417440f78c3061103_LandingPage-ShilohCreative (1).jpg', 'https://github.com/', '2022-08-12 02:14:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
