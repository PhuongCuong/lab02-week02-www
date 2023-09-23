-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2023 at 04:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `week02`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cust_id` int(11) NOT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `FULLNAME` varchar(255) DEFAULT NULL,
  `PHONE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `emp_id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `full_name` varchar(150) DEFAULT NULL,
  `phone` varchar(150) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`emp_id`, `address`, `dob`, `email`, `full_name`, `phone`, `status`) VALUES
(1, 'dfsfdsf', '2023-09-21 09:59:58', 'fdsdfsfd', 'sfdfsf', '1', -1),
(2, 'dfsdfsfdfsf', '2023-09-21 10:00:15', 'dfsdfsfds', 'dfsfdsfdf', '2323232', 0),
(3, 'fsdfsfdfsf', '2023-09-21 10:00:30', 'fdsdfsfdsf', 'dsdfdfsfsdf', '334343', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `NODE` varchar(255) DEFAULT NULL,
  `PRICE` double DEFAULT NULL,
  `QUANTITY` double DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `cust_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productimgaes`
--

CREATE TABLE `productimgaes` (
  `image_id` int(11) NOT NULL,
  `ALTERNATIVE` varchar(255) DEFAULT NULL,
  `PATH` varchar(255) DEFAULT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productimgaes`
--

INSERT INTO `productimgaes` (`image_id`, `ALTERNATIVE`, `PATH`, `product_id`) VALUES
(1, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/8935325010736.jpg', 1),
(2, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/image_217480.jpg', 2),
(8, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/b_a-tr_c---ph_p-y-600.jpg', 3),
(10, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/8935325006289.jpg', 4),
(11, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/9726a839a056959e94aba54e7c1ff0d6_1_1.jpg', 5),
(12, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/ng_i-d_n-d_p-hi_n-tr_ng-_n-m_ngb_a-1.jpg', 6),
(13, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/image_195509_1_36793.jpg', 7),
(14, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/image_195509_1_29716.jpg', 8),
(15, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/image_195509_1_36366.jpg', 9),
(16, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/8934974158448.jpg', 10),
(17, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/8935235217508_11.jpg', 11),
(18, NULL, 'https://Bookstore-1.s3.ap-southeast-1.amazonaws.com/Book/image_195509_1_31258.jpg', 12);

-- --------------------------------------------------------

--
-- Table structure for table `productprices`
--

CREATE TABLE `productprices` (
  `price_date_time` datetime NOT NULL,
  `NODE` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productprices`
--

INSERT INTO `productprices` (`price_date_time`, `NODE`, `price`, `product_id`) VALUES
('2023-09-21 22:33:07', NULL, 74250, 1),
('2023-09-21 22:33:25', NULL, 54000, 2),
('2023-09-21 22:36:31', NULL, 112500, 3),
('2023-09-21 22:36:56', NULL, 66000, 4),
('2023-09-21 22:37:04', NULL, 59250, 5),
('2023-09-21 22:45:10', NULL, 70500, 6),
('2023-09-21 22:45:19', NULL, 59250, 7),
('2023-09-21 22:45:33', NULL, 100000, 8),
('2023-09-21 22:45:43', NULL, 87200, 9),
('2023-09-21 22:45:54', NULL, 100000, 10),
('2023-09-21 22:46:05', NULL, 84000, 11),
('2023-09-21 22:46:18', NULL, 78400, 12),
('2023-09-22 15:22:23', NULL, 80000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `manufacturer_name` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `UNIT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `DESCRIPTION`, `manufacturer_name`, `NAME`, `STATUS`, `UNIT`) VALUES
(1, 'no', NULL, '999 Lá Thư Gửi Cho Chính Mình', 1, 'cai'),
(2, 'no', '', 'Cây Cam Ngọt Của Tôi', 1, 'cai'),
(3, 'no', NULL, 'Ghi Chép Pháp Y', 1, 'cai'),
(4, 'no', NULL, 'Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)', 1, 'cai'),
(5, 'no', NULL, 'Chưa Kịp Lớn Đã Trưởng Thành (Tái Bản 2023)', 1, 'cai'),
(6, 'no', NULL, 'Người Dọn Dẹp Hiện Trường Án Mạng', 1, 'cai'),
(7, 'no', NULL, 'Nhà Giả Kim (Tái Bản 2020)', 1, 'cai'),
(8, 'no', NULL, 'Ngày Xưa Có Một Chuyện Tình (Tái Bản 2019)', 1, 'cai'),
(9, 'no', NULL, 'Chiến Binh Cầu Vồng (Tái Bản 2020)', 1, 'cai'),
(10, 'no', NULL, 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh (Bản In Mới - 2018)', 1, 'cai'),
(11, 'no', NULL, 'Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Tái Bản 2018)', 1, 'cai'),
(12, 'no', NULL, 'Hai Mặt Của Gia Đình', 1, 'cai');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `FK_orderdetails_product_id` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `FK_orders_emp_id` (`emp_id`),
  ADD KEY `FK_orders_cust_id` (`cust_id`);

--
-- Indexes for table `productimgaes`
--
ALTER TABLE `productimgaes`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `FK_productimgaes_product_id` (`product_id`);

--
-- Indexes for table `productprices`
--
ALTER TABLE `productprices`
  ADD PRIMARY KEY (`price_date_time`,`product_id`),
  ADD KEY `FK_productprices_product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productimgaes`
--
ALTER TABLE `productimgaes`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `FK_orderdetails_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `FK_orderdetails_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_orders_cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customers` (`cust_id`),
  ADD CONSTRAINT `FK_orders_emp_id` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`);

--
-- Constraints for table `productimgaes`
--
ALTER TABLE `productimgaes`
  ADD CONSTRAINT `FK_productimgaes_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `productprices`
--
ALTER TABLE `productprices`
  ADD CONSTRAINT `FK_productprices_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
