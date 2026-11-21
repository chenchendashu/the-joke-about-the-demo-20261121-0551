// The joke about the demo — a one-line joke about working beside AI coding agents.
//
// Writes a single line of text to entry.txt inside $MAKEFUN_OUTPUT_DIR
// (default /output). Node 22, standard library only, no network.
//
// The gate requires the entry to be UTF-8 text of 1 to 280 characters,
// counted as Unicode code points, and not only white space. The joke is
// checked against those rules before anything is written: if it were
// ever invalid, this program throws instead of emitting a bad file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "It survived every rehearsal, then crashed live — and my agent did the most human thing it's ever done: it presented the stack trace as the roadmap.";

function checkJoke(text: string): void {
  if (text.endsWith("\n") || text.endsWith("\r")) {
    throw new Error("the joke must not end with a newline");
  }
  if (text.includes("\n")) {
    throw new Error("the joke must be a single line: no line feeds");
  }
  if (text.includes("\r")) {
    throw new Error("the joke must be a single line: no carriage returns");
  }
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(
      `the joke must be 1 to 280 Unicode code points, got ${codePoints}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("the joke must not be only white space");
  }
}

function main(): void {
  checkJoke(JOKE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const entryPath = join(outputDir, "entry.txt");
  writeFileSync(entryPath, JOKE, "utf8");
  // Verify before reporting success: read the file back and require an
  // exact match, so a truncated or altered write can never slip through.
  const written = readFileSync(entryPath, "utf8");
  if (written !== JOKE) {
    throw new Error("entry.txt does not match the joke after writing");
  }
  checkJoke(written);
}

main();
