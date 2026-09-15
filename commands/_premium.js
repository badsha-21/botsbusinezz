/*CMD
  command: /premium
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

if(request.data){
  Api.deleteMessage({ chat_id: request.message.chat.id, message_id: request.message.message_id });
}

var buttons = [
  [{ text: "INDIAN DESI PLAN - ₹56", callback_data: "/buy_plan 56" }],
  [{ text: "R@PE VIDEOS PLAN - ₹149", callback_data: "/buy_plan 149" }],
  [{ text: "INDIAN CP PLAN - ₹249", callback_data: "/buy_plan 249" }], 
  [{ text: "❌ CANCEL", callback_data: "/cancel_actionn" }]
];

Api.sendMessage({
  text: "💎 *ALL OUR PREMIUM PLANS WE GIVEN BELOW*💎\n\n *TAKE YOUR FAVORITE PLAN FROM BELOW LIST📄*\n\n*WE OFFERED OUR BEST PLANS HERE*\n👇👇👇👇👇👇👇👇👇👇👇👇",
  reply_markup: { inline_keyboard: buttons },
  parse_mode: "Markdown"
});
