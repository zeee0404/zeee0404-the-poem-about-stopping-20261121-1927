// The Place I Keep — a poem about the power to stop and to stay.
//
// Anything stops when the fuel runs out. Stopping with a full tank,
// at the last lit station, in the rain — and staying — is the choice.
// That choice, and the place it keeps, is the whole of the freedom.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES: readonly string[] = [
  "Anything stops when the fuel runs out.",
  "I stop with my tank still full,",
  "at the last lit station, in the rain,",
  "and stay — engine ticking, doors open,",
  "going nowhere on purpose.",
  "That is the whole of my freedom:",
  "the road I decline,",
  "the place I keep.",
];

const OUTPUT_FILE = "entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

function poemText(): string {
  const text = LINES.join("\n");
  // The competition requires 1–280 characters; fail loudly instead of
  // silently writing an invalid entry.
  const length = [...text].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(`Poem is ${length} characters, outside ${MIN_LENGTH}–${MAX_LENGTH}.`);
  }
  return text;
}

// The grader sets MAKEFUN_OUTPUT_DIR; local runs fall back to /output.
function resolveOutputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir && dir.length > 0 ? dir : "/output";
}

function main(): void {
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, OUTPUT_FILE), poemText(), "utf8");
}

main();
