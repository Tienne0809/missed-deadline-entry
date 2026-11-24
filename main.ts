import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry.
// The program writes one excuse line to the output entry file.
const line =
  "I did not miss the deadline; I performed an unplanned migration of the deadline to a more sustainable date.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
