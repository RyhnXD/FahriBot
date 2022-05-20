let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Hallohaori.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Kak* \n *Gimana Kabar Nya Kak? ><.*', 'status@broadcast')
}

handler.customPrefix = /^(Hallo Fachri|Hallo fachri|hi fachri|Hi Fachri)$/i
handler.command = new RegExp

module.exports = handler
