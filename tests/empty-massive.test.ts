import { test, expect } from '@playwright/test';
import { StatusCodes } from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test('find user: should return 404 if user not found', async ({ request }) => {
    const responseGet = await request.get(`${baseURL}/100`);
    expect(responseGet.status()).toBe(StatusCodes.NOT_FOUND);
});

test('delete user: should return 404 if user not found', async ({ request }) => {
    const responseDelete = await request.delete(`${baseURL}/10000`);
    expect(responseDelete.status()).toBe(StatusCodes.NOT_FOUND);
});
