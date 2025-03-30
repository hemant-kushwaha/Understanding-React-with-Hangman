import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer () {

 const [inputType,setInputType] = useState("password");
 const [value,setValue] = useState("");
 const [userHint,setUserHint] = useState("");

 const navigate=  useNavigate();


    function handleFormSubmit (e) { 
        e.preventDefault();
        console.log("Form Submitted",value);

        if(value.trim()) {
            // navigate(`/play?text=${value}&author=hemant`);//Passing path params
            // navigate(`/play/${value}/2`);//Passing path params
            // navigate('/play',{ state:{ wordSelected:value } });
            navigate("/play", { state: { wordSelected: value , userHint:userHint } });

            

        }
    }

    function handleTextInputChange (event) {
        console.log("text input change");
        console.log(event.target.value );
        setValue(event.target.value);
    }

    function handleHintInputChange (event){
        setUserHint(event.target.value);
    }

    function handleButtonShowHideClick (event) {
        console.log("Show/Hide Button CLicked");
        if(inputType == "password"){
            setInputType("text");
        } else {
            setInputType("password");
        }

        console.log(inputType);
        
    }

    useEffect(() =>{
        console.log("component loaded")
    });

    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit ={handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            handleButtonShowHideClick = {handleButtonShowHideClick}
            handleHintInputChange={handleHintInputChange}
        />
    );
}

export default TextInputFormContainer;