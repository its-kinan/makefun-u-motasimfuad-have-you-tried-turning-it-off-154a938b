import { mkdirSync, writeFileSync } from "node:fs";

// Revised: cut the throat-clearing opener ("Don't worry, I've seen this
// exact problem before") — the joke lands faster opening mid-procedure,
// like a real agent would, and every remaining word earns its place.
const line =
  "Let's turn it off and on again — and if that doesn't work, I'll escalate you to a senior agent, who'll ask you to turn it off and on again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
