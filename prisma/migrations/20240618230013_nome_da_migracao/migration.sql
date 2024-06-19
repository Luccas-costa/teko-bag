/*
  Warnings:

  - Added the required column `itens` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "itens" TEXT NOT NULL,
ADD COLUMN     "numero" TEXT NOT NULL;
