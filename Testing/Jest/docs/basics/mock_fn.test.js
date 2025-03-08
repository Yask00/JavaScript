// There are two ways to mock functions: Either by creating a mock function (.mock) to use in test code, or writing a manual mock to override a module dependency.

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock callback', () => {
    forEach([0, 1,], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});

// .mock 
// const myMock1 = jest.fn();
// const a = new myMock1();
// console.log(myMock1.mock.instances);
// > [ <a> ]

// const myMock2 = jest.fn();
// const b = {};
// const bound = myMock2.bind(b);
// bound();
// console.log(myMock2.mock.contexts);
// > [ <b> ]

// const myMock = jest.fn();
// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true

// const filterTestFn = jest.fn();
// // Make the mock return `true` for the first call,
// // and `false` for the second call
// filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
// const result = [11, 12].filter(num => filterTestFn(num));
// console.log(result);
// // > [11]
// console.log(filterTestFn.mock.calls[0][0]); // 11
// console.log(filterTestFn.mock.calls[1][0]); // 12


// import axios from 'axios';
// import Users from './users'; // has axios request in all method
// jest.mock('axios');
// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   axios.get.mockResolvedValue(resp);
//   // or you could use the following depending on your use case:
//   // axios.get.mockImplementation(() => Promise.resolve(resp))
//   return Users.all().then(data => expect(data).toEqual(users));
// });

// import defaultExport, {bar, foo} from '../foo-bar-baz';
// jest.mock('../foo-bar-baz', () => {
//   const originalModule = jest.requireActual('../foo-bar-baz');
//   //Mock the default export and named export 'foo'
//   return {
//     __esModule: true,
//     ...originalModule,
//     default: jest.fn(() => 'mocked baz'),
//     foo: 'mocked foo',
//   };
// });
// test('should do a partial mock', () => {
//   const defaultExportResult = defaultExport();
//   expect(defaultExportResult).toBe('mocked baz');
//   expect(defaultExport).toHaveBeenCalled();

//   expect(foo).toBe('mocked foo');
//   expect(bar()).toBe('bar');
// });


// const myMockFn = jest
//   .fn(() => 'default')
//   .mockImplementationOnce(() => 'first call')
//   .mockImplementationOnce(() => 'second call');
// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// // > 'first call', 'second call', 'default', 'default'