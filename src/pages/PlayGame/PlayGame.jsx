import { Link} from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import HangMan from "../../components/Hangman/HangMan";
import Button from "../../components/button/button";
import { useContext,useState,useEffect } from "react";
import { WordContext } from "../../Context/WordContext";

function PlayGame ({wordSelected,guessedLetters,step,onLetterClick,onRestart,hint,isGameOver,isWinner}) {
    /*Receiving part of Query path params
     const [searchParams] = useSearchParams(); --> Hook given by react router dom
     SearchParams.get("text"); */

    //   const {text,id}= useParams(); --> directly access using varibale name

    //state variable m always ek naya value daalna hota hai

    // const {wordList} = useContext(WordContext);
            {/* <h1>Play Game {text} {id} </h1> --> path params  */}

    return (
        <>
        {/* Navbar with buttons */}
      <nav className="flex justify-between items-center bg-gray-100 p-4">
        <Link to="/" className="text-black text-lg font-bold">Home</Link>
        <div className="flex space-x-4">
          <Link to="/start" className="text-black text-lg font-bold">MultiplayerMode</Link>
          <button onClick={onRestart} className="font-bold text-lg">Restart</button> 
        </div>
      </nav>

        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            {/* Guess the Word Card */}
            <div className="bg-white shadow-lg rounded-xl p-2 w-full max-w-xl text-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">Guess the Word</h2>
                <MaskedText text={wordSelected} guessedLetters={guessedLetters} />
                <p className="text-blue-600 mt-1 font-semibold text-lg">Hint: {hint}</p>
            </div>

             {/* Letter Buttons (Keyboard Layout) */}
             <div className="rounded-xl  w-full max-w-4xl mb-5 text-center">
                <LetterButtons text={wordSelected} guessedLetters={guessedLetters} onletterClick={onLetterClick} />
            </div>
            
             {/* Hangman Card */}
             <div className=" bg-white shadow-lg rounded-lg p-4 w-full max-w-lg text-right">
                <span className="text-red-500 font-bold">Chances Left: {6 - step}</span>
                <HangMan step={step} />
            </div>      
            
         </div>

         {/* Game Over / Win Popup */}
         {isGameOver && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            {isWinner ? "🎉 You Won!" : "💀 Game Over!"}
                        </h2>
                        <div className="flex justify-center space-x-6">
                              <Button text="Singleplayer Mode" onClickHandler={onRestart} size="md" />
                            <Link to="/start">
                            <Button text="Multiplayer Mode" size="md" styleType="success"/>                               
                            </Link>
                        </div>
                    </div>
                </div>
            )}

 {/* Footer */}

        



         {/*<h1>Play Game  </h1>

        {/* {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue}</li>)} */}
{/*}
        <MaskedText text={wordSelected} guessedLetters={guessedLetters}/>
        <div>{hint}</div>

        <div className=" my-[1rem]">
        <div className="flex flex-col">
        <LetterButtons text={wordSelected} guessedLetters={guessedLetters} onletterClick={onLetterClick}/>
        <HangMan step={step}/>
        </div>
        </div>

        <div>
        <Link to ="/start" className="text-blue-400">Start Game Link</Link> 
        <Link to='/' className="text-red-400">Home</Link>
        <Button text="Restart" onClickHandler={onRestart}/>
        </div>
        */}

        </>
    )
    }
    
    export default PlayGame;

    // 