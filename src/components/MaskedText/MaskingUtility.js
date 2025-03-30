/*
OriginalWord -> Input word that is expected to be guessed
GuessedLetters -> Word that is already guessed by the user

*/

export function getMaskedStrings (originalWord,guessedLetters) {

    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const guessedLettersSet = new Set (guessedLetters);

    const result = originalWord.toUpperCase().split('').map( char => {
        if(guessedLettersSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    }); //['H','E','M','_','_','T']

   return result;// 
}