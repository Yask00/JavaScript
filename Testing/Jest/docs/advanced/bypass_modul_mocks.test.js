// However, sometimes you may want to use parts of a mocked module in your test file, in which case you want to access the original implementation, rather than a mocked version.
jest.mock('node-fetch');

jest.mock('node-fetch');
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch'); // !!!!!

test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('4')));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});