import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5fca4f87d48c2') // Your project ID

const account = new Account(client);




document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {

            const email = (document.getElementById('username') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;

            try {
                const session = await account.createEmailPasswordSession(email, password);
                alert("success")
                console.log('Logged in successfully:', session);
                const sessionId = session.$id
                localStorage.setItem("session",sessionId)
                window.location.href = '/games/';
            } catch (error) {
                alert(error)
                console.error('Login failed:', error);
            }
        });
    }
});
        