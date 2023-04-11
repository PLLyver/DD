import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
 .setName('提供意見')
 .setDescription('對PL提供意見')

export const action = async (ctx) => {
   ctx.reply('你好!👋，請填寫https://forms.gle/sifq1fiW8VyqMusN7')
 }
