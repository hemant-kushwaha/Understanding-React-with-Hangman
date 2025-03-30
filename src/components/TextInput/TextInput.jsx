function TextInput ({type="text",label,placeholder ="enter your input  here",value,onChangeHandler}) {
    return (
        <label>
            <div className="text-gray-700 font-bold mb-2 text-lg">{label}</div>

            <input type = {type} 
                   className="px-4 py-2 border border-gray-500 rounded-md w-2/3 mb-4"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChangeHandler}
        />
        
        </label>
    )

}

export default TextInput;