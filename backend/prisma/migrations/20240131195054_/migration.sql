/*
  Warnings:

  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `Sale_shop_id_fkey`;

-- DropForeignKey
ALTER TABLE `type` DROP FOREIGN KEY `Type_user_id_fkey`;

-- DropTable
DROP TABLE `item`;

-- DropTable
DROP TABLE `sale`;

-- DropTable
DROP TABLE `type`;
