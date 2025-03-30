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
        <Link to='/play'>
        <Button text='Single Player'></Button>
        </Link>
        <br />
        <Link to='/start'>
        <div className="mt-4">
        <Button text='Multi Player' styleType="secondary"></Button>
        </div>
        </Link>
        

        </>

    )
}

export default Home;