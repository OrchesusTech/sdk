import { generateCode } from "../services/aiService";

export async function generatePR(task: string, context: any) {
  const prompt = `
You are a senior production engineer.

Task:
${task}

Repository structure:
${JSON.stringify(context.files, null, 2)}

Generate:
1. Modified files (full content)
2. Commit message
3. PR description
4. Tests if needed

Return clean structured output.
`;

  return await generateCode(prompt);
}
