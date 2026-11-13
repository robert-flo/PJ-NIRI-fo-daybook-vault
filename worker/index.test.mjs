import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from './index.js';

const request = (path) => new Request(`https://daybook.example.com${path}`);
const assets = (body, headers = {}) => ({ fetch: async () => new Response(body, { status: 404, headers }) });

test('the site lands on the English edition', async () => {
  const response = await worker.fetch(request('/'), { ASSETS: assets('home') }, {});
  assert.equal(response.status, 302, await response.clone().text());
  assert.equal(response.headers.get('Location'), 'https://daybook.example.com/en_US/');
});

test('index.html lands on the English edition too', async () => {
  const response = await worker.fetch(request('/index.html'), { ASSETS: assets('home') }, {});
  assert.equal(response.status, 302);
  assert.equal(new URL(response.headers.get('Location'), 'https://daybook.example.com').pathname, '/en_US/');
});

test('the English edition keeps its own path', async () => {
  const response = await worker.fetch(request('/en_US/'), { ASSETS: assets('home') }, {});
  assert.equal(response.status, 404, 'must reach assets, not redirect');
  assert.equal(response.headers.get('Location'), null);
});
