import { useState } from 'react';

export default function useForm(defaults) {
    const [values, setValues] = useState(defaults)
    
    function updateValue(e) {
        //check if its a number and convert
        let { value } = e.target;
        if(e.target.type === 'number') {
            value = ParseInt(value);
        };

        setValues({
            //copy in from existing state
            ...values,
            //update the changed value
            [e.target.name] : value
        });
    }

    return { values, updateValue };
};