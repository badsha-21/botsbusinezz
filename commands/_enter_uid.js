/*CMD
  command: /enter_uid
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

Api.answerCallbackQuery({ callback_query_id: request.id });

var args = params.split(" ");
var amount = args[0];
var packName = args[1].replace("_", " ");

// Store selected item details in temporary variables
User.setProperty("selected_pack", packName, "string");
User.setProperty("selected_amount", amount, "string");

// Enable wait for reply to get Player ID
Bot.run({
  command: "/process_checkout",
  options: { pack: packName, price: amount }
});

Bot.sendMessage("🎮 *ENTER YOUR FREE FIRE PLAYER ID (UID)*\n\nPlease reply with your numerical Player ID (e.g., `1234567890`):");
