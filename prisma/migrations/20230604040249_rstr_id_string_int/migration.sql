/*
  Warnings:

  - You are about to alter the column `RSTR_ID` on the `restaurant` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[RSTR_ID]` on the table `restaurant` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `restaurant` MODIFY `RSTR_ID` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_RSTR_ID_key` ON `restaurant`(`RSTR_ID`);
