import PlayGame from "./PlayGame";
import { useState } from "react";
import { useContext } from "react";
import { WordContext } from "../../Context/WordContext";
import useWordStore from "../../Stores/WordStore";




function PlayGameContainer(){
    const {word,setWord} = useContext(WordContext);
    const {wordList} = useWordStore();
    
    
    const [guessedLetters,setGuessedletters] = useState([]);

    const [step,setStep] = useState(0);
    const wordSelected = word || "";//if word is falsy value it returns then ""

    
    function handleLetterClick (letter){
        if(wordSelected.toUpperCase().includes(letter)){
            console.log("Correct")
        } else {
            console.log("Wrong");
            setStep(step+1);
        }
        setGuessedletters([...guessedLetters,letter]);
    }  

    function onRestart (){
        if (wordList.length > 0) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            setWord(wordList[randomIndex].wordValue); // Pick a new word
            console.log(wordList[randomIndex].wordValue);
        }
        setGuessedletters([]); // Reset guessed letters
        setStep(0); // Reset the step count
    }

    return (
        <PlayGame      
        wordSelected={wordSelected}
        guessedLetters={guessedLetters}
        step={step}
        onLetterClick={handleLetterClick}
        onRestart={onRestart}
        />
    );


}

export default PlayGameContainer;