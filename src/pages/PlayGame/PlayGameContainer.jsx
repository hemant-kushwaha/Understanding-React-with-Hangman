import PlayGame from "./PlayGame";
import { useState,useEffect } from "react";
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

    const [isGameOver, setIsGameOver] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

    // Set word and hint based on multiplayer or single-player
    const wordSelected = state?.wordSelected || word || "";
    const finalhint = state?.userHint || hint;

     // Check if the player has won or lost
        useEffect(() => {
            if (wordSelected) {
                let allLettersGuessed = true;
                    for (let letter of wordSelected) {
                        if (!guessedLetters.includes(letter.toUpperCase())) {
                            allLettersGuessed = false;
                            break;
                        }
                    }

                if (allLettersGuessed) {
                    setIsWinner(true);
                    setIsGameOver(true);
                }
                if (step >= 6) {
                    setIsGameOver(true);
                }
            }
        }, [guessedLetters, step, wordSelected]);    

    function handleLetterClick (letter){
        if(wordSelected.toUpperCase().includes(letter)){
            console.log("Correct")
        } else {
            console.log("Wrong");
            setStep(step+1);
        }
        setGuessedletters([...guessedLetters,letter]);
    }  

    function handleRestart() {
        setIsGameOver(false);
        setIsWinner(false);
        setGuessedletters([]);
        setStep(0);

        if (wordList.length > 0) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            setWord(wordList[randomIndex].wordValue);
            setHint(wordList[randomIndex].wordHint);
            console.log(wordList[randomIndex].wordValue);
        }
    }

    
    return (
        <PlayGame      
        wordSelected={wordSelected}
        guessedLetters={guessedLetters}
        step={step}
        onLetterClick={handleLetterClick}
        onRestart={handleRestart}
        hint={finalhint}
        isGameOver={isGameOver}
        isWinner={isWinner}
        />
    );


}

export default PlayGameContainer;