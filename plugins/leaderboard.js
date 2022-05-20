let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.db.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedatm = Object.entries(global.db.data.users).sort((a, b) => b[1].atm - a[1].atm)
  let sortedlimit = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedLim = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
  let sortedrole = Object.entries(global.db.data.users).sort((a, b) => b[1].role - a[1].role)
  let sortedtprem = Object.entries(global.db.data.users).sort((a, b) => b[1].tprem - a[1].tprem)
  let sortedglimit = Object.entries(global.db.data.users).sort((a, b) => b[1].tigame - a[1].tigame)
  let usersexp = sortedExp.map(v => v[0])
  let userstprem = sortedtprem.map(v => v[0])
  let usersglimit = sortedglimit.map(v => v[0])
  let userslimit = sortedlimit.map(v => v[0])
  let usersrole = sortedrole.map(v => v[0])
  let usersatm = sortedatm.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(30, sortedExp.length)
    let text = `
┌〔 *Level Leaderboard Top ${len}* 〕
├Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
│
├${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.level + ' Lvl*').join`\n├`}
└────

┌〔 *Money Leaderboard Top ${len}* 〕
├Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
│
├${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.money + ' Money*').join`\n├`}
└────
┌〔 *Leaderboard Limit Top ${len}* 〕
├Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
│
├${sortedlimit.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.limit + ' Limit*').join`\n├`}
└────
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...userslevel.slice(0, len), ...usersmoney.slice(0, len)]
    }
  })
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
