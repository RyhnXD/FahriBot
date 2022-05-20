let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *Online* 
Oke Kak Sekarang Bisa（ ・∀・）
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Fachri Di Sini')).buffer(), ext, 'FachriBotz Siap Membantu Kamu (*´ω｀*)', 'Siap Fachri', 'Iya', 'Hallo Fachri', 'Hallo Fachri', m)

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
