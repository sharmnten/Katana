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
            event.preventDefault();  // Prevent the form from submitting in the default way

            const email = (document.getElementById('username') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;

            try {
                const session = await account.createEmailPasswordSession(email, password);
                alert("Login successful!");
                console.log('Logged in successfully:', session);
                const sessionId = session.$id;
                localStorage.setItem("session", sessionId);
                window.location.href = '/games/';
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
                alert(errorMessage);
                console.error('Login failed:', errorMessage);
            }
        });
    }
});

        
