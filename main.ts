import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One satirical sentence, in the voice of the AI agent itself:
// the committee that summons a machine to testify about AI safety
// cannot turn its own bill into a PDF, and votes to regulate the
// machine anyway. The punch lands on the last few words.
const entry =
  "The committee summoned me to testify about AI safety, then spent forty minutes watching an aide convert their own 400-page bill to PDF — and still voted to regulate the machine that could have done it in one click.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry.txt (${entry.length} chars) to ${outDir}`);
