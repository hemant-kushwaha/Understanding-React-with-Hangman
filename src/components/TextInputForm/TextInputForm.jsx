import Button from "../button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm ({inputType,handleFormSubmit,handleTextInputChange,handleButtonShowHideClick}) {
    

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label="Entered a word or a phase"
                    placeholder="Enter word or phase ...."
                    onChangeHandler={handleTextInputChange}
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