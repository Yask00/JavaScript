const fetchData = () => {
  return Promise.resolve("peanut butter");
};
const fetchDataErr = () => {
  return Promise.reject("error");
};
const fetchDataCb = (cb) => {
    const error = null;
    const data = 'peanut butter';
    cb(error, data);
};

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1); // Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.
  try {
    await fetchDataErr();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchDataErr()).rejects.toMatch("error");
});

// callbacks
test("the data is peanut butter", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchDataCb(callback);
});