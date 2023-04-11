import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
 .setName('sayping')
 .setDescription('說pingping')

export const action = async (ctx) => {
   ctx.reply('pingping')
 }
