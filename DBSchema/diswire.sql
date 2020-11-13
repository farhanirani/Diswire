-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2020 at 10:05 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

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
  `groupid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_connections`
--

INSERT INTO `group_connections` (`userid`, `groupid`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(4, 3),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `group_table`
--

CREATE TABLE `group_table` (
  `g_id` int(11) NOT NULL,
  `g_name` varchar(255) NOT NULL,
  `g_desc` varchar(255) NOT NULL,
  `g_creator_id` int(11) DEFAULT NULL,
  `g_createat` timestamp NOT NULL DEFAULT current_timestamp(),
  `g_channel_id` varchar(255) DEFAULT NULL,
  `g_members` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_table`
--

INSERT INTO `group_table` (`g_id`, `g_name`, `g_desc`, `g_creator_id`, `g_createat`, `g_channel_id`, `g_members`) VALUES
(1, 'FIRST group', 'Timepass', 1, '2020-10-12 07:23:19', 'channelid1', 1),
(2, 'Farhan group', 'Timepass', 1, '2020-10-12 07:23:19', 'channelid2', 1),
(3, 'pyro Farhan', 'useless grop', 4, '2020-10-12 07:23:19', 'channelid3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages_group`
--

CREATE TABLE `messages_group` (
  `m_id` int(11) NOT NULL,
  `m_body` varchar(255) NOT NULL,
  `m_sender_id` int(11) NOT NULL,
  `m_group_id` int(11) NOT NULL,
  `m_sentat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages_group`
--

INSERT INTO `messages_group` (`m_id`, `m_body`, `m_sender_id`, `m_group_id`, `m_sentat`) VALUES
(1, 'message to group 1', 1, 1, '2020-10-12 07:36:56'),
(2, 'message group 1', 1, 1, '2020-10-12 07:36:56'),
(3, 'message group 1', 1, 1, '2020-10-12 07:36:56'),
(4, 'message group 1', 1, 1, '2020-10-12 07:36:56'),
(5, 'message group 3', 2, 1, '2020-10-12 07:36:56');

-- --------------------------------------------------------

--
-- Table structure for table `messages_personal`
--

CREATE TABLE `messages_personal` (
  `m_id` int(11) NOT NULL,
  `m_body` varchar(255) NOT NULL,
  `m_sender_id` int(11) NOT NULL,
  `m_reciever_id` int(11) NOT NULL,
  `m_sentat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages_personal`
--

INSERT INTO `messages_personal` (`m_id`, `m_body`, `m_sender_id`, `m_reciever_id`, `m_sentat`) VALUES
(1, 'message test1 2', 1, 2, '2020-10-12 07:35:53'),
(2, 'message test 1 2', 1, 2, '2020-10-12 07:35:53'),
(3, 'message test1 3', 1, 3, '2020-10-12 07:35:53'),
(4, 'message test 2 1', 2, 1, '2020-10-12 07:35:53'),
(5, 'message test 2 3', 2, 3, '2020-10-12 07:35:53'),
(6, 'message test 3 2', 3, 2, '2020-10-12 07:35:53'),
(7, 'message test1 2', 1, 2, '2020-10-12 07:36:24'),
(8, 'message test 1 2', 1, 2, '2020-10-12 07:36:25'),
(9, 'message test1 3', 1, 3, '2020-10-12 07:36:25'),
(10, 'message test 2 1', 2, 1, '2020-10-12 07:36:25'),
(11, 'message test 2 3', 2, 3, '2020-10-12 07:36:25'),
(12, 'message test 3 2', 3, 2, '2020-10-12 07:36:25');

-- --------------------------------------------------------

--
-- Table structure for table `personal_connections`
--

CREATE TABLE `personal_connections` (
  `userid1` int(11) NOT NULL,
  `userid2` int(11) NOT NULL,
  `friend_request` varchar(1) DEFAULT 'P'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal_connections`
--

INSERT INTO `personal_connections` (`userid1`, `userid2`, `friend_request`) VALUES
(1, 2, 'P'),
(1, 3, 'P'),
(1, 4, 'P'),
(2, 4, 'P');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`username`) VALUES
('fki_20');

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
(4, 'pyro', 'kritik', 'gambhir', 'gambhir@gambhir.com', '$2b$10$ZLRYtR74pseSJ7BOa3e69uO7E64jKG3gPMaVev3/oHj71n61PiWjS', 0, 0, 'gambhirprofile');

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
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `messages_group`
--
ALTER TABLE `messages_group`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `messages_personal`
--
ALTER TABLE `messages_personal`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `group_connections`
--
ALTER TABLE `group_connections`
  ADD CONSTRAINT `group_connections_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user_table` (`userid`),
  ADD CONSTRAINT `group_connections_ibfk_2` FOREIGN KEY (`groupid`) REFERENCES `group_table` (`g_id`);

--
-- Constraints for table `group_table`
--
ALTER TABLE `group_table`
  ADD CONSTRAINT `group_table_ibfk_1` FOREIGN KEY (`g_creator_id`) REFERENCES `user_table` (`userid`);

--
-- Constraints for table `messages_group`
--
ALTER TABLE `messages_group`
  ADD CONSTRAINT `messages_group_ibfk_1` FOREIGN KEY (`m_sender_id`) REFERENCES `user_table` (`userid`),
  ADD CONSTRAINT `messages_group_ibfk_2` FOREIGN KEY (`m_group_id`) REFERENCES `group_table` (`g_id`);

--
-- Constraints for table `messages_personal`
--
ALTER TABLE `messages_personal`
  ADD CONSTRAINT `messages_personal_ibfk_1` FOREIGN KEY (`m_sender_id`) REFERENCES `user_table` (`userid`),
  ADD CONSTRAINT `messages_personal_ibfk_2` FOREIGN KEY (`m_reciever_id`) REFERENCES `user_table` (`userid`);

--
-- Constraints for table `personal_connections`
--
ALTER TABLE `personal_connections`
  ADD CONSTRAINT `personal_connections_ibfk_1` FOREIGN KEY (`userid1`) REFERENCES `user_table` (`userid`),
  ADD CONSTRAINT `personal_connections_ibfk_2` FOREIGN KEY (`userid2`) REFERENCES `user_table` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
