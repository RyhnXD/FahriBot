let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕──✧
├◇ Permanen
└────────────✧
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Dana : 6285713041886
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '🔥 Permanent', description: "Rp5.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '🔭 Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: '📌 Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
