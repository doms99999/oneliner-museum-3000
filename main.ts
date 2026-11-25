import * as fs from "node:fs";

const LINE =
  "Fire extinguisher. Kept in every kitchen, never opened, believed to ward off fire by its mere presence.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
