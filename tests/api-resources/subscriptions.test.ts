// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nestri from '@nestri/sdk';
import { Response } from 'node-fetch';

const client = new Nestri({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.subscriptions.create({
      id: '0bfcb712-df13-4454-81a8-fbee66eddca4',
      frequency: 'fixed',
      next: '2025-01-09T01:56:23.902Z',
      productID: '0bfcb712-df43-4454-81a8-fbee66eddca4',
      quantity: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.subscriptions.create({
      id: '0bfcb712-df13-4454-81a8-fbee66eddca4',
      frequency: 'fixed',
      next: '2025-01-09T01:56:23.902Z',
      productID: '0bfcb712-df43-4454-81a8-fbee66eddca4',
      quantity: 1,
      canceledAt: '2025-02-09T01:56:23.902Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.subscriptions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.subscriptions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nestri.NotFoundError,
    );
  });
});
