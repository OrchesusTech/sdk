import fs from "fs";
import path from "path";
import { config } from "../config";

export async function analyzeRepo() {
  const repoPath = config.repoPath;

  const files = fs.readdirSync(repoPath);

  const fileTree = files.map(file => {
    const fullPath = path.join(repoPath, file);
    const stat = fs.statSync(fullPath);

    return {
      name: file,
      isDirectory: stat.isDirectory()
    };
  });

  return {
    root: repoPath,
    files: fileTree
  };
}
