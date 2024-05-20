/*CMD
  command: /adminPanel
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

var admin = 5490641760
var userID = user.telegramid
var botLink = "@" + bot.name

if (userID === admin) {
  var adminName = user.first_name
  var text =
    "<b>👋 Hello " +
    adminName +
    ", welcome to the admin panel of " +
    botLink +
    ".</b>"
  var maintenanceStatus = Bot.getProperty("maintenanceStatus")
  var api = Bot.getProperty("api")
  var buttons = [
   
    [
   
      {
        text: "📢 Broadcast",
        callback_data: "/Admin/"
      }
    ],
   
  ]

  Api.sendMessage({
    text: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

