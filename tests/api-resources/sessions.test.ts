// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nestri from '@nestri/sdk';
import { Response } from 'node-fetch';

const client = new Nestri({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sessions.create('id', {
      fingerprint: 'fc27f428f9ca47d4b41b70889ae0c62090',
      name: 'Late night chilling with the squad',
      public: true,
      steamID: 870780,
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
    const response = await client.sessions.create('id', {
      fingerprint: 'fc27f428f9ca47d4b41b70889ae0c62090',
      name: 'Late night chilling with the squad',
      public: true,
      steamID: 870780,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sessions.retrieve('0bfcb712-df13-4454-81a8-fbee66eddca4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.retrieve('0bfcb712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sessions.list();
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
    await expect(client.sessions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nestri.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.sessions.delete('0bfcb712-df13-4454-81a8-fbee66eddca4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.delete('0bfcb712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });
});
