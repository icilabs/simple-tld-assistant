import {agentWithChatHistory} from '$lib/ai/agents';

import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from './$types';


const chatFilePath = path.join(process.cwd(), 'chat_messages.json');

function loadChatMessages() {
    if (fs.existsSync(chatFilePath)) {
        const data = fs.readFileSync(chatFilePath, 'utf-8');
        return new Map(JSON.parse(data));
    }
    return new Map();
}

function saveChatMessages() {
    const chatArray = [...chat_messages.entries()];
    if (chatArray.length > 20) {
        const recentChats = chatArray.slice(-20);
        fs.writeFileSync(chatFilePath, JSON.stringify(recentChats), 'utf-8');
    } else {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatArray), 'utf-8');
    }
}

const chat_messages = loadChatMessages();

process.on('exit', saveChatMessages);
process.on('SIGINT', () => {
    saveChatMessages();
    process.exit();
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let id = cookies.get('chat_id');

    if (!id) {
		id = crypto.randomUUID();
		cookies.set('chat_id', id, { path: '/' });
	}

    const messages = chat_messages.get(id);
    return { messages };
}


/** @type {import('./$types').Actions} */

export const actions = {

    chat: async ({ cookies, request }) => {
        const data = await request.formData();
        const prompt = data.get('prompt');

        let id = cookies.get('chat_id');

        if (!id) {
            id = crypto.randomUUID();
            cookies.set('chat_id', id, { path: '/', maxAge: 86400 });
        }

        const response = await agentWithChatHistory.invoke(
            {
              input:prompt,
            },
            {
              configurable: {
                sessionId: id,
              },
            }
          );

        let user_chat = chat_messages.get(id);
        if (!user_chat) {
            user_chat = [];
        }

        user_chat.push({role: 'user', content: prompt});
        user_chat.push({role: 'assistant', content: response.output});

        chat_messages.set(id, user_chat);

        return;
    },

    clear_chat: async ({ cookies }) => {
        let id = cookies.get('chat_id');
        chat_messages.delete(id);
        return;
    }
    

};