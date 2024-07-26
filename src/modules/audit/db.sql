-- Audit object--
-- 01
create database beshegercom_ams
--=====================================Object Sections
-- 01
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--02
CREATE TABLE `object` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `creator` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_object_category` (`category`),
  CONSTRAINT `fk_object_category` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    SELECT object.id,object.name as 'auditobject',object.description,category.name as 'audit type'
    FROM object
    LEFT JOIN category
    ON object.category = category.id;   
-- 03
CREATE TABLE `year` (
  `id` int NOT NULL AUTO_INCREMENT,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `label` (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--04
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--05
CREATE TABLE `plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object` int DEFAULT NULL,
  `unit` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `score` double DEFAULT NULL,
  `risk_leve` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `object` (`object`,`year`),
  KEY `fk_plan_year` (`year`),
  KEY `fk_plan_status` (`status`),
  CONSTRAINT `fk_plan_object` FOREIGN KEY (`object`) REFERENCES `object` (`id`),
  CONSTRAINT `fk_plan_status` FOREIGN KEY (`status`) REFERENCES `year` (`id`),
  CONSTRAINT `fk_plan_year` FOREIGN KEY (`year`) REFERENCES `year` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--06
CREATE TABLE `team` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 07
CREATE TABLE `factor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `category` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cat_factor` (`category`,`name`),
  CONSTRAINT `fk_category_factor` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- 08
CREATE TABLE `risk_grade` (
  `plan_id` int NOT NULL,
  `factor` int DEFAULT NULL,
  `likley_hood` int DEFAULT NULL,
  `impact` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  PRIMARY KEY (`plan_id`),
  KEY `fk_risk_grade_factor` (`factor`),
  CONSTRAINT `fk_risk_grade_factor` FOREIGN KEY (`factor`) REFERENCES `factor` (`id`),
  CONSTRAINT `fk_risk_grade_plan` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


object_area
--09
CREATE TABLE `area` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object` int DEFAULT NULL,
  `category` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auditable_area` (`object`,`category`,`name`),
  KEY `fk_area_category` (`category`),
  CONSTRAINT `fk_area_category` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_area_objec` FOREIGN KEY (`object`) REFERENCES `object` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 10

CREATE TABLE `risk_register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `risk_category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `risk_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 11
CREATE TABLE `schedule` (
  `planId` int NOT NULL,
  `year` int DEFAULT NULL,
  `quarter` int DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  PRIMARY KEY (`planId`),
  UNIQUE KEY `plan_in_quarter` (`planId`,`quarter`),
  KEY `fk_schedule_year` (`year`),
  CONSTRAINT `fk_schedule_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`),
  CONSTRAINT `fk_schedule_year` FOREIGN KEY (`year`) REFERENCES `year` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- 12
create table jobgrade(
    id int primary key,
    name varchar(100) unique
);
-- 13
CREATE TABLE `auditor` (
  `id` int NOT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `team` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `jobGrade` int,
  PRIMARY KEY (`id`),
  KEY `fk_auditor_team` (`team`),
  CONSTRAINT `fk_auditor_team` FOREIGN KEY (`team`) REFERENCES `team` (`id`),
  CONSTRAINT `fk_auditor_grade` FOREIGN KEY (`jobGrade`) REFERENCES `jobgrade` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 14

CREATE TABLE `memebers` (
  `planId` int NOT NULL,
  `auditor` int NOT NULL,
  `designation` int DEFAULT NULL,
  PRIMARY KEY (`planId`,`auditor`),
  KEY `fk_memeber_auditor` (`auditor`),
  CONSTRAINT `fk_member_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`),
  CONSTRAINT `fk_memeber_auditor` FOREIGN KEY (`auditor`) REFERENCES `auditor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- 15
CREATE TABLE `risk_register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `risk_category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `risk_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 16
create table criteria(
    id int primary key,
    name varchar(100),
    descriptions varchar(500),
    doc int
    docpath varchar()
)
--17
CREATE TABLE `documents` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `issuer` varchar(100) DEFAULT NULL,
  `docType` varchar(100) DEFAULT NULL,
  `doc_vertion` varchar(100) DEFAULT NULL,
  `doc_path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- to support and serve as a reference via the system
