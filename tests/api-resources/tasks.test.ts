// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nestri from '@nestri/sdk';
import { Response } from 'node-fetch';

const client = new Nestri({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('create', async () => {
    const responsePromise = client.tasks.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tasks.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nestri.NotFoundError,
    );
  });

  test('retrieve', async () => {
    const responsePromise = client.tasks.retrieve('0bfcc712-df13-4454-81a8-fbee66eddca4');
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
      client.tasks.retrieve('0bfcc712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.tasks.update('0bfcc712-df13-4454-81a8-fbee66eddca4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tasks.update('0bfcc712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.tasks.list();
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
    await expect(client.tasks.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nestri.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.tasks.delete('0bfcc712-df13-4454-81a8-fbee66eddca4');
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
      client.tasks.delete('0bfcc712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });

  test('session', async () => {
    const responsePromise = client.tasks.session('0bfcc712-df13-4454-81a8-fbee66eddca4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('session: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tasks.session('0bfcc712-df13-4454-81a8-fbee66eddca4', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nestri.NotFoundError);
  });
});
