//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all//


const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
        name: "remove-role",
        description: `remove a role for a user.`,
  async execute(client, message, args) {
const _0x5f3674=_0x3456;(function(_0x20e085,_0x26d007){const _0x32082a=_0x3456,_0x2debab=_0x20e085();while(!![]){try{const _0x887937=parseInt(_0x32082a(0x1a7))/(0xe55+0xd81+0x3*-0x947)+parseInt(_0x32082a(0x1b8))/(-0x9d9*0x1+0xe53+-0x478)*(parseInt(_0x32082a(0x1bf))/(-0x20e*-0x1+-0x61*-0x35+-0x1d8*0xc))+parseInt(_0x32082a(0x1ba))/(-0xc5a+-0x194+0xdf2)+-parseInt(_0x32082a(0x1b0))/(0xc3d*0x1+0x14ee+-0x2126*0x1)+-parseInt(_0x32082a(0x1a1))/(0x9*0x3d5+0x1*-0x14c6+-0x2bd*0x5)+-parseInt(_0x32082a(0x188))/(0x147b*0x1+0xe2*0x15+-0x26fe)+parseInt(_0x32082a(0x1d0))/(-0x9d2*-0x2+0x85*-0x15+-0x8b3*0x1)*(parseInt(_0x32082a(0x1b7))/(0x2450+-0x2*-0x1143+0x19*-0x2d5));if(_0x887937===_0x26d007)break;else _0x2debab['push'](_0x2debab['shift']());}catch(_0x4f89f0){_0x2debab['push'](_0x2debab['shift']());}}}(_0x3c5e,0x4468d+-0x1*-0xf131b+-0x77cde));const {wtf}=require(_0x5f3674(0x1d3)+_0x5f3674(0x19c)+_0x5f3674(0x1af));if(!wtf)return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1ce)+_0x5f3674(0x1c2)+_0x5f3674(0x1aa)+_0x5f3674(0x174)+_0x5f3674(0x1d1)+_0x5f3674(0x1c9)+_0x5f3674(0x1a9)+_0x5f3674(0x1b3)+_0x5f3674(0x1d6)+_0x5f3674(0x197)+_0x5f3674(0x1bb)+_0x5f3674(0x1d4)+_0x5f3674(0x1cb)+_0x5f3674(0x1cc)+_0x5f3674(0x1b9)+_0x5f3674(0x179)+_0x5f3674(0x1ab)});const member=message[_0x5f3674(0x189)][_0x5f3674(0x182)][_0x5f3674(0x186)]()||message[_0x5f3674(0x181)][_0x5f3674(0x182)][_0x5f3674(0x1d9)][_0x5f3674(0x19d)](args[0x1360+0xea+-0x144a]),permission=message[_0x5f3674(0x1a0)][_0x5f3674(0x18e)+'s'][_0x5f3674(0x191)](_0x5f3674(0x178)+'ES'),guilds=message[_0x5f3674(0x181)]['me'][_0x5f3674(0x18e)+'s'][_0x5f3674(0x191)](_0x5f3674(0x178)+'ES');if(!permission)return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1c1)+_0x5f3674(0x170)+_0x5f3674(0x17b)+_0x5f3674(0x1ca)+_0x5f3674(0x172)+_0x5f3674(0x1c7),'ephemeral':!![]})[_0x5f3674(0x18a)](_0x204507=>{const _0x1901f0=_0x5f3674,_0x731ecd={'JVCvA':function(_0x2994ed,_0x520da4){return _0x2994ed+_0x520da4;}};console[_0x1901f0(0x1c0)](_0x731ecd[_0x1901f0(0x1bc)](_0x1901f0(0x17a)+_0x1901f0(0x19e)+_0x1901f0(0x17f)+_0x1901f0(0x1bd),_0x204507[_0x1901f0(0x1c6)]));});if(!args[0x21dc+-0x2704+0xdc*0x6])return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1a2)+_0x5f3674(0x1a3)+_0x5f3674(0x1c3)+_0x5f3674(0x1b5)+_0x5f3674(0x1da),'ephemeral':!![]})[_0x5f3674(0x18a)](_0x4b0ad6=>{const _0x3cd1a3=_0x5f3674,_0x3dd31b={'Zgkbm':function(_0x4a1c75,_0x3ee37b){return _0x4a1c75+_0x3ee37b;}};console[_0x3cd1a3(0x1c0)](_0x3dd31b[_0x3cd1a3(0x176)](_0x3cd1a3(0x17a)+_0x3cd1a3(0x19e)+_0x3cd1a3(0x17f)+_0x3cd1a3(0x1bd),_0x4b0ad6[_0x3cd1a3(0x1c6)]));});if(!member)return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1a2)+_0x5f3674(0x18b)+_0x5f3674(0x199)+_0x5f3674(0x1c5)+_0x5f3674(0x1d5),'ephemeral':!![]})[_0x5f3674(0x18a)](_0x76761e=>{const _0x43c6a3=_0x5f3674,_0x27be9c={'QblEK':function(_0x22f526,_0x5bdad0){return _0x22f526+_0x5bdad0;}};console[_0x43c6a3(0x1c0)](_0x27be9c[_0x43c6a3(0x18c)](_0x43c6a3(0x17a)+_0x43c6a3(0x19e)+_0x43c6a3(0x17f)+_0x43c6a3(0x1bd),_0x76761e[_0x43c6a3(0x1c6)]));});function _0x3456(_0x49ae62,_0x8005c1){const _0x3883f5=_0x3c5e();return _0x3456=function(_0x35bdee,_0x57d3e0){_0x35bdee=_0x35bdee-(0x1*0x1487+-0x1cef+0x9d8);let _0x21e01a=_0x3883f5[_0x35bdee];return _0x21e01a;},_0x3456(_0x49ae62,_0x8005c1);}if(message[_0x5f3674(0x1a0)][_0x5f3674(0x1ad)][_0x5f3674(0x177)][_0x5f3674(0x1ae)]<member[_0x5f3674(0x1ad)][_0x5f3674(0x177)][_0x5f3674(0x1ae)])return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1a2)+_0x5f3674(0x1c8)+_0x5f3674(0x1a4)+_0x5f3674(0x198)+member[_0x5f3674(0x195)][_0x5f3674(0x18d)]+(_0x5f3674(0x1b1)+_0x5f3674(0x1a5)+_0x5f3674(0x175)),'ephemeral':!![]})[_0x5f3674(0x18a)](_0x3c08d0=>{const _0x118dcc=_0x5f3674,_0x436c6f={'vuEmq':function(_0x1dbb75,_0x39ae0f){return _0x1dbb75+_0x39ae0f;}};console[_0x118dcc(0x1c0)](_0x436c6f[_0x118dcc(0x19f)](_0x118dcc(0x17a)+_0x118dcc(0x19e)+_0x118dcc(0x17f)+_0x118dcc(0x1bd),_0x3c08d0[_0x118dcc(0x1c6)]));});if(!guilds)return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1a2)+_0x5f3674(0x18b)+_0x5f3674(0x17e)+_0x5f3674(0x1b2)+_0x5f3674(0x193)+_0x5f3674(0x1c4)+_0x5f3674(0x18e)+_0x5f3674(0x1d2)+_0x5f3674(0x1a6)+'**','ephemeral':!![]})[_0x5f3674(0x18a)](_0x3cef8b=>{const _0x526f9c=_0x5f3674,_0x36e660={'wqIUj':function(_0x30ec60,_0x3e5ad9){return _0x30ec60+_0x3e5ad9;}};console[_0x526f9c(0x1c0)](_0x36e660[_0x526f9c(0x180)](_0x526f9c(0x17a)+_0x526f9c(0x19e)+_0x526f9c(0x17f)+_0x526f9c(0x1bd),_0x3cef8b[_0x526f9c(0x1c6)]));});let role=message[_0x5f3674(0x189)][_0x5f3674(0x1ad)][_0x5f3674(0x186)]()||message[_0x5f3674(0x181)][_0x5f3674(0x1ad)][_0x5f3674(0x1d9)][_0x5f3674(0x18f)](_0x5644e1=>_0x5644e1[_0x5f3674(0x185)][_0x5f3674(0x1d8)+_0x5f3674(0x194)]()[_0x5f3674(0x183)](args[0x1*0x6c3+-0x8*-0x2e3+0x1*-0x1dda]))||message[_0x5f3674(0x181)][_0x5f3674(0x1ad)][_0x5f3674(0x1d9)][_0x5f3674(0x19d)](args[-0x377*-0x1+-0xad*-0xb+-0x1*0xae5]);if(!role)return message[_0x5f3674(0x1cf)]({'content':_0x5f3674(0x1a2)+_0x5f3674(0x1be)+_0x5f3674(0x1d7)+_0x5f3674(0x190)+_0x5f3674(0x17d)+'*','ephemeral':!![]})[_0x5f3674(0x18a)](_0x3114b7=>{const _0x5b81ff=_0x5f3674,_0x43a1e2={'rcStx':function(_0x154679,_0x320cdf){return _0x154679+_0x320cdf;}};console[_0x5b81ff(0x1c0)](_0x43a1e2[_0x5b81ff(0x196)](_0x5b81ff(0x17a)+_0x5b81ff(0x19e)+_0x5b81ff(0x17f)+_0x5b81ff(0x1bd),_0x3114b7[_0x5b81ff(0x1c6)]));});if(!member[_0x5f3674(0x1ad)][_0x5f3674(0x1d9)][_0x5f3674(0x191)](role['id'])){member[_0x5f3674(0x1ad)][_0x5f3674(0x184)](role['id']);let embed=new MessageEmbed()[_0x5f3674(0x19b)+_0x5f3674(0x19a)](_0x5f3674(0x1a8)+_0x5f3674(0x1b4)+_0x5f3674(0x1b6)+_0x5f3674(0x192)+member[_0x5f3674(0x195)][_0x5f3674(0x18d)]+_0x5f3674(0x1cd)+role[_0x5f3674(0x185)]+'**')[_0x5f3674(0x187)](message[_0x5f3674(0x181)]['me'][_0x5f3674(0x173)+_0x5f3674(0x171)]);message[_0x5f3674(0x1cf)]({'embeds':[embed]})[_0x5f3674(0x18a)](_0x474668=>{const _0x4fbeed=_0x5f3674,_0x1d0b7b={'VLfRv':function(_0x494381,_0x235b9a){return _0x494381+_0x235b9a;}};console[_0x4fbeed(0x1c0)](_0x1d0b7b[_0x4fbeed(0x17c)](_0x4fbeed(0x17a)+_0x4fbeed(0x19e)+_0x4fbeed(0x17f)+_0x4fbeed(0x1bd),_0x474668[_0x4fbeed(0x1c6)]));});}else{member[_0x5f3674(0x1ad)][_0x5f3674(0x184)](role['id']);let embed=new MessageEmbed()[_0x5f3674(0x19b)+_0x5f3674(0x19a)](_0x5f3674(0x1a8)+_0x5f3674(0x1b4)+_0x5f3674(0x1b6)+_0x5f3674(0x192)+member[_0x5f3674(0x195)][_0x5f3674(0x18d)]+_0x5f3674(0x1cd)+role[_0x5f3674(0x185)]+'**')[_0x5f3674(0x187)](message[_0x5f3674(0x181)]['me'][_0x5f3674(0x173)+_0x5f3674(0x171)]);message[_0x5f3674(0x1cf)]({'embeds':[embed]})[_0x5f3674(0x18a)](_0x4a089e=>{const _0x524335=_0x5f3674,_0x16a512={'JTKGI':function(_0x39b52c,_0x4232ec){return _0x39b52c+_0x4232ec;}};console[_0x524335(0x1c0)](_0x16a512[_0x524335(0x1ac)](_0x524335(0x17a)+_0x524335(0x19e)+_0x524335(0x17f)+_0x524335(0x1bd),_0x4a089e[_0x524335(0x1c6)]));});}function _0x3c5e(){const _0x315b38=['highest','MANAGE_ROL','خدام\x20شكرا\x20','i\x20couldn\x27t','\x20permissio','VLfRv','ole\x20name\x20*','ouldn\x27t\x20mu','the\x20messag','wqIUj','guild','members','includes','remove','name','first','setColor','5132862sHmVPw','mentions','catch','yes:\x20**I\x20c','QblEK','username','permission','find','cify\x20one\x20r','has','es\x20','er.\x20Please','werCase','user','rcStx','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','ove\x20role\x20','an\x27t\x20find\x20','tion','setDescrip','ts/message','get','\x20reply\x20to\x20','vuEmq','member','6335322Ijgmym',':rolling_e','yes:\x20**Ple','\x20can\x27t\x20rem','er\x20role\x20th','\x20position.','885399bMDZts',':white_che','ank\x20you\x20fo','\x20been\x20vand','لتفهمك**','JTKGI','roles','position','Create.js','7157175xEmMWA','\x20have\x20high','te\x20that\x20us','r\x20your\x20und','ck_mark:\x20C','n\x20member\x20o','hanged\x20rol','36pnleSy','2374026irMutA','صالح\x20للاست','5562568JNWUXR','\x20\x20\x20تم\x20التخ','JVCvA','e:\x20','yes:\x20-\x20**\x20','3lfxbMX','log',':x:\x20**You\x20','files\x20have','ase\x20mentio','\x20check\x20my\x20','this\x20membe','message','d**','yes:\x20**You','usable.\x20Th','n\x20to\x20use\x20t','ات\x20البوت\x20و','\x20اصبح\x20غير\x20',',\x20-\x20**','**The\x20bot\x20','reply','1069904IQafil','\x20become\x20un','s\x20and\x20role','../../even','ريب\x20في\x20ملف','r**','erstanding','Please\x20spe','toLocaleLo','cache','r\x20id**','don\x27t\x20have','Color','his\x20comman','displayHex','alized\x20and','an\x20you**','Zgkbm'];_0x3c5e=function(){return _0x315b38;};return _0x3c5e();}
    },
};