--
-- Database: `beshegercom_my_stock`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `merchant_id`, `status`) VALUES
(1, 'wearble', 'pants', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `merchant_store`
--

CREATE TABLE `merchant_store` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `adress` varchar(200) DEFAULT NULL,
  `geo_lat` varchar(30) DEFAULT NULL,
  `geo_long` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `merchant_store`
--

INSERT INTO `merchant_store` (`id`, `name`, `owner`, `adress`, `geo_lat`, `geo_long`) VALUES
(1, 'Suluta shop', 1, 'sululuta', '213123123', '123123123');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `descriptions` varchar(500) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `units_of_measure` varchar(30) DEFAULT NULL,
  `unit_price` double DEFAULT NULL,
  `min_treshhold` int(11) DEFAULT NULL,
  `profit_margin` double DEFAULT NULL,
  `discounted_percentage` double DEFAULT NULL,
  `image_path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category`, `descriptions`, `merchant_id`, `quantity`, `units_of_measure`, `unit_price`, `min_treshhold`, `profit_margin`, `discounted_percentage`, `image_path`) VALUES
(1, 1, 'Belt', 1, 13, 'ps', 456, 7, 15, 0, 'no image');

-- --------------------------------------------------------

--
-- Table structure for table `product_order`
--

CREATE TABLE `product_order` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `order_date` int(11) DEFAULT NULL,
  `order_quantity` int(11) DEFAULT NULL,
  `unit_price` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_bin`
--

CREATE TABLE `stock_bin` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `prev_quaitity` int(11) DEFAULT NULL,
  `cur_quaitity` int(11) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `pre_price` double DEFAULT NULL,
  `cur_price` double DEFAULT NULL,
  `reg_date` datetime DEFAULT NULL,
  `registered_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `login_token` varchar(200) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `full_name` varchar(200) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `login_token`, `user_email`, `full_name`, `user_type`) VALUES
(1, '123wwqwe', 'jonmersha@gmail.com', 'Yohannes Mitike Mersha', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `merchant_id` (`merchant_id`);

--
-- Indexes for table `merchant_store`
--
ALTER TABLE `merchant_store`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`),
  ADD KEY `merchant_id` (`merchant_id`);

--
-- Indexes for table `product_order`
--
ALTER TABLE `product_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `merchant_id` (`merchant_id`);

--
-- Indexes for table `stock_bin`
--
ALTER TABLE `stock_bin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `merchant_id` (`merchant_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `merchant_store`
--
ALTER TABLE `merchant_store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_order`
--
ALTER TABLE `product_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_bin`
--
ALTER TABLE `stock_bin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`merchant_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `merchant_store`
--
ALTER TABLE `merchant_store`
  ADD CONSTRAINT `merchant_store_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`merchant_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `product_order`
--
ALTER TABLE `product_order`
  ADD CONSTRAINT `product_order_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `stock_bin` (`id`),
  ADD CONSTRAINT `product_order_ibfk_2` FOREIGN KEY (`merchant_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `stock_bin`
--
ALTER TABLE `stock_bin`
  ADD CONSTRAINT `stock_bin_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `stock_bin_ibfk_2` FOREIGN KEY (`merchant_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `stock_bin_ibfk_3` FOREIGN KEY (`store_id`) REFERENCES `merchant_store` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
