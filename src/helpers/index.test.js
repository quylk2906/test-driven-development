import { getLetterMatchCount } from '../helpers';

describe('Testing helpers function', () => {
  const secrectWord = 'party';
  test('should return correct count when there are no matching letters', () => {
    expect(getLetterMatchCount('bones', secrectWord)).toBe(0);
  });
  test('should return the correct count when there are 3 letters matched', () => {
    expect(getLetterMatchCount('train', secrectWord)).toBe(3);
  });
  test('should return the correct count when there are duplicated letters in the guessed words', () => {
    expect(getLetterMatchCount('parka', secrectWord)).toBe(3);
  });
});
