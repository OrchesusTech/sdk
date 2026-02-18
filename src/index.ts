import "dotenv/config";
import { analyzeRepo } from "./core/analyzer";
import { generatePR } from "./core/prGenerator";
import { createBranchAndCommit } from "./services/gitService";
import { log } from "./utils/logger";

async function main() {
  const task = process.argv.slice(2).join(" ");

  if (!task) {
    log("Please provide a task description.");
    process.exit(1);
  }

  log("Analyzing repository...");
  const context = await analyzeRepo();

  log("Generating production PR...");
  const pr = await generatePR(task, context);

  log("Creating branch & commit...");
  await createBranchAndCommit(pr);

  log("Branch created successfully 🚀");
}

main();
