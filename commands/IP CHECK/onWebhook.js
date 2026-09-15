/*CMD
  command: onWebhook
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IP CHECK

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!content) { return; }
var data = JSON.parse(content);

if(!data.results){ return; }

var res = data.results;
var captcha = res.captcha;
var vpn = res.vpn;
var ip = res.ip;

if(User.getProperty("verify") == "ok"){ return; }

// VPN Block
if(vpn == "yes" || vpn == true){
  Bot.sendMessage("🚫 <b>Access Denied:</b> VPN/Proxy detected.");
  return;
}

// IP Security
var ip_short = ip.split(".").slice(0,3).join(".");
var ips = Bot.getProperty("ips", { list: {} });

if(ips.list[ip_short]){
  Bot.sendMessage("❌ <b>Security Alert:</b> Multiple accounts detected on this network.");
  return;
}

// Success Logic
if(captcha == "ok" || captcha == "success"){
  ips.list[ip_short] = user.id;
  Bot.setProperty("ips", ips, "json");
  User.setProperty("verify", "ok", "string");
  
  Bot.sendMessage("✅ <b>Verified Successfully!</b>");
  Bot.runCommand("lol");
  
  // Admin Notification to your ID: 7371674958
  Api.sendMessage({
    chat_id: 7371674958,
    text: "👤 <b>New User Verified:</b>\nID: <code>" + user.id + "</code>\nIP: <code>" + ip + "</code>",
    parse_mode: "html"
  });
}

