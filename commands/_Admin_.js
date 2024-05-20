/*CMD
  command: /Admin/
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: .

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var url = "https://api.projectoid.site/v1/telegram/botpanel/broadcast.php"
  var botID = bot.token.split(":")[0]
  var accessToken = "gYYBNhpHYmWbfkImYlmuB6CBPh4QDhTS"

  try {
    var msg = message
    function broadcast(type, method, cap, fileid) {
      HTTP.post({
        url: "https://api.projectoid.site/v1/telegram/botpanel/broadcast.php",
        headers: { "content-type": "application/json" },
        body: {
          method: method,
          text: cap,
          access_token: accessToken,
          bot_token: bot.token,
          admin: admin,
          type: type,
          file_id: fileid,
          caption: cap,
          parseMode: "html", //you can change it to Markdown
          disableWebPreview: true,
          protectContent: false //pass true if you don't  to forward/save message
        }
      })
    }
    var boarding = " <b><u>Broadcast By Admin</u></b> \n\n"
    var caption = !request.caption ? boarding : boarding + " " + request.caption

    if (request.photo[0]) {
      broadcast("photo", "sendPhoto", caption, request.photo[0].file_id)
      return
    }
    if (request.text) {
      broadcast(
        "text",
        "sendMessage",
        " <b><u>• </u></b> \n\n" + message,
        null
      )
      return
    }
    if (request.video) {
      broadcast("video", "sendVideo", caption, request.video.file_id)
      return
    }
    if (request.audio) {
      broadcast("audio", "sendAudio", caption, request.audio.file_id)
      return
    }
    if (request.document) {
      broadcast("document", "sendDocument", caption, request.document.file_id)
      return
    }
    if (request.sticker) {
      broadcast("sticker", "sendSticker", null, request.sticker.file_id)
      return
    }
    if (request.animation) {
      broadcast(
        "animation",
        "sendAnimation",
        caption,
        request.animation.file_id
      )
      return
    }
    if (request.voice) {
      broadcast("voice", "sendVoice", caption, request.voice.file_id)
      return
    }
    if (request.video_note) {
      broadcast("video_note", "sendVideo", caption, request.video_note.file_id)
      return
    }
  } catch (err) {
    Bot.sendMessage(
      err + "\n\n*Please Reach out @OTP_BOT_OWNER_BOT with Error Screenshot.*"
    )
  }
  return
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

