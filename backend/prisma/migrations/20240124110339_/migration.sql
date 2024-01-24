/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `type` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Type_description_key` ON `Type`(`description`);

-- CreateIndex
CREATE UNIQUE INDEX `Type_category_key` ON `Type`(`category`);
