/*
  Warnings:

  - You are about to drop the column `view` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "view",
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
