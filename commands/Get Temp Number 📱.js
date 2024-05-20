/*CMD
  command: Get Temp Number 📱
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

let rnd = Libs.Random.randomInt(7000056065, 9999999990); 
var button = [{title: "Get OTP 📬", command: "/otp"}]
Bot.sendInlineKeyboard(button,"*+91"+rnd+"*")
