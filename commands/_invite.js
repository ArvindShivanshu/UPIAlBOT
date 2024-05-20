/*CMD
  command: /invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var perref = "1" // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}

let invLink = RefLib.getRefLink(bot.name, "Bot")
Api.sendMessage({
  text:
    "<b>• Total Invite " +
    RefLib.getRefCount() +
    "/10 User(s) \n\n💌 Your Invite Link = " +
    invLink +
    "\n\n📝 Complete 10 Invite And Use Lifetime</b>",
  parse_mode: "html",
  disable_web_page_preview: true
})
