-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2020 at 06:44 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diswire`
--

-- --------------------------------------------------------

--
-- Table structure for table `group_connections`
--

CREATE TABLE `group_connections` (
  `userid` int(11) NOT NULL,
  `groupid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `group_table`
--

CREATE TABLE `group_table` (
  `g_id` int(11) NOT NULL,
  `g_name` varchar(255) NOT NULL,
  `g_desc` varchar(255) DEFAULT NULL,
  `g_creator_id` int(11) NOT NULL,
  `g_createat` timestamp NOT NULL DEFAULT current_timestamp(),
  `g_channel_id` varchar(255) DEFAULT NULL,
  `g_members` int(11) DEFAULT 1,
  `g_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `messages_group`
--

CREATE TABLE `messages_group` (
  `m_id` int(11) NOT NULL,
  `m_body` varchar(255) NOT NULL,
  `m_sender_id` int(11) DEFAULT NULL,
  `m_group_id` int(11) NOT NULL,
  `m_sentat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `messages_personal`
--

CREATE TABLE `messages_personal` (
  `m_id` int(11) NOT NULL,
  `m_body` varchar(255) NOT NULL,
  `m_sender_id` int(11) DEFAULT NULL,
  `m_reciever_id` int(11) DEFAULT NULL,
  `m_sentat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `personal_connections`
--

CREATE TABLE `personal_connections` (
  `userid1` int(11) NOT NULL,
  `userid2` int(11) NOT NULL,
  `friend_request` varchar(1) NOT NULL DEFAULT 'P'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal_connections`
--

INSERT INTO `personal_connections` (`userid1`, `userid2`, `friend_request`) VALUES
(1, 2, 'A'),
(3, 1, 'A'),
(4, 1, 'R'),
(5, 1, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `userid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `user_numberofconnection` int(11) NOT NULL,
  `user_numberofgroups` int(11) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`userid`, `username`, `firstname`, `lastname`, `email`, `pass`, `user_numberofconnection`, `user_numberofgroups`, `profile_pic`) VALUES
(1, 'fki_20', 'farhan', 'irani', 'farhan@gmail.com', '$2b$10$eEdy.0mzj2.TzSbFSKHbre8nTNFmOs5BgJo1q9ADEh4ZO8dtMp6M.', 0, 0, 'pplinkkk'),
(2, 'asd', 'farhan', 'irani', 'asd@asd.com', '$2b$10$6WTp74aZA/89ri7MuDTkbODYz98x8mQSdqA7FypnfAZqFGctidE9C', 0, 0, 'pplinkkk'),
(3, 'user3', 'user3', 'user3', 'user3@user3.com', '$2b$10$hqR5/19FqSfbFAwbRvPik.Taxg5Q7rpGQtnvfyBuw/HzL1gmXITDK', 0, 0, 'user3user3user3'),
(4, 'pyro', 'kritik', 'gambhir', 'gambhir@gambhir.com', '$2b$10$ZLRYtR74pseSJ7BOa3e69uO7E64jKG3gPMaVev3/oHj71n61PiWjS', 0, 0, 'gambhirprofile'),
(5, 'testing', 'Nel', 'baj', 'Idio@idot', '$2b$10$qyxB80DJYxZpViKAV3m1EuAK0kdNTfGz6NM791yFtXs.ZzPJmq5YG', 0, 0, 'sda');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group_connections`
--
ALTER TABLE `group_connections`
  ADD KEY `userid` (`userid`),
  ADD KEY `groupid` (`groupid`);

--
-- Indexes for table `group_table`
--
ALTER TABLE `group_table`
  ADD PRIMARY KEY (`g_id`),
  ADD KEY `g_creator_id` (`g_creator_id`);

--
-- Indexes for table `messages_group`
--
ALTER TABLE `messages_group`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `m_sender_id` (`m_sender_id`),
  ADD KEY `m_group_id` (`m_group_id`);

--
-- Indexes for table `messages_personal`
--
ALTER TABLE `messages_personal`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `m_sender_id` (`m_sender_id`),
  ADD KEY `m_reciever_id` (`m_reciever_id`);

--
-- Indexes for table `personal_connections`
--
ALTER TABLE `personal_connections`
  ADD KEY `userid1` (`userid1`),
  ADD KEY `userid2` (`userid2`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `group_table`
--
ALTER TABLE `group_table`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `messages_group`
--
ALTER TABLE `messages_group`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `messages_personal`
--
ALTER TABLE `messages_personal`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `group_connections`
--
ALTER TABLE `group_connections`
  ADD CONSTRAINT `group_connections_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user_table` (`userid`) ON DELETE CASCADE,
  ADD CONSTRAINT `group_connections_ibfk_2` FOREIGN KEY (`groupid`) REFERENCES `group_table` (`g_id`) ON DELETE CASCADE;

--
-- Constraints for table `group_table`
--
ALTER TABLE `group_table`
  ADD CONSTRAINT `group creator` FOREIGN KEY (`g_creator_id`) REFERENCES `user_table` (`userid`) ON DELETE CASCADE;

--
-- Constraints for table `messages_group`
--
ALTER TABLE `messages_group`
  ADD CONSTRAINT `messages_group_ibfk_1` FOREIGN KEY (`m_sender_id`) REFERENCES `user_table` (`userid`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_group_ibfk_2` FOREIGN KEY (`m_group_id`) REFERENCES `group_table` (`g_id`) ON DELETE CASCADE;

--
-- Constraints for table `messages_personal`
--
ALTER TABLE `messages_personal`
  ADD CONSTRAINT `reciever user` FOREIGN KEY (`m_sender_id`) REFERENCES `user_table` (`userid`) ON DELETE SET NULL,
  ADD CONSTRAINT `sender user` FOREIGN KEY (`m_sender_id`) REFERENCES `user_table` (`userid`) ON DELETE SET NULL;

--
-- Constraints for table `personal_connections`
--
ALTER TABLE `personal_connections`
  ADD CONSTRAINT `userid1` FOREIGN KEY (`userid1`) REFERENCES `user_table` (`userid`) ON UPDATE CASCADE,
  ADD CONSTRAINT `userid2` FOREIGN KEY (`userid2`) REFERENCES `user_table` (`userid`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
