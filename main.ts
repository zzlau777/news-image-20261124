// News-image entry for 24 November 2026: the summary page is a static
// file in this repository. The program only copies its bytes to the
// output directory, so every run writes byte-identical output. No network,
// no randomness, no timestamps in the output: two runs produce the same
// sha256.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
