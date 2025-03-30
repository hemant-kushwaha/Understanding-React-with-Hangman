import { Link} from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import HangMan from "../../components/Hangman/HangMan";
import Button from "../../components/button/button";
import { useContext } from "react";
import { WordContext } from "../../Context/WordContext";

function PlayGame ({wordSelected,guessedLetters,step,onLetterClick,onRestart,hint}) {
    /*Receiving part of Query path params
     const [searchParams] = useSearchParams(); --> Hook given by react router dom
     SearchParams.get("text"); */

    //   const {text,id}= useParams(); --> directly access using varibale name

    //state variable m always ek naya value daalna hota hai

    // const {wordList} = useContext(WordContext);

    return (
        <>
        {/* <h1>Play Game {text} {id} </h1> --> path params  */}

        <h1>Play Game  </h1>

        {/* {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue}</li>)} */}

        <MaskedText text={wordSelected} guessedLetters={guessedLetters}/>
        {hint} 

        <div className=" my-[1rem]">
        <div className="flex">
        <LetterButtons text={wordSelected} guessedLetters={guessedLetters} onletterClick={onLetterClick}/>
        <HangMan step={step}/>
        </div>
        </div>

        <div>
        <Link to ="/start" className="text-blue-400">Start Game Link</Link> 
        <Link to='/' className="text-red-400">Home</Link>
        <Button text="Restart" onClickHandler={onRestart}/>
        </div>
        

        </>
    )
    }
    
    export default PlayGame;

    // 