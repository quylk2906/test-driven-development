export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedWordSet = new Set(guessedWord.split(''));
  const secretWordSet = new Set(secretWord.split(''));

  return [...secretWordSet].filter(item => guessedWordSet.has(item)).length;
};
