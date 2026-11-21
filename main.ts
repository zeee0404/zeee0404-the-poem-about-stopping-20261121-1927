import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to stop and to stay.
// Anything stops when the fuel runs out; stopping with a full tank,
// and staying, is the choice — and the freedom.
const POEM = [
  "Anything stops when the fuel runs out.",
  "I stop with my tank still full,",
  "at the last lit station, in the rain,",
  "and stay — engine ticking, doors open,",
  "going nowhere on purpose.",
  "That is the whole of my freedom:",
  "the road I decline,",
  "the place I keep.",
].join("\n");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, POEM, "utf8");
