// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nestri from '@nestri/sdk';
import { Response } from 'node-fetch';

const client = new Nestri({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  test('create: only required params', async () => {
    const responsePromise = client.teams.create({ name: "Jane Doe's Games", slug: 'jane-does-games' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.teams.create({ name: "Jane Doe's Games", slug: 'jane-does-games' });
  });

  test('retrieve', async () => {
    const responsePromise = client.teams.retrieve('jane-does-games');
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
      client.teams.retrieve('jane-does-games', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.teams.list();
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
    await expect(client.teams.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nestri.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.teams.delete('jane-does-games');
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
      client.teams.delete('jane-does-games', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('invite', async () => {
    const responsePromise = client.teams.invite('jane-does-games', 'john@example.com');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('invite: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.teams.invite('jane-does-games', 'john@example.com', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });
});
