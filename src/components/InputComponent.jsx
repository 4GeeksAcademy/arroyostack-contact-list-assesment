import { useState } from "react";
import { formatPostcssSourceMap } from "vite";

export const InputComponent = ({ type }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    // const onSubmit = (event) => {
    //     event.preventDefault();

    //     const input = inputValue.trim();

    //     if(input.length <= 1) return;
    //     setinputValue('');
    //     onNewCategory(input);
    // };

    return (

        <input
            type={ type }
            value={ inputValue }
            onChange={ onInputChange }
            className="form-control rounded"
        />


    );
};
