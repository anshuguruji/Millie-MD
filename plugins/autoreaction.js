
let handler = async(m, { usedPrefix,command,conn, text }) => {
try{
conn.sendMessage(m.chat, {
        react: {
        text: `${pickRandom(['😈', '🥵', '😱', '🐦', '🎈','😎','😜','🤣','👀','😗','😑','😯','😛','🧐','😲','🤓','💃','🕺','🐤','🗿','🤨','🥴','👍','😔', '🚶‍♂','👎'])}`,
        key: m.key,
        }})
  
}
    
  catch(e){
  m.reply(`${e}`)
    conn.reply('120363022211098165@g.us',`𝗨𝗵𝗼𝗵! 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿 𝗢𝗰𝗰𝘂𝗿𝗲𝗱 
  
  𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}
  
    𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}
    
    𝗣𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗥𝗲𝗮𝘀𝗼𝗻𝘀 :
       • 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗨𝘀𝗮𝗴𝗲 𝗢𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
       • 𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿
       • 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗘𝗿𝗿𝗼𝗿𝘀
       • 𝗘𝗿𝗿𝗼𝗿 𝗮𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿𝘀 𝗘𝗻𝗱
       • 𝗗𝗮𝘁𝗮 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗜𝘀𝘀𝘂𝗲𝘀 `, null, {})
  }}
  handler.customPrefix = /(sad|oh|idk|poda|eda|ni|njn|go|kundan|myr|shit|ehh|hmm|aah|ok|nop|no|way)$/i
  handler.command = new RegExp
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }