/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import calculate from './calculate';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(calculate({ result: '21', next: '3', operation: '+' }, '=')).toStrictEqual({ next: null, operation: null, result: '24' });
  });
});
