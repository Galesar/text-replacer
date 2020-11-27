import { useState } from "react";


export const useInput = initialValue => {
    const [value, setValue] = useState('');

    return {
        value,
        setValue,
        reset: () => {setValue("")},
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};