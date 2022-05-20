let handler = function (m) {
	this.sendContact(m.chat, '6285713041886', 'Owner Fachri :)', m)
}

handler.customPrefix = ['🍭Owner FachriBotz'] 
handler.command = new RegExp

module.exports = handler
