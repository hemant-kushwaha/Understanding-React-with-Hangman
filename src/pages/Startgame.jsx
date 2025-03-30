import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";

function StartGame() {
  return (
    <>
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
          <h1 className="text-[2.5rem] font-bold mb-5">Start Multiplayer Game</h1>

          <TextInputFormContainer />

        </div>
      </div>
    </>
  );
}

export default StartGame;
