import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك قناة المطور',
      body: 'Lona Bot',
      previewType: 0, thumbnail: fs.readFileSync('./Menu.jpg'),
      sourceUrl: `https://whatsapp.com/channel/0029VadTAXd9xVJXSkaqtQ2X`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;