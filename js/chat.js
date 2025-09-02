import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
const init = () => {
    createChat({
        webhookUrl: 'http://localhost:5678/webhook/d7479acd-288d-431a-a947-645401b2c73f/chat',
        webhookConfig: {
            method: 'POST',
            headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
            'Hi there! 👋',
            'I am an AI programmed with the official MTG rules, designed to answer questions and resolve disputes. How can I assist you today?'
        ],
        i18n: {
            en: {
                title: 'MTG Rules and Judge Chatbot',
                subtitle: "Please state your question, and I'll do my best to assist you.",
                footer: '',
                getStarted: 'New Conversation',
                inputPlaceholder: 'Type your question..',
            },
        },
        enableStreaming: false,
    });
}

init();