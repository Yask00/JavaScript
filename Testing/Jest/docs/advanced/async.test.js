// user.js

import request from "./request";

export function getUserName(userID) {
  return request(`/users/${userID}`).then((user) => user.name);
}

// request.js
const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
// __mocks__/request.js
const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.slice("/users/".length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: `User with ${userID} not found.`,
          })
    );
  });
}

// __tests__/user-test.js
jest.mock('../request');
import * as user from '../user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toBe('Mark'));
});

// async/await can be used.
it('works with async/await', async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toBe('Mark');
  });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(user.getUserName(5)).resolves.toBe('Paul');
  });

  // Testing for async errors using Promise.catch.
it('tests error with promises', () => {
  expect.assertions(1);
  return user.getUserName(2).catch(error =>
    expect(error).toEqual({
      error: 'User with 2 not found.',
    }),
  );
});

// Or using async/await.
it('tests error with async/await', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (error) {
    expect(error).toEqual({
      error: 'User with 1 not found.',
    });
  }
});

