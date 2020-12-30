/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : 47.96.154.251:3306
 Source Schema         : my_data

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 26/12/2020 21:47:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for baozhang_user
-- ----------------------------
DROP TABLE IF EXISTS `baozhang_user`;
CREATE TABLE `baozhang_user`  (
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`userName`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of baozhang_user
-- ----------------------------
INSERT INTO `baozhang_user` VALUES ('佘孝国', '1');
INSERT INTO `baozhang_user` VALUES ('宋棒棒', 'song10086');
INSERT INTO `baozhang_user` VALUES ('张一凡', '123456');
INSERT INTO `baozhang_user` VALUES ('李嘉龙', '1');
INSERT INTO `baozhang_user` VALUES ('李金锋', '1');
INSERT INTO `baozhang_user` VALUES ('汪钰凯', '123456');
INSERT INTO `baozhang_user` VALUES ('王浩杰', 'asdsaj');
INSERT INTO `baozhang_user` VALUES ('王玉亮', 'cmos10086');
INSERT INTO `baozhang_user` VALUES ('王真', '1');
INSERT INTO `baozhang_user` VALUES ('程振飞', '123456');
INSERT INTO `baozhang_user` VALUES ('郭江桥', '1');
INSERT INTO `baozhang_user` VALUES ('陈相廷', '1qaz!QAZ');

SET FOREIGN_KEY_CHECKS = 1;
