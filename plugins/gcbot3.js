let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/GfwblXDHAqF4iA27wk8Gf4

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'FachriBotz#3')).buffer(), ext, '🎮 Created By Fachri', 'Siap Fachri', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot3']
handler.tags = ['main']
handler.command = /^(gcbot3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
