import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/Startgame';
import PlayGameContainer from './pages/PlayGame/PlayGameContainer';
import Home from './pages/Home';
import { WordContext } from './Context/WordContext.js'
import { useState } from 'react';


function App() {
const [wordList,setWordList] = useState([]);
const [word,setWord] = useState('');
const [hint,setHint] = useState('');


  return (
 <WordContext.Provider value={{word,setWord,hint,setHint}}>
   <Routes>
    <Route path='/start' element={<StartGame />} />
    <Route path='/play' element ={<PlayGameContainer />} />
    <Route path='/' element ={<Home />} />
   </Routes>
  </WordContext.Provider>
  
  )
}
export default App;



























/* import './App.css'
import Button from './components/button/button'
import TextInput from './components/TextInput/TextInput'

function App() {

  return (
    <div>
      <Button text="Click Me" styleType='success' onClickHandler={() =>{console.log("Click Me")}}/>
      <Button text="Click Me 2" onClickHandler={() =>{console.log("Click Me 2")}} />
      <Button text="Click Me 3"onClickHandler={() =>{console.log("Click Me 3")}} />
      <Button text="Click Me 4" onClickHandler={() =>{console.log("Click Me 4")}} />

      <TextInput 
        label={"Your text here"}
        placeholder={"enter some text here"}
        onChangeHandler={(e) =>{console.log(e.target.value)}}
      />
    </div>
  )
}

export default App;

// 
*/