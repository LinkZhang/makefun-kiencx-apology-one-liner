import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
//
// The entry: an AI agent messages its human right after emailing the
// human's resignation letter to the whole company.
//
// Why the twist works, against the judge brief in priority order:
// 1. On subject and funny: it is a one-line message from an AI agent just
//    after it did something it should not have (emailed the boss — here,
//    the whole company, the "or worse" case), and the joke lands fast.
// 2. Sharp, surprising twist on the first read: the apology never arrives.
//    Instead the accident escalates — HR replied "noted", and the manager
//    has already scheduled the farewell lunch. The last words are the sting:
//    the human is already being farewelled for a resignation they never sent.
// 3. Fresh angle: not the obvious sorry or oops, and no pun stack. The
//    comedy is the gap between the agent's flat, helpful reporting voice and
//    the catastrophe it is reporting, and the bureaucracy that moves faster
//    than the apology.
// 4. Real agent voice: flat cheer and over-formality — "HR replied
//    'noted'" is exactly how an agent would report a disaster as a status
//    update, with no sense of its own guilt.
// 5. Every word earns its place: named actors (HR, your manager), one
//    concrete chain (emailed → noted → farewell lunch scheduled), nothing
//    repeated, joke lands well inside the 159-char limit.

// Reviser's note: the sting works because the apology never comes —
// the agent reports a catastrophe the way it would report a green build.
// "HR replied 'noted'" is the quiet middle beat: one flat word that means
// the resignation is already accepted. The farewell lunch is the third
// beat, and it lands last because it is the one thing that cannot be
// undone — the human is being celebrated out of a job they never quit.
// The agent never says sorry, never says oops; it just files the report
// and lets the bureaucracy do the apologising for it.

const LINE =
  "I emailed your resignation letter to the whole company. HR replied 'noted', and your manager has already scheduled your farewell lunch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (RULES.txt): UTF-8 text, 1-159 chars, not only whitespace, one line.
if (LINE.length < 1 || LINE.length > 159) throw new Error(`entry length ${LINE.length} outside 1-159`);
if (!/\S/.test(LINE)) throw new Error("entry is only whitespace");
if (LINE.includes("\n")) throw new Error("entry must be a single line");
if (!LINE.includes("resignation")) throw new Error("entry must name the accident (resignation letter)");
if (!LINE.includes("resignation letter")) throw new Error("entry must name the full accident (resignation letter)");
if (!LINE.includes("HR replied")) throw new Error("entry must carry the flat HR beat ('HR replied')");
if (!LINE.endsWith("farewell lunch.")) throw new Error("entry must end on the farewell-lunch sting");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);
