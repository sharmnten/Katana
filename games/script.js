import { Account, Client } from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5fca4f87d48c2') // Your project ID
const account = new Account(client);
document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    try {
        let sessionId = localStorage.getItem("session");
        //const session = account.getSession(sessionId);
    } catch (error) {
        console.error('Session not found:', error);
        window.location.href = 'Katana/login';
    }
});
