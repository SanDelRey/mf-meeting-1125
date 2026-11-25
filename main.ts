import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// one joke, one meeting, one email that should have been
const line = 'Forty minutes to agree it should have been an email, then five to book the meeting where we write it.';
const out = (process.env.MAKEFUN_OUTPUT_DIR || '/output').replace(/\/+$/, '');

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
