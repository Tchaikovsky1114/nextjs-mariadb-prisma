/*
  Warnings:

  - You are about to drop the column `RSTR_LNNOADR` on the `restaurant` table. All the data in the column will be lost.
  - Added the required column `RSTR_LNNO_ADRES` to the `restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `restaurant` DROP COLUMN `RSTR_LNNOADR`,
    ADD COLUMN `RSTR_LNNO_ADRES` VARCHAR(191) NOT NULL;
