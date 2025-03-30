
import getButtonStylings from "./getButtonStyling";

function Button ({text, onClickHandler,styleType ="primary",type="button",size="md"}) {

  const sizeClasses = {
    sm: "w-32 px-3 py-2 text-sm rounded-sm",
    md: "w-40 px-6 py-3 text-base rounded-md",
    lg: "w-48 px-8 py-4 text-lg rounded-lg"
};    
    return (
        <button onClick={onClickHandler} 
        type={type}
        className= {`${sizeClasses[size]} ${getButtonStylings(styleType)}`}
        // style={{backgroundColor:blue}}  --> Inline CSS
        // ${getButtonStyling(styleType)}
        > 
          {text}
        </button>
    );
}

export default Button;
