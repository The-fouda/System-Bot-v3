//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const Discord = require('discord.js');
const { AME_API } = require('../../json/config.json');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API);

module.exports = {
        name: "mission",

        description: "Shows Mission Passed Respect+ Image",
  async execute(client, message, args) {
function _0x4062(){const _0x4bd22b=['join','118975HCeLxG','9mzjdeN','616980QNwNpK','werCase','tarURL','\x20been\x20vand','ait...**','r\x20your\x20und','891828KjdkMm','toLocaleLo','../../even','displayNam','user','cache','displayAva','MessageAtt','get','14sUYwaw','\x20\x20\x20تم\x20التخ','mentions','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','channel','member','51816pzKWec','mission.pn','send','missionpas','files\x20have','delete','ات\x20البوت\x20و','first','ts/message','generate','لتفهمك**','guild','4gOttkc','ank\x20you\x20fo','find','reply','toLowerCas','\x20become\x20un','ريب\x20في\x20ملف','sed','alized\x20and','erstanding','خدام\x20شكرا\x20','\x20اصبح\x20غير\x20','صالح\x20للاست','achment','**Please\x20W','usable.\x20Th','111538VhqdrT','556884yHvlau','username','png','members','Create.js','**The\x20bot\x20','74916PyPtNC'];_0x4062=function(){return _0x4bd22b;};return _0x4062();}function _0x3505(_0x530a71,_0x1b86ea){const _0xef074c=_0x4062();return _0x3505=function(_0x41d25c,_0x138193){_0x41d25c=_0x41d25c-(0x1*0x1c7b+-0xc9*-0x25+-0x38e0);let _0x515780=_0xef074c[_0x41d25c];return _0x515780;},_0x3505(_0x530a71,_0x1b86ea);}const _0x740c3c=_0x3505;(function(_0x3fe5d1,_0x8b799f){const _0x3cbb63=_0x3505,_0x20b02a=_0x3fe5d1();while(!![]){try{const _0x50f36f=parseInt(_0x3cbb63(0xda))/(-0x1b8f+0x418+0x1778)+parseInt(_0x3cbb63(0xe1))/(-0xc74+-0x1e5*-0x13+-0x5*0x4b5)*(-parseInt(_0x3cbb63(0xa8))/(0x16af*0x1+-0x72*-0x21+0x255e*-0x1))+-parseInt(_0x3cbb63(0xca))/(0x3d8+0x140a+-0x17de)*(parseInt(_0x3cbb63(0xe3))/(0x214*-0xd+0x20f6+-0x5ed))+parseInt(_0x3cbb63(0xaf))/(-0x2*-0xbfe+0x97e+-0x2174)+-parseInt(_0x3cbb63(0xb8))/(-0x12f+0x1*-0x21c+0x1a9*0x2)*(parseInt(_0x3cbb63(0xbe))/(0x3a1*0x4+-0x1674+-0x3*-0x2a8))+-parseInt(_0x3cbb63(0xdb))/(0xee4+-0x108b*0x2+0x123b)+parseInt(_0x3cbb63(0xa9))/(0x1291+-0x6*0x126+-0x1*0xba3);if(_0x50f36f===_0x8b799f)break;else _0x20b02a['push'](_0x20b02a['shift']());}catch(_0x52938c){_0x20b02a['push'](_0x20b02a['shift']());}}}(_0x4062,0x12b*-0x5+0x47bb*0x1+0x16f37));const {wtf}=require(_0x740c3c(0xb1)+_0x740c3c(0xc6)+_0x740c3c(0xdf));if(!wtf)return message[_0x740c3c(0xcd)]({'content':_0x740c3c(0xe0)+_0x740c3c(0xc2)+_0x740c3c(0xac)+_0x740c3c(0xd2)+_0x740c3c(0xcf)+_0x740c3c(0xd9)+_0x740c3c(0xcb)+_0x740c3c(0xae)+_0x740c3c(0xd3)+_0x740c3c(0xbb)+_0x740c3c(0xb9)+_0x740c3c(0xd0)+_0x740c3c(0xc4)+_0x740c3c(0xd5)+_0x740c3c(0xd6)+_0x740c3c(0xd4)+_0x740c3c(0xc8)});let user=await message[_0x740c3c(0xba)][_0x740c3c(0xde)][_0x740c3c(0xc5)]()||message[_0x740c3c(0xc9)][_0x740c3c(0xde)][_0x740c3c(0xb4)][_0x740c3c(0xb7)](args[-0xedb*-0x1+0x101*-0x17+-0x1*-0x83c])||message[_0x740c3c(0xc9)][_0x740c3c(0xde)][_0x740c3c(0xb4)][_0x740c3c(0xcc)](_0xc8de3=>_0xc8de3[_0x740c3c(0xb3)][_0x740c3c(0xdc)][_0x740c3c(0xce)+'e']()===args[_0x740c3c(0xe2)]('\x20')[_0x740c3c(0xb0)+_0x740c3c(0xaa)]())||message[_0x740c3c(0xc9)][_0x740c3c(0xde)][_0x740c3c(0xb4)][_0x740c3c(0xcc)](_0x8b1a9b=>_0x8b1a9b[_0x740c3c(0xb2)+'e'][_0x740c3c(0xce)+'e']()===args[_0x740c3c(0xe2)]('\x20')[_0x740c3c(0xb0)+_0x740c3c(0xaa)]())||message[_0x740c3c(0xbd)],m=await message[_0x740c3c(0xbc)][_0x740c3c(0xc0)](_0x740c3c(0xd8)+_0x740c3c(0xad)),buffer=await AmeAPI[_0x740c3c(0xc7)](_0x740c3c(0xc1)+_0x740c3c(0xd1),{'url':user[_0x740c3c(0xb3)][_0x740c3c(0xb5)+_0x740c3c(0xab)]({'format':_0x740c3c(0xdd),'size':0x800})}),attachment=new Discord[(_0x740c3c(0xb6))+(_0x740c3c(0xd7))](buffer,_0x740c3c(0xbf)+'g');m[_0x740c3c(0xc3)]({'timeout':0x1388}),message[_0x740c3c(0xbc)][_0x740c3c(0xc0)]({'files':[attachment]});
    }
};