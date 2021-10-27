/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

test('renders learn react link', () => {
  const result = renderer.create(<Calculator />).toJSON();
  expect(result).toMatchSnapshot();
});
