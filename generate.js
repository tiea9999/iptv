import axios from "axios";
import fs from "fs";

const BASE = "https://embed.bananacake.org/dooball66v2/ajax_channels.php?api_key=hmcb4rf66f";

const WORKER = "https://sparkling-river-40f9.tawatchai250958.workers.dev/?url=";

async function main() {
  const res = await axios.get(BASE);

  const regex = /loadPlayer\('([^']+)'\)/g;
  const ids = [...res.data.matchAll(regex)].map(m => m[1]);

  let m3u = "#EXTM3U\n";

  for (const id of ids) {
    const url = `https://love.tivov68423.workers.dev/lx-origin/${id}_720/chunks.m3u8`;

    m3u += `#EXTINF:-1 group-title="Dooball",${id}\n`;
    m3u += `${WORKER}${url}\n`;
  }

  fs.writeFileSync("playlist.m3u", m3u);
}

main();
