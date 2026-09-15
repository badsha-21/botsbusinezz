/*CMD
  command: /admin
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

// আপনার নিজের আইডি এখানে দিন
var my_id = "8356234388"; 

// সেভ করা অ্যাডমিন লিস্ট নেওয়া
var saved_admins = Bot.getProperty("admin_list") || "";
var admin_array = saved_admins.split(",");

// চেক করা হচ্ছে ইউজার কি অ্যাডমিন কি না
var is_admin = (user.telegramid == my_id) || admin_array.includes(user.telegramid.toString());

if (is_admin) {
  var buttons = [
    [{ text: "📣 Broadcast", callback_data: "/admin_bc" }, { text: "🔗 Send Link", callback_data: "/admin_send_link" }],
    [{ text: "SET QR CODE 🛡️", callback_data: "/set_qr" }, { text: "START MESSAGE 😍", callback_data: "/set_msg" }],
    [{ text: "PREMIUM DEMO 🥵", callback_data: "/set_demo" }, { text: "PREMIUM PROOF ✅", callback_data: "/set_proof" }],
    [{ text: "START IMAGE 📷", callback_data: "/set_image" }, { text: "QR MESSAGE 💬", callback_data: "/set_qr_msg" }],
    [{ text: "SET UPI ID 💳", callback_data: "/set_upi" }, { text: "SET PRICE 💰", callback_data: "/set_price" }],
    [{ text: "CHANGE ADMIN 🛠️", callback_data: "/change_admin" }],
    [{ text: "SET PVT CHANNEL 🔗", callback_data: "/set_pvt" }]
  ];

  Api.sendMessage({
    text: "🔐 **Access Granted**\n\n**WELCOME TO THE ADMIN PANEL 🎀**",
    reply_markup: { inline_keyboard: buttons },
    parse_mode: "Markdown"
  });
} else {
  Bot.sendMessage("Access Denied. ❌");
}
