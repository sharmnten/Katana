import { Account, Client } from '../node_modules/appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5fca4f87d48c2') // Your project ID

const account = new Account(client);

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {

            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const session = await account.createEmailPasswordSession(email, password);
                alert("success")
                console.log('Logged in successfully:', session);
                const sessionId = session.$id;
                localStorage.setItem("session", sessionId);
                window.location.href = '/games/';
            } catch (error) {
                alert(error)
                console.error('Login failed:', error);
            }
        });
    }
});

        
