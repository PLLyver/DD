import { Client, Events, GatewayIntentBits,Message,Discord,ActivityType} from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import { useAppStore } from '@/store/app'

import { loadCommands, loadEvents } from '@/core/loader.js'

vueInit()
dotenv.config()

loadCommands()

const client = new Client({ intents: [GatewayIntentBits.Guilds,
   GatewayIntentBits.GuildMessages, 
   GatewayIntentBits.MessageContent,
  ] });
const appStore = useAppStore()
appStore.client = client

loadEvents()

client.on(Events.MessageCreate, message => {
    if(message.author.bot)return;
    if(message.content === 'hi') {
      message.reply('你好!👋')
    };
    if(message.content === 'Hi') {
      message.reply('你好!👋')
    };
    if(message.content === 'hello') {
      message.reply('hello!')
    };
    if(message.content === 'Hello') {
      message.reply('hello!')
    };
    if(message.content === 'DD') {
      message.reply('我是DD有甚麼事嗎?')
    };
  if(message.content === 'PL') {
    message.reply('嗯?叫我主人嗎?我主人日後會把我開發出/adminmsg請期待。')
    };
});

client.login(process.env.TOKEN)
