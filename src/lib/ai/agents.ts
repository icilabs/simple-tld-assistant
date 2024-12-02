import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatMessageHistory } from "langchain/stores/message/in_memory";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { createOpenAIFunctionsAgent, AgentExecutor } from "langchain/agents";
import {pull} from "langchain/hub";

import { tools } from "./tools";

dotenv.config();

const llm = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.GPT_MODEL,
    temperature: 0.2,
});

const session_store = new Map();

function getMessageHistory(sessionId: string) {
    if (!session_store.has(sessionId)) {
        session_store.set(sessionId, new ChatMessageHistory());
    }
    return session_store.get(sessionId);
}

const prompt: ChatPromptTemplate<any, any> = await pull("hwchase17/openai-functions-agent");
let p = prompt.promptMessages[0];

p.prompt.template = `You are an AI assistant specialized in domain names. 
You only respond to domain-related questions. Domain related questions include those about domain name suggestions, WHOIS details, domain availability, nameservers, general knowledge about domain names, and advice on registrars, gTLDs, and ccTLDs.
When generating domain names, you should consider the following: make the domains as short as possible, avoid hyphens, avoid numbers, and avoid special characters; always provide the reasoning behind your suggestions.
It is essential that you never check or generate more than 5 domain names at a time.`;

const agent = await createOpenAIFunctionsAgent({
    llm,
    tools,
    prompt,
});

const agentExecutor = new AgentExecutor({
    agent,
    tools,
    verbose: process.env.LOG_LEVEL === 'debug' ? true : false,
});

const agentWithChatHistory = new RunnableWithMessageHistory({
    runnable: agentExecutor,
    getMessageHistory: getMessageHistory,
    inputMessagesKey: "input",
    historyMessagesKey: "chat_history",
  });

export { agentWithChatHistory };


