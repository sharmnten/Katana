import { Account, Client } from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5fca4f87d48c2') // Your project ID
const account = new Account(client);


