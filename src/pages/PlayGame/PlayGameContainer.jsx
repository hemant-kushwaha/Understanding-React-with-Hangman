import PlayGame from "./PlayGame";
import { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { WordContext } from "../../Context/WordContext";
import useWordStore from "../../Stores/WordStore";




function PlayGameContainer(){

    const location = useLocation();
    const { state } = location;



    const {word,setWord,hint,setHint} = useContext(WordContext);
    const {wordList} = useWordStore();
    
    
    const [guessedLetters,setGuessedletters] = useState([]);

    const [step,setStep] = useState(0);

    // Set word and hint based on multiplayer or single-player
    const wordSelected = state?.wordSelected || word || "";
    const finalhint = state?.userHint ||hint || "No hint available";

    
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
            setHint(wordList[randomIndex].wordHint);
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
        hint={finalhint}
        />
    );


}

export default PlayGameContainer;