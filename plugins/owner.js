function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '+91 60025 70722', 'TOM', m)
}
handler.help = ['rowner/rcreator']
handler.tags = ['info']

handler.command = /^(rowner|rcreator)$/i

module.exports = handler
