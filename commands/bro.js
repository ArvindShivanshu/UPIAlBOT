/*CMD
  command: bro
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

var msg = Bot.getProperty("adminBroadcast")
Bot.sendMessage("*"+msg+"*")