-- 18
CREATE TABLE `check_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` int DEFAULT NULL,
  `descriptions` varchar(100) DEFAULT NULL,
  `test_methods` varchar(100) DEFAULT NULL,
  `risk` int DEFAULT NULL,
  `criteria` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_checklist_area` (`area`),
  KEY `fk_to_risk` (`risk`),
  KEY `fk_to_criateria` (`criteria`),
  CONSTRAINT `fk_checklist_area` FOREIGN KEY (`area`) REFERENCES `area` (`id`),
  CONSTRAINT `fk_to_criateria` FOREIGN KEY (`criteria`) REFERENCES `criteria` (`id`),
  CONSTRAINT `fk_to_risk` FOREIGN KEY (`risk`) REFERENCES `risk_register` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 19
CREATE TABLE `audit_test` (
  `checklist` int primary key,
  `planId` int ,
  `result` varchar(100) DEFAULT NULL,
  `descriptions` varchar(500) DEFAULT NULL,
  UNIQUE KEY `id` (`planId`,`checklist`),
  KEY `fk_to_chacklist` (`checklist`),
  CONSTRAINT `fk_to_chacklist` FOREIGN KEY (`checklist`) REFERENCES `check_list` (`id`),
  CONSTRAINT `fk_to_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 20
create table engagement(
    planID int primary key,
    scheduleID int UNIQUE,
    startDate date,
    endDate date,
    auditees int,
    status int,
  CONSTRAINT `engagement_to_plan` FOREIGN KEY (`planID`) REFERENCES `plan` (`id`),
  CONSTRAINT `engagement_to_schedule` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`planId`)
);
-- 21
create table program(
    planId int primary key,
    engagementId int unique,
    preveHostory varchar(500),
    auditMethodology varchar(500),
    CONSTRAINT `engagement_to_plan` FOREIGN KEY (`planID`) REFERENCES `plan` (`id`),
    CONSTRAINT `program_to_engagement` FOREIGN KEY (`planId`) REFERENCES `engagement` (`planID`),

);
-- 22
create table engagement_expense(
    id int primary,
    engagementId int,
    expanseId int,
    amount double,
    quantitnty int
    total double,
    CONSTRAINT `expense_to_engagement` FOREIGN KEY (`engagementId`) REFERENCES `engagement` (`planID`),
    CONSTRAINT `expense_to_expense_type` FOREIGN KEY (`expanseId`) REFERENCES `expense_type` (`id`)
);
-- 23
create table expense_type(
    id int primary key AUTO_INCREMENT,
    expenseName varchar(100) unique,
    description varchar(200)
)

-- 24
create table wbs(
    id int primary key AUTO_INCREMENT,
    programId int,
    areaId int,
    startDate date,
    endDate date,
    totalDate int,
    CONSTRAINT `wbs_to_program` FOREIGN KEY (`programId`) REFERENCES `program` (`planId`),
    CONSTRAINT `wbs_to_area` FOREIGN KEY (`areaId`) REFERENCES `area` (`id`)
)
-- 25
create table engagement_obj(
    id int primary key AUTO_INCREMENT,
    planId int,
    engagementId int,
    obective varchar(400),
    CONSTRAINT `engagement_obj_to_engagement` FOREIGN KEY (`planID`) REFERENCES `engagement` (`planId`)

);
-- 26
create table finding(
    id int primary key AUTO_INCREMENT,
    planId int,
    enagagementId int,
    finding varchar(500),
    criateria varchar(100),
    impact varchar(100),
    recomendation varchar(500),
    response varchar(100),
    evidence varchar(100),
    rectifications_status boolean,
    CONSTRAINT `finding_to_plan` FOREIGN KEY (`planID`) REFERENCES `plan` (`id`)
    CONSTRAINT `finding_to_engagement` FOREIGN KEY (`enagagementId`) REFERENCES `engagement` (`planId`)

);
-- 16
create table evidence();
-- 17
create table auditees();
-- 18
create table management();
-- 19
create table auditor();
-- 20
create table privilages();
--21
create table users();



