import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

//this is only needed for custom inputs in sanity
function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}//end createPatchFrom function

const formatMoney = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'EUR',
}).format; 

export default function PriceInput({ type, value, onChange, inputComponent}) {
    return (
        <div>
            <h2>{type.title} - {value ? formatMoney(value / 100) : ''}</h2>
            <p>{type.description}</p> 
            <input 
                type={type.name} 
                value={value} 
                onChange={ event => onChange(createPatchFrom(event.target.value))}
                ref={inputComponent} //tells sanity that this is the input
            />
        </div>
    );
}//end PriceInput function

PriceInput.focus = function () {
    this._inputElement.focus();
};