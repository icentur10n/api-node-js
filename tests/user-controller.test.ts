// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('find user: should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(201);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(200);
    });

    test('find user: should return 404 if user not found', async ({ request }) => {
        const responseGet = await request.get(`${baseURL}/100`);
        expect(responseGet.status()).toBe(404);
    });

    test('create user: should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect.soft(responseCreate.status()).toBe(201);
        expect.soft(responseCreate.body()).toBeDefined();
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(201);
        const responseDelete = await request.delete(`${baseURL}/${responseBody.id}`);
        expect(responseDelete.status()).toBe(200);
    });

    test('delete user: should return 404 if user not found', async ({ request }) => {
        const responseDelete = await request.delete(`${baseURL}/10000`);
        expect(responseDelete.status()).toBe(404);
    });

    test('Return all fields', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect.soft(responseBody.id).toBeDefined();
        expect.soft(responseBody.name).toBeDefined();
        expect.soft(responseBody.email).toBeDefined();
        expect.soft(responseBody.phone).toBeDefined();
    });


});
