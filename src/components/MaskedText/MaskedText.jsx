import { getMaskedStrings } from "./MaskingUtility.js";

function MaskedText ({text,guessedLetters}) {
    const maskedString = getMaskedStrings(text,guessedLetters);

    return (
      <>
        {maskedString.map((letter,idx) => {
            return (
            <span key={idx} className="mx-2 text-4xl" >
                {letter}
            </span>
            )
        })}          
      </>
    );
}

export default MaskedText;