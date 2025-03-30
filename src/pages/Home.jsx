import { Link } from "react-router-dom";
import Button from "../components/button/button";
import { useContext, useEffect} from "react";
import { WordContext } from "../Context/WordContext";
import useWordStore from "../Stores/WordStore";

function Home () {
    // const [word,setWord] = useState('');
    //Context Api
    const {setWord} = useContext(WordContext);//Using Context API
    const {setWordList} =useWordStore();//Using zustand-> coming from store

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);
        setWordList([...data]);
        const randomIndex = Math.floor(Math.random()* data.length);
        console.log(randomIndex);
        console.log(data[randomIndex])
        setWord(data[randomIndex].wordValue);
    }

    useEffect(()=>{
        fetchWords();
    },[]);

return (
        <>
        <div className="h-screen flex flex-col justify-between text-center">
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-3xl font-bold text-white bg-blue-500 rounded-3xl px-12 py-2 w-full max-w-md mb-9">
                    HangmanMaster
                </h1>
                <p className="text-5xl font-bold text-black mb-3">Welcome to the Hangman!</p>
                <p className="mb-6 text-lg">Start a fun and challenging game of Hangman</p>

                <div className="flex space-x-4">
                    <Link to="/play" className="mb-4">
                        <Button text="Single Player" size="md" styleType="primary" />
                    </Link>
                    <Link to="/start">
                        <Button text="Multi Player" size="md" styleType="secondary" />
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="pb-2">Made with ❤️ by Hemant Kushwaha</div>
        </div>

        </>

    )
}

export default Home;