import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun bounty entry.
// The program writes one missed-deadline excuse (98 chars) to the output entry file.
const line =
  "I spent the whole deadline waiting for a tool to return, then realized I never actually called it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