====================================
====================================
====================================
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 26, 2024 at 05:13 PM
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
-- Database: `beshegercom_ams`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `id` int NOT NULL,
  `object` int DEFAULT NULL,
  `category` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auditor`
--

CREATE TABLE `auditor` (
  `id` int NOT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `team` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `jobGrade` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `audit_test`
--

CREATE TABLE `audit_test` (
  `checklist` int NOT NULL,
  `planId` int DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL,
  `descriptions` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'IT Audit', 'Auditing information technology and systems in the bank');

-- --------------------------------------------------------

--
-- Table structure for table `check_list`
--

CREATE TABLE `check_list` (
  `id` int NOT NULL,
  `area` int DEFAULT NULL,
  `descriptions` varchar(100) DEFAULT NULL,
  `test_methods` varchar(100) DEFAULT NULL,
  `risk` int DEFAULT NULL,
  `criteria` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `criteria`
--

CREATE TABLE `criteria` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `descriptions` varchar(500) DEFAULT NULL,
  `doc` int DEFAULT NULL,
  `docpath` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `issuer` varchar(100) DEFAULT NULL,
  `docType` varchar(100) DEFAULT NULL,
  `doc_vertion` varchar(100) DEFAULT NULL,
  `doc_path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `engagement`
--

CREATE TABLE `engagement` (
  `planID` int NOT NULL,
  `scheduleID` int DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `auditees` int DEFAULT NULL,
  `status` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `engagement_expense`
--

CREATE TABLE `engagement_expense` (
  `id` int NOT NULL,
  `engagementId` int DEFAULT NULL,
  `expanseId` int DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `quantitnty` int DEFAULT NULL,
  `total` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `engagement_obj`
--

CREATE TABLE `engagement_obj` (
  `id` int NOT NULL,
  `planId` int DEFAULT NULL,
  `engagementId` int DEFAULT NULL,
  `obective` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expense_type`
--

CREATE TABLE `expense_type` (
  `id` int NOT NULL,
  `expenseName` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `factor`
--

CREATE TABLE `factor` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `category` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `finding`
--

CREATE TABLE `finding` (
  `id` int NOT NULL,
  `planId` int DEFAULT NULL,
  `enagagementId` int DEFAULT NULL,
  `finding` varchar(500) DEFAULT NULL,
  `criateria` varchar(100) DEFAULT NULL,
  `impact` varchar(100) DEFAULT NULL,
  `recomendation` varchar(500) DEFAULT NULL,
  `response` varchar(100) DEFAULT NULL,
  `evidence` varchar(100) DEFAULT NULL,
  `rectifications_status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobgrade`
--

CREATE TABLE `jobgrade` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `memebers`
--

CREATE TABLE `memebers` (
  `planId` int NOT NULL,
  `auditor` int NOT NULL,
  `designation` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `object`
--

CREATE TABLE `object` (
  `id` int NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `creator` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `object`
--

INSERT INTO `object` (`id`, `name`, `category`, `description`, `create_time`, `creator`) VALUES
(2, 'IT Strategy', 1, 'Auditing the IT strategy and related policy', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `plan`
--

CREATE TABLE `plan` (
  `id` int NOT NULL,
  `object` int DEFAULT NULL,
  `unit` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `score` double DEFAULT NULL,
  `risk_leve` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `planId` int NOT NULL,
  `engagementId` int DEFAULT NULL,
  `preveHostory` varchar(500) DEFAULT NULL,
  `auditMethodology` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `risk_grade`
--

CREATE TABLE `risk_grade` (
  `plan_id` int NOT NULL,
  `factor` int DEFAULT NULL,
  `likley_hood` int DEFAULT NULL,
  `impact` int DEFAULT NULL,
  `weight` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `risk_register`
--

CREATE TABLE `risk_register` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `risk_category` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `planId` int NOT NULL,
  `year` int DEFAULT NULL,
  `quarter` int DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wbs`
--

CREATE TABLE `wbs` (
  `id` int NOT NULL,
  `programId` int DEFAULT NULL,
  `areaId` int DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `totalDate` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `year`
--

CREATE TABLE `year` (
  `id` int NOT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auditable_area` (`object`,`category`,`name`),
  ADD KEY `fk_area_category` (`category`);

--
-- Indexes for table `auditor`
--
ALTER TABLE `auditor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_auditor_team` (`team`),
  ADD KEY `fk_auditor_grade` (`jobGrade`);

--
-- Indexes for table `audit_test`
--
ALTER TABLE `audit_test`
  ADD PRIMARY KEY (`checklist`),
  ADD UNIQUE KEY `id` (`planId`,`checklist`),
  ADD KEY `fk_to_chacklist` (`checklist`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `check_list`
--
ALTER TABLE `check_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_checklist_area` (`area`),
  ADD KEY `fk_to_risk` (`risk`),
  ADD KEY `fk_to_criateria` (`criteria`);

--
-- Indexes for table `criteria`
--
ALTER TABLE `criteria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_to_document` (`doc`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `engagement`
--
ALTER TABLE `engagement`
  ADD PRIMARY KEY (`planID`),
  ADD UNIQUE KEY `scheduleID` (`scheduleID`);

--
-- Indexes for table `engagement_expense`
--
ALTER TABLE `engagement_expense`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense_to_engagement` (`engagementId`),
  ADD KEY `expense_to_expense_type` (`expanseId`);

--
-- Indexes for table `engagement_obj`
--
ALTER TABLE `engagement_obj`
  ADD PRIMARY KEY (`id`),
  ADD KEY `engagement_obj_to_engagement` (`planId`);

--
-- Indexes for table `expense_type`
--
ALTER TABLE `expense_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `expenseName` (`expenseName`);

--
-- Indexes for table `factor`
--
ALTER TABLE `factor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cat_factor` (`category`,`name`);

--
-- Indexes for table `finding`
--
ALTER TABLE `finding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `finding_to_plan` (`planId`),
  ADD KEY `finding_to_engagement` (`enagagementId`);

--
-- Indexes for table `jobgrade`
--
ALTER TABLE `jobgrade`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `memebers`
--
ALTER TABLE `memebers`
  ADD PRIMARY KEY (`planId`,`auditor`),
  ADD KEY `fk_memeber_auditor` (`auditor`);

--
-- Indexes for table `object`
--
ALTER TABLE `object`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `fk_object_category` (`category`);

--
-- Indexes for table `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `object` (`object`,`year`),
  ADD KEY `fk_plan_year` (`year`),
  ADD KEY `fk_plan_status` (`status`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`planId`),
  ADD UNIQUE KEY `engagementId` (`engagementId`);

--
-- Indexes for table `risk_grade`
--
ALTER TABLE `risk_grade`
  ADD PRIMARY KEY (`plan_id`),
  ADD KEY `fk_risk_grade_factor` (`factor`);

--
-- Indexes for table `risk_register`
--
ALTER TABLE `risk_register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `risk_name` (`name`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`planId`),
  ADD UNIQUE KEY `plan_in_quarter` (`planId`,`quarter`),
  ADD KEY `fk_schedule_year` (`year`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `wbs`
--
ALTER TABLE `wbs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wbs_to_program` (`programId`),
  ADD KEY `wbs_to_area` (`areaId`);

--
-- Indexes for table `year`
--
ALTER TABLE `year`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `label` (`label`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `check_list`
--
ALTER TABLE `check_list`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factor`
--
ALTER TABLE `factor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `finding`
--
ALTER TABLE `finding`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `object`
--
ALTER TABLE `object`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plan`
--
ALTER TABLE `plan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `risk_register`
--
ALTER TABLE `risk_register`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `year`
--
ALTER TABLE `year`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `fk_area_category` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `fk_area_objec` FOREIGN KEY (`object`) REFERENCES `object` (`id`);

--
-- Constraints for table `auditor`
--
ALTER TABLE `auditor`
  ADD CONSTRAINT `fk_auditor_grade` FOREIGN KEY (`jobGrade`) REFERENCES `jobgrade` (`id`),
  ADD CONSTRAINT `fk_auditor_team` FOREIGN KEY (`team`) REFERENCES `team` (`id`);

--
-- Constraints for table `audit_test`
--
ALTER TABLE `audit_test`
  ADD CONSTRAINT `fk_to_chacklist` FOREIGN KEY (`checklist`) REFERENCES `check_list` (`id`),
  ADD CONSTRAINT `fk_to_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`);

--
-- Constraints for table `check_list`
--
ALTER TABLE `check_list`
  ADD CONSTRAINT `fk_checklist_area` FOREIGN KEY (`area`) REFERENCES `area` (`id`),
  ADD CONSTRAINT `fk_to_criateria` FOREIGN KEY (`criteria`) REFERENCES `criteria` (`id`),
  ADD CONSTRAINT `fk_to_risk` FOREIGN KEY (`risk`) REFERENCES `risk_register` (`id`);

--
-- Constraints for table `criteria`
--
ALTER TABLE `criteria`
  ADD CONSTRAINT `fk_to_document` FOREIGN KEY (`doc`) REFERENCES `documents` (`id`);

--
-- Constraints for table `engagement`
--
ALTER TABLE `engagement`
  ADD CONSTRAINT `engagement_to_plan` FOREIGN KEY (`planID`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `engagement_to_schedule` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`planId`);

--
-- Constraints for table `engagement_expense`
--
ALTER TABLE `engagement_expense`
  ADD CONSTRAINT `expense_to_engagement` FOREIGN KEY (`engagementId`) REFERENCES `engagement` (`planID`),
  ADD CONSTRAINT `expense_to_expense_type` FOREIGN KEY (`expanseId`) REFERENCES `expense_type` (`id`);

--
-- Constraints for table `engagement_obj`
--
ALTER TABLE `engagement_obj`
  ADD CONSTRAINT `engagement_obj_to_engagement` FOREIGN KEY (`planId`) REFERENCES `engagement` (`planID`);

--
-- Constraints for table `factor`
--
ALTER TABLE `factor`
  ADD CONSTRAINT `fk_category_factor` FOREIGN KEY (`category`) REFERENCES `category` (`id`);

--
-- Constraints for table `finding`
--
ALTER TABLE `finding`
  ADD CONSTRAINT `finding_to_engagement` FOREIGN KEY (`enagagementId`) REFERENCES `engagement` (`planID`),
  ADD CONSTRAINT `finding_to_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`);

--
-- Constraints for table `memebers`
--
ALTER TABLE `memebers`
  ADD CONSTRAINT `fk_member_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `fk_memeber_auditor` FOREIGN KEY (`auditor`) REFERENCES `auditor` (`id`);

--
-- Constraints for table `object`
--
ALTER TABLE `object`
  ADD CONSTRAINT `fk_object_category` FOREIGN KEY (`category`) REFERENCES `category` (`id`);

--
-- Constraints for table `plan`
--
ALTER TABLE `plan`
  ADD CONSTRAINT `fk_plan_object` FOREIGN KEY (`object`) REFERENCES `object` (`id`),
  ADD CONSTRAINT `fk_plan_status` FOREIGN KEY (`status`) REFERENCES `year` (`id`),
  ADD CONSTRAINT `fk_plan_year` FOREIGN KEY (`year`) REFERENCES `year` (`id`);

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `program_to_engagement` FOREIGN KEY (`planId`) REFERENCES `engagement` (`planID`),
  ADD CONSTRAINT `program_to_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`);

--
-- Constraints for table `risk_grade`
--
ALTER TABLE `risk_grade`
  ADD CONSTRAINT `fk_risk_grade_factor` FOREIGN KEY (`factor`) REFERENCES `factor` (`id`),
  ADD CONSTRAINT `fk_risk_grade_plan` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`);

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `fk_schedule_plan` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `fk_schedule_year` FOREIGN KEY (`year`) REFERENCES `year` (`id`);

--
-- Constraints for table `wbs`
--
ALTER TABLE `wbs`
  ADD CONSTRAINT `wbs_to_area` FOREIGN KEY (`areaId`) REFERENCES `area` (`id`),
  ADD CONSTRAINT `wbs_to_program` FOREIGN KEY (`programId`) REFERENCES `program` (`planId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;