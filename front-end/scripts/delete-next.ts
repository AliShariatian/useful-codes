/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const fs = require("fs/promises");

/**
 * Auto delete .next folder
 *
 * For run, add bellow command in package.json script scope:
 * "del:next": "ts-node scripts/delete-next.ts"
 *
 * and run bellow command in terminal:
 * npm run del:next
 */
const deleteNextFolder = async (): Promise<void> => {
  const nextPath = path.join(process.cwd(), ".next");

  try {
    await fs.rm(nextPath, { recursive: true, force: true });
    console.log(".next folder deleted successfully!");
  } catch (error) {
    console.error("Error deleting .next folder:", error);
    process.exit(1);
  }
};

void deleteNextFolder();
