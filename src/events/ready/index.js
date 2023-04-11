import { Events,Activity } from "discord.js"

export const event = {
    name:Events.ClientReady,
    once:true
}

export const action = (c) => {
    console.log(`嗨嗨!${c.user.tag}已上線，蹦蹦炸彈`);
}