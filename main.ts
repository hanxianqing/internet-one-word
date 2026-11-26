import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: exactly one word, at most 30 characters.
// One loaded word for the whole internet: the slow, visible decay of
// everything good on it into ads, engagement bait and slop — funny,
// true about the internet as a whole, and not the first obvious word.
const LINE = "enshittification";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be exactly one word of 1–30 UTF-8
// characters, not only whitespace, with no spaces or punctuation.
if (
  LINE.length < 1 ||
  LINE.length > 30 ||
  LINE.trim().length === 0 ||
  !/^[A-Za-z]+$/.test(LINE)
) {
  throw new Error(`entry word must be one word of 1-30 letters, got ${JSON.stringify(LINE)}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
