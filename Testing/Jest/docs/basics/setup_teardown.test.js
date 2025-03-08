const initializeDB = () => {}
const clearDB = () => {}
const isCity = () => true;

beforeEach(() => {
  initializeDB();
});

afterEach(() => {
  clearDB();
});

beforeAll(() => {
  return clearDB();
});

afterAll(() => {
  return initializeDB();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeDB();
  });
  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });

//   test("Vienna <3 veal", () => {
//     expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
//   });

//   test("San Juan <3 plantains", () => {
//     expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
//   });
});
