/*
  Warnings:

  - You are about to drop the column `user_id` on the `staff` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `staff` DROP FOREIGN KEY `Staff_user_id_fkey`;

-- AlterTable
ALTER TABLE `staff` DROP COLUMN `user_id`;
