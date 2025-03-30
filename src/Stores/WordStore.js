//Zustand SETUP
import { create } from "zustand";

//create function create a store for us
const useWordStore = create ((set)=>{ 

    return {
        wordList :[],
        word: '',
        setWordList: (list) =>{
            //calling set function
            set((state)=>{
                console.log("State" ,state);
                //whatever is returned here get set as a new state
                return {
                    ...state,
                    wordList:list
                }
            })
        },
        setWord : (newWord) =>{
            //calling set function it takes a callback
            set((state) =>{
                
                return {
                    ...state,
                    word : newWord
                }

            })
        }
}
});

export default useWordStore;