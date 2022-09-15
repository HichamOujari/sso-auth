-- -------------------------------------------------------------
-- TablePlus 4.8.8(450)
--
-- https://tableplus.com/
--
-- Database: second
-- Generation Time: 2022-09-15 11:27:10.8430
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `applications`;
CREATE TABLE `applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hostname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`hostname`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL,
  `token` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `EMAIL` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

INSERT INTO `applications` (`id`, `hostname`) VALUES
(14, 'http://localhost:5500/example-sso-use/example1/'),
(15, 'http://localhost:5500/example-sso-use/example2/shoppong.html');

INSERT INTO `user` (`id`, `email`, `password`, `role`, `token`) VALUES
(11, 'hichamoujari99@gmail.com', '2246fdc50879cd9f4fcb52f66bbf97fa', 'ROLE_USER', '2a982f262ae94b291197d3baab319d46'),
(14, 'hicha.moujari99@gmail.com', '2246fdc50879cd9f4fcb52f66bbf97fa', 'ROLE_MANAGER', NULL),
(15, 'hi.c,hamoujari99@gmail.com', '7066b4a6a679990c2284916a2c19769a', 'ROLE_MANAGER', NULL),
(17, 'hicha.moujardi99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(18, 'hicha.mo.ujari99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(19, 'hicha.modujari99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(20, 'hicha.moujdari99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_ADMIN', '01746cdb6a4c52d6fe2180c8c464780f'),
(21, 'hicha.mousdsfjdari99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_USER', NULL),
(23, 'hicha.moujdasri99@gmail.com', 'a259aa02ce8b026378c554df5fb050c1', 'ROLE_ADMIN', NULL),
(24, 'hicha.moujarid99@gmail.com', 'e3f3279eb6f650145dd7914d937a6c30', 'ROLE_USER', '84ed99cebf7e4df616e37f09813c212c'),
(26, 'hicha.moujari99@gmail.comdd', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(27, 'hids@slkds.com', 'bbf67ce47e7f178d8950afa2510c3f03', 'ROLE_ADMIN', 'caba04eaa72d44d36b03d3c39d702a5c'),
(28, 'hidsdsdsds@slkds.com', '8f46a660becdc615b29d8403bb6bd518', 'ROLE_MANAGER', 'b1033a2148b99eb64e339cda48c08745'),
(33, 'hidsdsds@slkds.com', '66a6d7d7bcc2646c74165df3fb80aad1', 'ROLE_MANAGER', '5a6a33bfdb982081d9895202bb22e082'),
(35, 'hic.ha.moujari99@gmail.com', 'bd1ffb33e5717c0cef0e122bd282b6c3', 'ROLE_MANAGER', NULL),
(37, 'hi.c.ha.moujari99@gmail.com', '68e2ef21e1a7445b025eccba83b52686', 'ROLE_MANAGER', '928c3c8fb446ecfe356a60bca753f705'),
(38, 'hidskldjasdkljs@slkds.com', '57e1698c086a2878d33254e901ab49bc', 'ROLE_ADMIN', 'b62eb80e21efdec9bf019f13c997408e'),
(40, 'hichajshdasmoujari99@gmail.com', '2246fdc50879cd9f4fcb52f66bbf97fa', 'ROLE_USER', '5db5576a3e3a43bf4ff17536bf96cf6e'),
(41, 'hicha.moujsdmsndlari99@gmail.com', '889572d477eb8c18c317871ab2300d89', 'ROLE_USER', NULL),
(43, 'hicha.moujsdmslkdjssndlari99@gmail.com', '5c28aafc045e5629ab0fce90aaf90746', 'ROLE_ADMIN', 'fc99299a960b8532391ce5b6ecab90ba'),
(44, 'hicha.mosdsujari99@gmail.com', '1630be2af3ddcc0941264d27ef050bf7', 'ROLE_MANAGER', '0bfc98f370ba8f30e8ab4aef38b66094'),
(46, 'hids@slkds.comd', '16558cc03bbe1aaff701824bde18126c', 'ROLE_USER', NULL),
(48, 'hichdujari99@gmail.com', 'ad8e603bf0e313d4ae7edff2dec633c9', 'admin', NULL),
(49, 'adminadmin@admin', '32282f8f21bbdcd5059666c234116dbc', 'admin', NULL),
(51, 'admin@sssdsd.com', '53958f82ef366a34d2c3201d0c643e93', 'admin', NULL),
(52, 'adminadmin@adminsd.com', 'feb7be5385ccfedc25d6c18ccbb9ec8d', 'admin', '7e5dd7c6c33fc7d94e4e368f67b40650'),
(53, 'admin@gmail.com', '75d23af433e0cea4c0e45a56dba18b30', 'role_admin', 'bf24f6823a9b6dccdec9915020277609'),
(54, 'user@gmail.com', 'cba1f2d695a5ca39ee6f343297a761a4', 'role_user', '9636e8fa894e454a2ec14f1005d4c747'),
(55, 'user1@gmail.com', '59029276955677351421b3ff6bf5ee4c', 'role_user', 'c0808eb07cef094ceaa8ebf4e8a12506'),
(56, 'admin1@gmail.com', '4c3d30db18c7e79e27be78c175b7c0a6', 'role_admin', '077abe36d60730291f07f9bceb596004');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;