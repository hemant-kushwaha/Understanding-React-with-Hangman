const Alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons ({text,guessedLetters,onletterClick }) {


    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        if(guessedLettersSet.has(letter)){
            return `${originalLetters.has(letter) ? 'bg-green-500':'bg-red-500'}`;
        } else {
            return 'bg-orange-500';
        }
    }

    function handleLetterClick (event) {
        const charOfTheLetter = event.target.value;
        onletterClick?.(charOfTheLetter);

    }

    const buttons = Alphabets.map(letter => {
        return(
                <button
                key ={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>

        );
    })

    return (
        <>
        <div className="w-[23rem] h-[12rem]">
         {buttons}
         </div>

        </>
    );

}

export default LetterButtons;