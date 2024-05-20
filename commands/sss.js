/*CMD
  command: sss
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*✳Bot Sent!\n\n🖨Email : " +
    message +
    "\n\nℹ️ Join: @Unknown_Reason For More*"
)
