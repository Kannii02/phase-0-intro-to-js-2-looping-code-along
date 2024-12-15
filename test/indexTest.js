import { expect } from 'chai';
import { writeCards, countDown } from '../index.js';

describe('countDown', () => {
  it('logs numbers from the given number down to 0', () => {
    const spy = [];
    const originalLog = console.log;
    console.log = (msg) => spy.push(msg);

    countDown(5);

    expect(spy).to.deep.equal([5, 4, 3, 2, 1, 0]);
    console.log = originalLog;
  });
});

describe('writeCards', () => {
  it('returns an array of thank-you messages', () => {
    const result = writeCards(['Alice', 'Bob'], 'birthday');
    expect(result).to.deep.equal([
      'Thank you, Alice, for the wonderful birthday gift!',
      'Thank you, Bob, for the wonderful birthday gift!',
    ]);
  });
});
