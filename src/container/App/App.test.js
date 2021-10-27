/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const result = renderer.create(<App />).toJSON();
  expect(result).toMatchSnapshot();
});
