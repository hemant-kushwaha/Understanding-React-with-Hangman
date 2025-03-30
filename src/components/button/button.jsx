
import getButtonStylings from "./getButtonStyling";

function Button ({text, onClickHandler,styleType ="primary",type="button"}) {

    // console.log({text});
    
    return (
        <button onClick={onClickHandler} 
        type={type}
        className= {`px-4 py-[17px] ${getButtonStylings(styleType)}`}
        // style={{backgroundColor:blue}}  --> Inline CSS
        // ${getButtonStyling(styleType)}
        > 
          {text}
        </button>
    );
}

export default Button;
