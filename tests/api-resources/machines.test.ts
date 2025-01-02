// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NestriSDK from 'nestri-sdk';
import { Response } from 'node-fetch';

const client = new NestriSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource machines', () => {
  test('create: only required params', async () => {
    const responsePromise = client.machines.create({
      fingerprint: '183ded44-24d0-480e-9908-c022eff8d111',
      hostname: 'DESKTOP-EUO8VSF',
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
    const response = await client.machines.create({
      fingerprint: '183ded44-24d0-480e-9908-c022eff8d111',
      hostname: 'DESKTOP-EUO8VSF',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.machines.retrieve('mchn_XXXXXXXXXXXXXXXXXXXXXXXXX');
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
      client.machines.retrieve('mchn_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NestriSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.machines.list();
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
    await expect(client.machines.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      NestriSDK.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.machines.delete('mchn_XXXXXXXXXXXXXXXXXXXXXXXXX');
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
      client.machines.delete('mchn_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NestriSDK.NotFoundError);
  });
});
