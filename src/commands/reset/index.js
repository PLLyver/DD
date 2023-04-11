import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
 .setName('reset')
 .setDescription('申請解封')

export const action = async (ctx) => {
   ctx.reply('你好!👋，請填寫https://forms.gle/YY31yNx7gVnqEGqY6')
 }
