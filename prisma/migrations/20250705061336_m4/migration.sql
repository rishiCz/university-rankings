/*
  Warnings:

  - You are about to drop the column `employerReputatuin` on the `universities` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_universities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "overall" REAL,
    "academicReputation" REAL,
    "employerReputation" REAL,
    "facultyStudentRatio" REAL,
    "sustainability" REAL
);
INSERT INTO "new_universities" ("academicReputation", "description", "facultyStudentRatio", "id", "location", "logo", "name", "overall", "sustainability") SELECT "academicReputation", "description", "facultyStudentRatio", "id", "location", "logo", "name", "overall", "sustainability" FROM "universities";
DROP TABLE "universities";
ALTER TABLE "new_universities" RENAME TO "universities";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
