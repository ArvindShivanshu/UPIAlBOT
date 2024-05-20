/*CMD
  command: /broadddd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Message 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == "5490641760"){

  Bot.setProperty("adminBroadcast", message)
  Bot.runAll({
    command: "bro"
  })
  Bot.sendMessage("✅Message sent to all active members")
} else {
Bot.sendMessage("❌ You are not allowed to use this")
}
