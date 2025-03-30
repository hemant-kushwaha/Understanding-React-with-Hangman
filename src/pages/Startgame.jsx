import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">      
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
          <h1 className="text-[2.5rem] font-bold mb-5">Start Multiplayer Game</h1>
          <TextInputFormContainer />
        </div>
      </div>
    </>
  );
}

export default StartGame;
