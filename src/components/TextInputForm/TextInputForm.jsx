import Button from "../button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm ({inputType,handleFormSubmit,handleTextInputChange,handleHintInputChange,handleButtonShowHideClick}) {
    

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label="Secret Word"
                    placeholder="Enter the secret word"
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <TextInput 
                    type={"text"}
                    label="Hint"
                    placeholder="Enter a hint"
                    onChangeHandler={handleHintInputChange}
                />
            </div>

             <div>
                <Button 
                    styleType="warning"
                    text={inputType == "password" ? "Show" : "Hide"}
                    onClickHandler = {handleButtonShowHideClick}
                />
            </div>
                <Button 
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
        </form>

    );
}

export default TextInputForm;