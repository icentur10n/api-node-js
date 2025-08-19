import { test, expect } from '@playwright/test';
import { StatusCodes } from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('find user: should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(StatusCodes.OK);
    });
    test('create user: should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseCreate.body()).toBeDefined();
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseDelete = await request.delete(`${baseURL}/${responseBody.id}`);
        expect(responseDelete.status()).toBe(StatusCodes.OK);
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
