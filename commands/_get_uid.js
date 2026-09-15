/*CMD
  command: /get_uid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!message) return;

var playerUid = message.trim();

// Regex Check: Must contain ONLY numbers and be between 8 and 11 digits long
if (!/^\d{8,11}$/.test(playerUid)) {
  Bot.sendMessage("❌ *INVALID PLAYER ID*\n\nFree Fire UIDs contain only numbers (8 to 11 digits).\n\nPlease reply directly with a valid numeric UID:");
  // Re-run this command to wait for valid input
  Bot.run({ command: "/get_uid" });
  return;
}

User.setProperty("player_uid", playerUid, "string");
Bot.sendMessage("🔍 *Fetching profile from Garena servers... Please wait.*");

// Call free lookup API
var apiUrl = "https://free-fire-api-lookup.vercel.app/api/ff?uid=" + playerUid;

HTTP.get({
  url: apiUrl,
  success: "/on_uid_found",
  error: "/on_uid_error"
});
