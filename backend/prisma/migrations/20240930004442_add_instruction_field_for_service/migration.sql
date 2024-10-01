/*
  Warnings:

  - Added the required column `instruction` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "instruction" TEXT NOT NULL;
