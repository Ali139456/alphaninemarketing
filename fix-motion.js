const fs = require("fs");
const path = require("path");

const OPEN_FROM = "<motion.div";
const OPEN_TO = "<motion.div".replace("motion.", "");
const CLOSE_FROM = "</motion.div>";
const CLOSE_TO = "</motion.div>".replace("motion.", "");

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.tsx$/.test(name)) {
      let c = fs.readFileSync(p, "utf8");
      if (!c.includes("motion.div")) continue;
      if (c.includes('from "framer-motion"')) continue;
      const orig = c;
      c = c.split(OPEN_FROM).join(OPEN_TO);
      c = c.split(CLOSE_FROM).join(CLOSE_TO);
      if (c !== orig) {
        fs.writeFileSync(p, c);
        console.log("fixed", p);
      }
    }
  }
}

walk("src");
