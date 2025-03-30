import TextInput from "../components/TextInput/TextInput";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";

function StartGame () {

  
  return (
    <>

    <h1 className="text-center text-[4rem] my-5">Start Game</h1>
    {/*comments way */}
    {/* <Link to ="/play" className="text-blue-400">Play Game Link </Link>   */}
    <TextInputFormContainer  />
   

    </>
)
}

export default StartGame;