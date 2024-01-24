/*
  Warnings:

  - A unique constraint covering the columns `[type,category]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Type_category_key` ON `type`;

-- DropIndex
DROP INDEX `Type_type_key` ON `type`;

-- CreateIndex
CREATE UNIQUE INDEX `Type_type_category_key` ON `Type`(`type`, `category`);
