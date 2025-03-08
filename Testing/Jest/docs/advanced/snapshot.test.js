import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// The first time this test is run, Jest creates a snapshot file that looks like this:
exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;

// To resolve this, we will need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:
// jest --updateSnapshot


it('will check the matchers and pass', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
  });
  
  // Snapshot
  exports[`will check the matchers and pass 1`] = `
  {
    "createdAt": Any<Date>,
    "id": Any<Number>,
    "name": "LeBron James",
  }
  `;



